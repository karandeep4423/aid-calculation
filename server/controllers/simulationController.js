const createError = require('../utils/appError');
const houseHoldType = require('../services/simulation/houseHoldType');
const primeRenov = require('../services/simulation/primeRenov');
const primeRenovCoprop = require('../services/simulation/primeRenovCoprop');
const primeRenovParcAcc = require('../services/simulation/primeRenovParcAcc');
const primeRemplChaff = require('../services/simulation/primeRemplChaff');
const primeAdapt = require('../services/simulation/primeAdapt');
const {householdData} = require('../validation/validation');
const Simulation = require('../models/simulationModel');


exports.householdType = async(req, res, next) => {
    try {
        const { error, value } = householdData.validate(req.body);

        if (error) {
            return next(new createError(error.details[0].message, 400));
        }

        const { nbPers, revenu, postalCode } = value;
        const category = houseHoldType.getCategory(nbPers, revenu, postalCode);

        res.status(200).json({
            status: 'success',
            message: 'success',
            result: category
        })
    } catch (error) {
        next(error);
    }
};

exports.primeRenov = async(req, res, next) => {
    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'renovation',
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
            travaux: req.body.travaux,
        });

        // const { error, value } = Simulation.validate(simulation);
        // if (error) {
        //     return next(new createError(error.details[0].message, 400));
        // }

        const eligible = primeRenov.checkPrimeRenovElig(simulation);
        let travaux = [];
        if(simulation.travaux.length !== 0 && eligible === true) {
            travaux = primeRenov.getTravauxResult(simulation.travaux, houseHoldType.getCategory(simulation.nbPers, simulation.revenuFiscal, simulation.codePostal));
        }

        res.status(200).json({
            status: 'success',
            message: 'success',
            result: {
                'eligible' : eligible,
                'travaux' : travaux,
                'simulation': simulation
            }
        })
    } catch (error) {
        next(error);
    }
};


exports.primeRenovCoprop = async(req, res, next) => {
    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'copropriete',
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
            copEstimationMontant: req.body.copEstimationMontant
        });

        console.log(simulation);

        const eligible = primeRenovCoprop.checkPrimeRenovCopropElig(simulation);
        // let travaux = [];
        // if(simulation.travaux.length !== 0 && eligible === true) {
        //     travaux = primeRenov.getTravauxResult(simulation.travaux, houseHoldType.getCategory(simulation.nbPers, simulation.revenuFiscal, simulation.codePostal));
        // }

        res.status(200).json({
            status: 'success',
            message: 'success',
            result: {
                'eligible' : eligible,
                'travaux' : travaux,
                'simulation': simulation
            }
        })
    } catch (error) {
        next(error);
    }
};

exports.primeRenovCopropAides = async(req, res, next) => {
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
            status: 'success',
            message: 'success',
            result: {
                'aides' : aides,
                'simulation': simulation
            }
        })
    } catch (error) {
        next(error);
    }
};

exports.primeRenovCopropBonif = async(req, res, next) => {
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
            status: 'success',
            message: 'success',
            result: {
                'bonification' : bonification,
                'simulation': simulation
            }
        })
    } catch (error) {
        next(error);
    }
};

exports.primeRenovCopropBonifFrag = async(req, res, next) => {
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
            status: 'success',
            message: 'success',
            result: {
                'bonification_fragiles' : bonification,
                'simulation': simulation
            }
        })
    } catch (error) {
        next(error);
    }
};


exports.primeRenovParcAcc = async(req, res, next) => {

    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'parc acc',
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
            copEstimationMontant: req.body.copEstimationMontant
        });

        const eligible = primeRenovParcAcc.checkPrimeRenovParcAccEligibilite(simulation);

        if (eligible === true) {
            const prime = primeRenovParcAcc.checkPrimeRenovParcAccPrime(simulation);
        } else {
            const prime = null;
        }

        res.status(200).json({
            status: 'success',
            message: 'success',
            result: {
                'eligible' : eligible,
                'prime': prime,
                'simulation': simulation
            }
        })
    } catch (error) {
        next(error);
    }
};

// dosent work , missing conditions ...
exports.primeLocAvantage = async(req, res, next) => {

    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'loc avantage',
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
            status: 'success',
            message: 'success',
            result: null
        })
    } catch (error) {
        next(error);
    }
};

 
exports.primeRemplacementChauffEligibilite = async(req, res, next) => {

    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'rempl chauff',
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

        const eligible = primeRemplChaff.primeRemplChaffCheck(simulation)

        res.status(200).json({
            status: 'success',
            message: 'success',
            eligible: eligible
        })
    } catch (error) {
        next(error);
    }
};

exports.primeRemplacementChauffRempl = async(req, res, next) => {

    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'rempl chauff',
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
            remplacementChauffage: req.body.remplacementChauffage
        });

        const eligible = primeRemplChaff.primeRemplChaffCheck(simulation)
        if (eligible === true) {
            const primes = primeRemplChaff.primeRemplChauffRem(simulation)
        } else {
            const primes = null;
        }

        res.status(200).json({
            status: 'success',
            message: 'success',
            eligible: eligible,
            primes: primes
        })
    } catch (error) {
        next(error);
    }
};


exports.primeAdapt = async(req, res, next) => {

    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'rempl chauff',
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
            copEstimationMontant: req.body.copEstimationMontant
        });

        const eligible = primeAdapt.checkPrimeAdaptElig(simulation)
        if (eligible === true) {
            const primes = primeAdapt.getPrimeAdaptResult(simulation)
        } else {
            const primes = null;
        }

        res.status(200).json({
            status: 'success',
            message: 'success',
            eligible: eligible,
            primes: primes
        })
    } catch (error) {
        next(error);
    }
};


exports.primePTZ = async(req, res, next) => {

    try {
        await Simulation.validate(req.body);

        const simulation = new Simulation({
            // user: req.body.user,
            typeSimulation: 'prime ptz',
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

        const eligible = primeAdapt.checkPrimePTZElig(simulation)
        let primes = null;
        if (eligible === true) {
            primes = primeAdapt.getPrimePTZResult(simulation)
        }

        res.status(200).json({
            status: 'success',
            message: 'success',
            eligible: eligible,
            primes: primes
        })
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
