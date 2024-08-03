const primeRenow = require('./primeRenow');

const getPrimePTZResult = (simulation) => {
    if (simulation.travaux.length === 0) {
        return null;
    } else if (simulation.travaux.length === 1) {
        if (simulation.travaux[0] == 17) {
            return 7000;
        }
        return 15000;
    } else if (simulation.travaux.length === 2) {
        return 25000;
    } else if (simulation.travaux.length === 3) {
        return 30000;
    } else if (primeRenow.checkPrimeRenovElig(simulation) === true || simulation.gainEnergetique === 'Au moins 35%') {
        return 50000;
    }
}

const checkPrimePTZElig = (simulation) => {
    if (
        ['Propriétaire occupant', 'Propriétaire bailleur'].includes(simulation.typeBenef)
        && simulation.natureResidence === 'Principale'
        && ['Entre 2 et 15 ans', 'Plus de 15 ans'].includes(dureeConstruction)
        // && ['Au moins 35%', 'Au moins 50%'].includes(simulation.gainEnergetique)
    ) {
        return true;
    }

    return false;
};

module.exports = { checkPrimePTZElig, getPrimePTZResult };
