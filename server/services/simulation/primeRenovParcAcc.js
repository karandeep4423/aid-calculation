const houseHoldType = require('./houseHoldType');

const checkPrimeRenovParcAccEligibilite = (simulation) => {
    if (
        simulation.dpeLogement !== 'IDK' && simulation.dpeLogementPost !== 'IDK'
        && (['A', 'B', 'C', 'D', 'E', 'F', 'G'].indexOf(simulation.dpeLogement) - ['A', 'B', 'C', 'D', 'E', 'F', 'G'].indexOf(simulation.dpeLogementPost)) >= 2
    ) {
        return true;
    }

    return false;
};

const checkPrimeRenovParcAccPrime = (simulation) => {
    const depDiff = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].indexOf(simulation.dpeLogement) - ['A', 'B', 'C', 'D', 'E', 'F', 'G'].indexOf(simulation.dpeLogementPost);
    const category = houseHoldType.getCategory(simulation.nbPers, simulation.revenuFiscal, simulation.codePostal);
    let prime = null;
    if (depDiff === 2) {
        if (category === 'Très Modeste') {
            prime = Math.min(simulation.copEstimationMontant * 0.8, 40000)
        } else if (category === 'Modeste') {
            prime = Math.min(simulation.copEstimationMontant * 0.6, 40000)
        } else if (category === 'Intermédiaire') {
            prime = Math.min(simulation.copEstimationMontant * 0.45, 40000)
        } else {
            prime = Math.min(simulation.copEstimationMontant * 0.3, 40000)
        }
    } else if (depDiff === 3) {
        if (category === 'Très Modeste') {
            prime = Math.min(simulation.copEstimationMontant * 0.8, 55000)
        } else if (category === 'Modeste') {
            prime = Math.min(simulation.copEstimationMontant * 0.6, 55000)
        } else if (category === 'Intermédiaire') {
            prime = Math.min(simulation.copEstimationMontant * 0.5, 55000)
        } else {
            prime = Math.min(simulation.copEstimationMontant * 0.3, 55000)
        }
    } else {
        if (category === 'Très Modeste') {
            prime = Math.min(simulation.copEstimationMontant * 0.8, 70000)
        } else if (category === 'Modeste') {
            prime = Math.min(simulation.copEstimationMontant * 0.6, 70000)
        } else if (category === 'Intermédiaire') {
            prime = Math.min(simulation.copEstimationMontant * 0.5, 70000)
        } else {
            prime = Math.min(simulation.copEstimationMontant * 0.3, 70000)
        }
    }
    if (['A', 'B', 'C', 'D'].includes(simulation.dpeLogementPost) && ['F', 'G'].includes(simulation.dpeLogement)) {
        prime += simulation.copEstimationMontant * 0.1;
    }

    return prime;
};






module.exports = { checkPrimeRenovParcAccEligibilite, checkPrimeRenovParcAccPrime };
