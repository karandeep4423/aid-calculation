
const checkPrimeRenovCopropElig = (simulation) => {
    if (
        simulation.typeBenef === 'Syndicat de copropiétaires'
        && ['Au moins 35%', 'Au moins 50%'].includes(simulation.gainEnergetique)
        && simulation.copImmat == true
    ) {
        return true;
    }

    return false;
};

const primeRenovCopropAides = (simulation) => {
    if (simulation.copEstimation === false || simulation.copEstimationMontant === null) {
        return `
            Selon les conditions liées au gain énergétique, votre aide est estimée comme suit :
            - Si vos travaux permettront d'atteindre un gain énergétique d'au moins 35%, votre aide est de :
            30% du montant des travaux, plafonné à 25 000 euros par logement
            - Si vos travaux permettront d'atteindre un gain énergétique d'au moins 35%, votre aide est de :
            45% du montant des travaux, plafonné à 25 000 euros par logement
        `
    }
    if (simulation.gainEnergetique === 'Au moins 35%') {
        let aideResult = simulation.copEstimationMontant * 30 / 100;
        if (aideResult >= 25000) {
            return '25000 euros';
        } else {
            return aideResult + ' euros';
        }
    } else if (simulation.gainEnergetique === 'Au moins 50%') {
        let aideResult = simulation.copEstimationMontant * 45 / 100;
        if (aideResult > 25000) {
            return '25000 euros';
        } else {
            return aideResult + ' euros';
        }
    } else {
        if (simulation.copEstimation === true && simulation.copEstimationMontant !== null) {
            let aideResult1 = '';
            let aideResult2 = '';
            if (simulation.copEstimationMontant * 30 / 100 >= 25000) {
                aideResult1 = 25000;
            } else {
                aideResult1 = simulation.copEstimationMontant * 30 / 100
            }
            if (simulation.copEstimationMontant * 45 / 100 >= 25000) {
                aideResult2 = 25000;
            } else {
                aideResult2 = simulation.copEstimationMontant * 30 / 100
            }
            return `
                Selon les conditions liées au gain énergétique, votre aide est estimée comme suit :
                - Si vos travaux permettront d'atteindre un gain énergétique d'au moins 35%, votre aide est de :
                ${aideResult1} euros par logement
                - Si vos travaux permettront d'atteindre un gain énergétique d'au moins 35%, votre aide est de :
                ${aideResult2} euros par logement
            `
        } else {
            return `
                Selon les conditions liées au gain énergétique, votre aide est estimée comme suit :
                - Si vos travaux permettront d'atteindre un gain énergétique d'au moins 35%, votre aide est de :
                30% du montant des travaux, plafonné à 25 000 euros par logement
                - Si vos travaux permettront d'atteindre un gain énergétique d'au moins 35%, votre aide est de :
                45% du montant des travaux, plafonné à 25 000 euros par logement
            `
        }
    }
};

const primeRenovCopropBonif = (simulation) => {
    if (simulation.dpeLogement === 'IDK' || simulation.dpeLogementPost === 'IDK') {
        if (simulation.copEstimationMontant !== null) {
            let bonfMontant = simulation.copEstimationMontant * 0.1;
            return {
                'eligible': true,
                'bonification': `Si vos travaux permettaient de passer d'une étiquette énergétique F ou G à une des étiquettes
                    énergétiques D, C, B ou A vous seriez éligible à une Bonification : Sortie de passoire énergétique,
                    avec une bonification de` + bonfMontant,
                'bonificationMontant': null
            }
        } else {
            return {
                'eligible': true,
                'bonification': `Si vos travaux permettaient de passer d'une étiquette énergétique F ou G à une des étiquettes
                    énergétiques D, C, B ou A vous seriez éligible à une Bonification : Sortie de passoire énergétique,
                    avec une bonification de 10% de Estimation_travaux`,
                'bonificationMontant': null
            }
        }
    }
    if (['A', 'B', 'C', 'D'].includes(simulation.dpeLogementPost) && ['F', 'G'].includes(simulation.dpeLogement)) {
        if (simulation.copEstimationMontant !== null) {
            return {
                'eligible': true,
                'bonification': null,
                'bonificationMontant': simulation.copEstimationMontant * 0.1
            }
        } else {
            return {
                'eligible': true,
                'bonification': `Vous êtes éligible à la bonification : Sortie de passoire énergétique, avec une valeur de 10% de montant de vos travaux`,
                'bonificationMontant': null
            }
        }
    } else {
        return {
            'eligible': false,
            'bonification': null
        }
    }

};

const primeRenovCopropBonifFrag = (simulation) => {
    if (simulation.n2sup8 === true || simulation.copNpnru === true) {
        return {
            'eligible': true,
            'montant_bonification': 0.1 * simulation.copEstimationMontant
        }
    }
    return {
        'eligible': false,
        'montant_bonification': null
    }
};




module.exports = { checkPrimeRenovCopropElig, primeRenovCopropAides, primeRenovCopropBonif, primeRenovCopropBonifFrag };
