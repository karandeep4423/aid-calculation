const houseHoldType = require('./houseHoldType');

const getPrimeAdaptResult = (simualtion) => {
    if (simulation.copEstimationMontant <= 22000) {
        return simulation.copEstimationMontant * 0.7
    } else {
        return null;
    }
    
}

const checkPrimeAdaptElig = (simulation) => {
    if (
        ['Très Modeste', 'Modeste'].includes(houseHoldType.getCategory(simulation.nbPers, simualtion.revenuFiscal, simulation.codePostal))
    ) {
        return true;
    }

    return false;
};

module.exports = { checkPrimeAdaptElig, getPrimeAdaptResult };
