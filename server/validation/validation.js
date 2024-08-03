const Joi = require('joi');

const householdData = Joi.object({
    nbPers: Joi.number()
        .integer()
        .min(1)
        .max(15)
        .required(),
    revenu: Joi.number()
        .integer()
        .min(1)
        .max(1000000)
        .required(),
    // region: Joi.string()
    //     .valid('Île-de-France', 'Métropole', 'Outre-mer')
    //     .required(),
    codePostal: Joi.string()
        .required(),

})


module.exports = {
    householdData,
};
