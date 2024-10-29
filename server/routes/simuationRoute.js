const express = require('express');
const simulationController = require('../controllers/simulationController');

const router = express.Router();

router.post('/type-menage', simulationController.householdType);
router.post('/prime-renov', simulationController.primeRenov);

router.post('/prime-renov-coprop', simulationController.primeRenovCoprop);
router.post('/prime-renov-coprop/aides', simulationController.primeRenovCopropAides);
router.post('/prime-renov-coprop/bonification', simulationController.primeRenovCopropBonif);
router.post('/prime-renov-coprop/bonification-fragiles', simulationController.primeRenovCopropBonifFrag);

router.post('/prime-renov-parc-acc', simulationController.primeRenovParcAcc);

router.post('/prime-loc-avantage', simulationController.primeLocAvantage);

router.post('/prime-remplacement-chauff/eligibilite', simulationController.primeRemplacementChauffEligibilite);
router.post('/prime-remplacement-chauff/rempl', simulationController.primeRemplacementChauffRempl);

router.post('/prime-adapt', simulationController.primeAdapt);

router.post('/prime-ptz', simulationController.primePTZ);
router.get('/user/:userId', simulationController.getSimulationByUserId);
router.get('/admin', simulationController.getSimulationByAdmin);



module.exports = router;
