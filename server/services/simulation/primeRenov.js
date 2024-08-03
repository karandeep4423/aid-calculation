const houseHoldType = require('./houseHoldType');

const arr = {
    1: { 1: 'Raccordement à un réseau de chaleur et/ou de froid', 'Très Modeste': '1200', 'Modeste': '800', 'Intermédiaire': '400', 'Supérieur': '0' },
    2: { 1: 'Chauffe-eau thermodynamique', 'Très Modeste': '1200', 'Modeste': '800', 'Intermédiaire': '400', 'Supérieur': '0' },
    3: { 1: 'Pompe à chaleur air/eau (dont PAC hybrides)', 'Très Modeste': '5000', 'Modeste': '4000', 'Intermédiaire': '3000', 'Supérieur': '0' },
    4: { 1: 'Pompe à chaleur géothermique ou solarothermique (dont PAC hybrides)', 'Très Modeste': '11000', 'Modeste': '9000', 'Intermédiaire': '6000', 'Supérieur': '0' },
    5: { 1: 'Chauffe-eau solaire individuel (et dispositifs solaires pour le chauffage de l\'eau)', 'Très Modeste': '4000', 'Modeste': '3000', 'Intermédiaire': '2000', 'Supérieur': '' },
    6: { 1: 'Système solaire combiné (et dispositifs solaires pour le chauffage des locaux)', 'Très Modeste': '10000', 'Modeste': '8000', 'Intermédiaire': '4000', 'Supérieur': '' },
    7: { 1: 'Partie thermique d\'un équipement PVT eau (système hybride photovoltaïque et thermique)', 'Très Modeste': '2500', 'Modeste': '2000', 'Intermédiaire': '1000', 'Supérieur': '' },
    8: { 1: 'Poêle à bûches et cuisinière à bûches', 'Très Modeste': '2500', 'Modeste': '2000', 'Intermédiaire': '1000', 'Supérieur': '' },
    9: { 1: 'Poêle à granulés et cuisinière à granulés', 'Très Modeste': '2500', 'Modeste': '2000', 'Intermédiaire': '1500', 'Supérieur': '' },
    10: { 1: 'Chaudière bois à alimentation manuelle', 'Très Modeste': '8000', 'Modeste': '6500', 'Intermédiaire': '3000', 'Supérieur': '' },
    11: { 1: 'Chaudière bois à alimentation automatique', 'Très Modeste': '10000', 'Modeste': '8000', 'Intermédiaire': '4000', 'Supérieur': '' },
    12: { 1: 'Foyer fermé et insert à bûches ou à granulés', 'Très Modeste': '2500', 'Modeste': '1500', 'Intermédiaire': '800', 'Supérieur': '' },
    13: { 1: 'Isolation des murs par l\'extérieur (surface de murs limitée à 100 m²)', 'Très Modeste': '75Є/m²', 'Modeste': '60Є/m²', 'Intermédiaire': '40Є/m²', 'Supérieur': '' },
    14: { 1: 'Isolation des murs par l\'intérieur', 'Très Modeste': '25Є/m²', 'Modeste': '20Є/m²', 'Intermédiaire': '15Є/m²', 'Supérieur': '' },
    15: { 1: 'Isolation des rampants de toiture ou des plafonds de combles', 'Très Modeste': '25Є/m²', 'Modeste': '20Є/m²', 'Intermédiaire': '15Є/m²', 'Supérieur': '' },
    16: { 1: 'Isolation des toitures terrasses', 'Très Modeste': '75Є/m²', 'Modeste': '60Є/m²', 'Intermédiaire': '40Є/m²', 'Supérieur': '' },
    17: { 1: 'Isolation des parois vitrées (fenêtres et portes_fenêtres) en remplacement de simple vitrage', 'Très Modeste': '100Є/équipement', 'Modeste': '80Є/équipement', 'Intermédiaire': '40Є/équipement', 'Supérieur': '' },
    18: { 1: 'Protection des parois vitrées ou opaques contre le rayonnement solaire (uniquement pour l\'Outre_mer)', 'Très Modeste': '25Є/m²', 'Modeste': '20Є/m²', 'Intermédiaire': '15Є/m²', 'Supérieur': '' },
    19: { 1: 'Audit énergétique hors oobligation réglementaire (conditionné a la réalisation d\'un geste de travaux)', 'Très Modeste': '500', 'Modeste': '400', 'Intermédiaire': '300', 'Supérieur': '' },
    20: { 1: 'Dépose de cuve & fioul', 'Très Modeste': '1200', 'Modeste': '800', 'Intermédiaire': '400', 'Supérieur': '' },
    21: { 1: 'Ventilation double flux', 'Très Modeste': '2500', 'Modeste': '2000', 'Intermédiaire': '1500', 'Supérieur': '' },
};

const getTravauxResult = (userChoicesTravaux, cat) => {
    let res = [];
    userChoicesTravaux.forEach(it => {
        let suf = '';
        if (!(it >= 13 && it <= 18)) {
            suf = ' Є';
        }
        res.push([arr[it][1] , arr[it][cat] + suf]);
    });

    return res;
}

const checkPrimeRenovElig = (simulation) => {
    if (simulation.natureResidence === 'Principale'
        && simulation.occupation8 === true
        && ['A', 'B', 'C', 'D', 'E'].includes(simulation.dpeLogement)
        && (
            (simulation.dureeConstruction == 'Plus de 15 ans' && houseHoldType.getRegionByPostalCode(simulation.codePostal) == 'Métropole')
            || (['Entre 2 et 15 ans', 'Plus de 15 ans'].includes(simulation.dureeConstruction) && houseHoldType.getRegionByPostalCode(simulation.codePostal) == 'Outre-mer')
        )
        && 'Supérieur' != houseHoldType.getCategory(simulation.nbPers, simulation.revenuFiscal, simulation.codePostal)
    ) {
        return true;
    }

    return false;
};

module.exports = { checkPrimeRenovElig, getTravauxResult };
