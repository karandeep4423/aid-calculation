const { string, required } = require("joi");
const mongoose = require("mongoose");
const User = require("./userModel");
const Schema = mongoose.Schema;

const simulationSchema = new mongoose.Schema({
  createdAt: Date,
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
      "Syndicat de copropiétaires",
    ],
    required: true,
  },
  typeLogement: {
    type: String,
    enum: ["Maison", "Appartement"],
    validate: {
      validator: function (value) {
        // If typeBenef is 'Syndicat de copropiétaires', typeLogement can be any value or omitted
        if (this.typeBenef === "Syndicat de copropiétaires") {
          return true;
        }
        return value !== undefined && value !== null && value !== "";
      },
      message:
        'Type Logement is required when typeBenef is not "Syndicat de copropiétaires"',
    },
    required: function () {
      return this.typeBenef !== "Syndicat de copropiétaires";
    },
  },
  natureResidence: {
    type: String,
    enum: ["Principale", "Secondaire"],
    required: true,
  },
  // logement -> principale & region metropole => required
  occupation8: {
    type: Boolean,
    required: false,
  },
  dureeConstruction: {
    type: String,
    enum: ["Moins de 2 ans", "Entre 2 et 15 ans", "Plus de 15 ans"],
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  codePostal: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    enum: ["Île-de-France", "Outre-mer", "Métropole"],
    required: false,
  },
  dpeLogement: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F", "G", "IDK"],
  },
  dpeLogementPost: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F", "G", "IDK"],
  },
  nbPers: {
    type: Number,
    min: [1, "nbPers > 0"],
    max: [15, "nbPers <= 15"],
    required: true,
  },
  revenuFiscal: {
    type: Number,
    min: [0, "revenu > 0"],
    required: true,
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
      message: "travaux entre 1 et 21",
    },
    required: false,
  },

  // copropriete attributes ...
  nbLogement: {
    type: Number,
    min: [0, "nombre de logemenet >= 0"],
    required: false,
  },
  nbLogementHabPrinc: {
    type: Number,
    min: [0, "nombre de logemenet >= 0"],
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
    min: [0, "Estimation travaux >= 0"],
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
  eligible: { type: Boolean, default: false }, // Add eligible field
  travauxResult: [{ type: String }], // Add travaux result field

  // bailleur attributes ...
});

const Simulation = mongoose.model("Simulation", simulationSchema);
module.exports = Simulation;
