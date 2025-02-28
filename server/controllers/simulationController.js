const createError = require("../utils/appError");
const houseHoldType = require("../services/simulation/houseHoldType");
const primeRenov = require("../services/simulation/primeRenov");
const primeRenovCoprop = require("../services/simulation/primeRenovCoprop");
const primeRenovParcAcc = require("../services/simulation/primeRenovParcAcc");
const primeRemplChaff = require("../services/simulation/primeRemplChaff");
const primeAdapt = require("../services/simulation/primeAdapt");
const { householdData } = require("../validation/validation");
const Simulation = require("../models/simulationModel");
const User = require("../models/userModel");

exports.householdType = async (req, res, next) => {
  try {
    const { error, value } = householdData.validate(req.body);

    if (error) {
      return next(new createError(error.details[0].message, 400));
    }

    const { nbPers, revenu, postalCode } = value;
    const category = houseHoldType.getCategory(nbPers, revenu, postalCode);

    res.status(200).json({
      status: "success",
      message: "success",
      result: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRenov = async (req, res, next) => {
  try {
    // Validate the request body using the Mongoose model
    const simulation = new Simulation({
      user: req.body.user,
      typeSimulation: "renovation",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      // region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
      dpeLogement: req.body.dpeLogement,
      travaux: req.body.travaux,
    });

    // Validate the simulation instance
    await simulation.validate();

    const eligible = primeRenov.checkPrimeRenovElig(simulation);
    let travauxResult = [];
    
    // Calculate travauxResult if applicable
    if (simulation.travaux.length !== 0 && eligible === true) {
      travauxResult = primeRenov.getTravauxResult(
        simulation.travaux,
        houseHoldType.getCategory(
          simulation.nbPers,
          simulation.revenuFiscal,
          simulation.codePostal
        )
      );
    }

    // Set eligible and travaux result in simulation
    simulation.eligible = eligible;
    simulation.travauxResult = travauxResult;

    // Save the simulation with eligible and travaux result
    await simulation.save();

    res.status(200).json({
      status: "success",
      message: "Simulation created successfully",
      result: {
        eligible: eligible,
        travauxResult: travauxResult,
        simulation: simulation,
      },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Handle validation errors by extracting user-friendly messages
      const formattedErrors = Object.values(error.errors).map(err => {
        // Return the user-friendly message
        return err.message; // Assuming you've set friendly messages in your Mongoose schema
      });

      return res.status(400).json({
        status: "error",
        message: formattedErrors.join(', '), // Join messages into a single string
      });
    }

    // Handle other types of errors
    console.error(error); // Log the error for server-side debugging
    return res.status(500).json({
      status: "error",
      message: "Une erreur interne s'est produite. Veuillez réessayer.",
    });
  }
};

exports.getSimulationByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId; // Get user ID from request params

    // Find all simulations for the provided user ID
    const simulations = await Simulation.find({ user: userId }).sort({ createdAt: -1 }) ;

    if (!simulations || simulations.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No simulations found for this user.",
      });
    }

    // Return the found simulations
    res.status(200).json({
      status: "success",
      message: "Simulations retrieved successfully.",
      simulations: simulations,
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRenovCoprop = async (req, res, next) => {
  try {
    await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      typeSimulation: "copropriete",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
      dpeLogement: req.body.dpeLogement,
      gainEnergetique: req.body.gainEnergetique,
      nbLogement: req.body.nbLogement,
      nbLogementHabPrinc: req.body.nbLogementHabPrinc,
      copImmat: req.body.copImmat,
      n2sup8: req.body.n2sup8,
      copNpnru: req.body.copNpnru,
      copEstimation: req.body.copEstimation,
      copEstimationMontant: req.body.copEstimationMontant,
    });

    console.log(simulation);

    const eligible = primeRenovCoprop.checkPrimeRenovCopropElig(simulation);
    // let travaux = [];
    // if(simulation.travaux.length !== 0 && eligible === true) {
    //     travaux = primeRenov.getTravauxResult(simulation.travaux, houseHoldType.getCategory(simulation.nbPers, simulation.revenuFiscal, simulation.codePostal));
    // }

    res.status(200).json({
      status: "success",
      message: "success",
      result: {
        eligible: eligible,
        travaux: travaux,
        simulation: simulation,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRenovCopropAides = async (req, res, next) => {
  try {
    //await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      gainEnergetique: req.body.gainEnergetique,
      dpeLogement: req.body.dpeLogement,
      dpeLogementPost: req.body.dpeLogementPost,
      copEstimation: req.body.copEstimation,
      copEstimationMontant: req.body.copEstimationMontant,
    });

    const aides = primeRenovCoprop.primeRenovCopropAides(simulation);

    res.status(200).json({
      status: "success",
      message: "success",
      result: {
        aides: aides,
        simulation: simulation,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRenovCopropBonif = async (req, res, next) => {
  try {
    //await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      dpeLogement: req.body.dpeLogement,
      dpeLogementPost: req.body.dpeLogementPost,
      copEstimation: req.body.copEstimation,
      copEstimationMontant: req.body.copEstimationMontant,
    });

    const bonification = primeRenovCoprop.primeRenovCopropBonif(simulation);

    res.status(200).json({
      status: "success",
      message: "success",
      result: {
        bonification: bonification,
        simulation: simulation,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRenovCopropBonifFrag = async (req, res, next) => {
  try {
    //await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      n2sup8: req.body.n2sup8,
      copNpnru: req.body.copNpnru,
      copEstimationMontant: req.body.copEstimationMontant,
    });

    const bonification = primeRenovCoprop.primeRenovCopropBonifFrag(simulation);

    res.status(200).json({
      status: "success",
      message: "success",
      result: {
        bonification_fragiles: bonification,
        simulation: simulation,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRenovParcAcc = async (req, res, next) => {
  try {
    await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      typeSimulation: "parc acc",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
      dpeLogement: req.body.dpeLogement,
      dpeLogementPost: req.body.dpeLogementPost,
      copEstimationMontant: req.body.copEstimationMontant,
    });

    const eligible =
      primeRenovParcAcc.checkPrimeRenovParcAccEligibilite(simulation);
    let prime;
    if (eligible === true) {
      prime = primeRenovParcAcc.checkPrimeRenovParcAccPrime(simulation);
    } else {
      prime = null;
    }

    res.status(200).json({
      status: "success",
      message: "success",
      result: {
        eligible: eligible,
        prime: prime,
        simulation: simulation,
      },
    });
  } catch (error) {
    next(error);
  }
};

// dosent work , missing conditions ...
exports.primeLocAvantage = async (req, res, next) => {
  try {
    await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      typeSimulation: "loc avantage",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
      dpeLogementPost: req.body.dpeLogementPost,
    });

    res.status(200).json({
      status: "success",
      message: "success",
      result: null,
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRemplacementChauffEligibilite = async (req, res, next) => {
  try {
    await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      typeSimulation: "rempl chauff",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
    });

    const eligible = primeRemplChaff.primeRemplChaffCheck(simulation);

    res.status(200).json({
      status: "success",
      message: "success",
      eligible: eligible,
    });
  } catch (error) {
    next(error);
  }
};

exports.primeRemplacementChauffRempl = async (req, res, next) => {
  try {
    await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      typeSimulation: "rempl chauff",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
      remplacementChauffage: req.body.remplacementChauffage,
    });
    let primes;
    const eligible = primeRemplChaff.primeRemplChaffCheck(simulation);
    if (eligible === true) {
      primes = primeRemplChaff.primeRemplChauffRem(simulation);
    } else {
      primes = null;
    }

    res.status(200).json({
      status: "success",
      message: "success",
      eligible: eligible,
      primes: primes,
    });
  } catch (error) {
    next(error);
  }
};

exports.primeAdapt = async (req, res, next) => {
  try {
    await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      typeSimulation: "prime adapt",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
      copEstimationMontant: req.body.copEstimationMontant,
    });

    const eligible = primeAdapt.checkPrimeAdaptElig(simulation);
    let primes;
    if (eligible === true) {
      primes = primeAdapt.getPrimeAdaptResult(simulation);
    } else {
      primes = null;
    }

    res.status(200).json({
      status: "success",
      message: "success",
      eligible: eligible,
      primes: primes,
    });
  } catch (error) {
    next(error);
  }
};

exports.primePTZ = async (req, res, next) => {
  try {
    await Simulation.validate(req.body);

    const simulation = new Simulation({
      // user: req.body.user,
      typeSimulation: "prime ptz",
      typeBenef: req.body.typeBenef,
      typeLogement: req.body.typeLogement,
      natureResidence: req.body.natureResidence,
      dureeConstruction: req.body.dureeConstruction,
      occupation8: req.body.occupation8,
      adresse: req.body.adresse,
      ville: req.body.ville,
      codePostal: req.body.codePostal,
      region: req.body.region,
      nbPers: req.body.nbPers,
      revenuFiscal: req.body.revenuFiscal,
      copEstimationMontant: req.body.copEstimationMontant,
      dpeLogement: req.body.dpeLogement,
      travaux: req.body.travaux,
    });

    const eligible = primeAdapt.checkPrimePTZElig(simulation);
    let primes = null;
    if (eligible === true) {
      primes = primeAdapt.getPrimePTZResult(simulation);
    }

    res.status(200).json({
      status: "success",
      message: "success",
      eligible: eligible,
      primes: primes,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSimulationByAdmin = async (req, res, next) => {
  try {

    // Find all simulations for the provided user ID
    const userData = await User.find().sort({ createdAt: -1 });

    // Return the found simulations
    res.status(200).json({
      status: "success",
      message: "Simulations retrieved successfully.",
      userData: userData,
    });
  } catch (error) {
    next(error);
  }
};

/*
test
{
    "user": "6703c5a7eacd4eb5fae1de93",
    "typeSimulation": "renovation",
    "typeBenef": "Propriétaire occupant",
    "typeLogement": "Maison",
    "natureResidence": "Principale",
    "dureeConstruction": "Plus de 15 ans",
    "adresse": "123 Main St",
    "ville": "Paris",
    "codePostal": "75000",
    "region": "Île-de-France",
    "nbPers": 4,
    "revenuFiscal": 50000,
    "gainEnergetique": "Au moins 25%"
}
*/
