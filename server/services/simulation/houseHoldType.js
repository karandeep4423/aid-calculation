
const revenuPerPr = [
    [    
        [1, 23541, 28657, 40018],
        [2, 34551, 42058, 58827],
        [3, 41493, 50513, 70382],
        [4, 48447, 58981, 82844],
        [5, 55427, 67473, 94844]
    ],
    [
        [1, 17009, 21805, 30549],
        [2, 24875, 31889, 44907],
        [3, 29917, 38349, 54071],
        [4, 34948, 44802, 63235],
        [5, 40002, 51281, 72400]
    ]
];

const plusRevenuPerPr = [
    [6970, 8486, 12006],
    [5045, 6462, 9165],
];

const getCategory = (nbPers, income, postalCode) => {
    let category = null;
    let regionName = getRegionByPostalCode(postalCode);
    if (regionName === 'Île-de-France') {
        region = 0;
    } else {
        region = 1;
    }

    if (nbPers > 5) {
        const nbPersSup = nbPers - 5;
        if (income < (revenuPerPr[region][4][1] + nbPersSup * plusRevenuPerPr[region][0])) {
            category = 'Très Modeste';
        } else if (income < (revenuPerPr[region][4][2] + nbPersSup * plusRevenuPerPr[region][1])) {
            category = 'Modeste';
        } else if (income < (revenuPerPr[region][4][3] + nbPersSup * plusRevenuPerPr[region][2])) {
            category = 'Intermédiaire';
        } else {
            category = 'Supérieur';
        }
    } else {
        if (income < revenuPerPr[region][nbPers - 1][1]) {
            category = 'Très Modeste';
        } else if (income < revenuPerPr[region][nbPers - 1][2]) {
            category = 'Modeste';
        } else if (income < revenuPerPr[region][nbPers - 1][3]) {
            category = 'Intermédiaire';
        } else {
            category = 'Supérieur';
        }
    }

    return category;
};

function getRegionByPostalCode(postalCode) {
    const ileDeFranceRegex = /^(75[0-9]{3}|9[1-5][0-9]{3})$/;
    const outreMerRegex = /^97[0-9]{3}|^98[0-9]{3}$/;
    const metropoleRegex = /^(0[1-9]|[1-8][0-9]|9[0-4])[0-9]{3}$/;

    if (ileDeFranceRegex.test(postalCode)) {
        return 'Île-de-France';
    } else if (outreMerRegex.test(postalCode)) {
        return 'Outre-mer';
    } else if (metropoleRegex.test(postalCode)) {
        return 'Métropole';
    } else {
        return 'Invalid postal code';
    }
}

module.exports = { getCategory, getRegionByPostalCode };
