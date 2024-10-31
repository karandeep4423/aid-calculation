const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const simulationSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    typeSimulation: {
      type: String,
      enum: [
        "renovation",
        "copropriete",
        "parc acc",
        "loc avantage",
        "rempl chauff",
        "prime adapt",
        "prime ptz",
      ],
      required: false,
    },
    typeBenef: {
      type: String,
      enum: [
        "Propriétaire occupant",
        "Propriétaire bailleur",
        "Syndicat de copropriétaires",
      ],
      required: [true, "Veuillez sélectionner un type de bénéficiaire."],
    },
    typeLogement: {
      type: String,
      enum: ["Maison", "Appartement"],
      validate: {
        validator: function (value) {
          return this.typeBenef === "Syndicat de copropriétaires" || !!value;
        },
        message:
          "Le type de logement est requis si le bénéficiaire n'est pas un syndicat de copropriétaires.",
      },
      required: function () {
        return this.typeBenef !== "Syndicat de copropriétaires";
      },
    },
    natureResidence: {
      type: String,
      enum: ["Principale", "Secondaire"],
      required: [true, "Veuillez sélectionner la nature de votre résidence."],
    },
    dureeConstruction: {
      type: String,
      enum: ["Moins de 2 ans", "Entre 2 et 15 ans", "Plus de 15 ans"],
      required: [true, "Veuillez sélectionner la durée de construction."],
    },
    adresse: {
      type: String,
      required: [true, "Veuillez entrer votre adresse."],
    },
    ville: {
      type: String,
      required: [true, "Veuillez entrer votre ville."],
    },
    codePostal: {
      type: String,
      required: [true, "Veuillez entrer votre code postal."],
    },
    region: {
      type: String,
      enum: ["Île-de-France", "Outre-mer", "Métropole"],
      required: false,
    },
    dpeLogement: {
      type: String,
      enum: ["A", "B", "C", "D", "E", "F", "G", "Je ne sais pas"],
      message: "Veuillez sélectionner un classement DPE valide.",
    },
    dpeLogementPost: {
      type: String,
      enum: ["A", "B", "C", "D", "E", "F", "G", "Je ne sais pas"],
      message: "Veuillez sélectionner un classement DPE valide.",
    },
    nbPers: {
      type: Number,
      min: [1, "Le nombre de personnes doit être supérieur à 0."],
      max: [15, "Le nombre de personnes ne peut pas dépasser 15."],
      required: [true, "Veuillez entrer le nombre de personnes."],
    },
    revenuFiscal: {
      type: Number,
      min: [0, "Le revenu fiscal doit être supérieur à 0."],
      required: [true, "Veuillez entrer votre revenu fiscal."],
    },
    gainEnergetique: {
      type: String,
      enum: ["Au moins 35%", "Au moins 50%", "IDK"],
    },
    travaux: {
      type: [Number],
      validate: {
        validator: function (arr) {
          return arr.every((num) => num >= 1 && num <= 21);
        },
        message: "Les travaux doivent être entre 1 et 21.",
      },
      required: false,
    },
    nbLogement: {
      type: Number,
      min: [0, "Le nombre de logements doit être supérieur ou égal à 0."],
      required: false,
    },
    nbLogementHabPrinc: {
      type: Number,
      min: [0, "Le nombre de logements doit être supérieur ou égal à 0."],
      required: false,
    },
    copImmat: {
      type: Boolean,
      required: false,
    },
    n2sup8: {
      type: Boolean,
      required: false,
    },
    copNpnru: {
      type: Boolean,
      required: false,
    },
    copEstimation: {
      type: Boolean,
      required: false,
    },
    copEstimationMontant: {
      type: Number,
      min: [
        0,
        "Le montant de l'estimation des travaux doit être supérieur ou égal à 0.",
      ],
      required: false,
    },
    remplacementChauffage: {
      type: [String],
      required: false,
    },
    situationDemandeur: {
      type: String,
      enum: ["60-69", "70 plus", "handicap", "aucune"],
      required: false,
    },
    eligible: { type: Boolean, default: false },
    travauxResult: [{ type: String }],
  },
  { timestamps: true }
);

const Simulation = mongoose.model("Simulation", simulationSchema);
module.exports = Simulation;
