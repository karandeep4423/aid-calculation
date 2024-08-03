const houseHoldType = require('./houseHoldType');

const primeRemplChaffCheck = (simulation) => {
    if (['Entre 2 et 15 ans', 'Plus de 15 ans'].includes(simulation.dureeConstruction) == true
        && houseHoldType.getRegionByPostalCode(simulation.codePostal) === 'Métropole'
        && ['Très Modeste', 'Modeste'].includes(houseHoldType.getCategory(simulation.nbPers, simualtion.revenuFiscal, simulation.codePostal))
    ) {
        return true;
    }

    return false;
};



/*
*** to replace keys:
1: Chaudiere individuelle au charbon/gaz/fioul
2: equipement de chauffage au charbon
3: chaudiere au charbon/gaz/fioul
4: rempl dans les batiments collectifs

*** remplace by
remplace 1 by
1-1: chaudiere biomasse
1-2: pompe a chaleur air/eau
1-3: pompe a chaleur eau/eau ou sol/eau
1-4: systeme solaire combiné
1-5: pompe a chaleur hybride

2-1 appareil independant de chauffage au bois performant

3-1 un raccordement a un reseau de chaleur par des energies renouvelables ou de recuperation

4-1 d'un conduit d'evacuation des produits de combustion, incompatible avec des chaudieres individuelles au gaz a condensation
*/

const primeRemplChaffRem = (simulation) => {
    let result = [];
    simulation.remplacementChauffage.forEach((value, index, self) => {
        if (index === 1) {
            if (value === 1 ) {
                result.push({'prime': 4000})
            } else if (value === 2 ) {
                result.push({'prime': 4000})
            } else if (value === 3 ) {
                result.push({'prime': 5000})
            } else if (value === 4 ) {
                result.push({'prime': 5000})
            } else if (value === 5 ) {
                result.push({'prime': 4000})
            }
        } else if (index === 2) {
            result.push({'prime': 800})
        }else if (index === 3) {
            result.push({'prime': 700})
        }else if (index === 4) {
            result.push({'prime': 700})
        }
    })

    return prime;
};


module.exports = { primeRemplChaffCheck, primeRemplChaffRem };
