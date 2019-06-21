const router = require("express").Router();
const asyncWrapper = requre("../utilities/async-wrapper").AsyncWrapper;
const PlansService = requre("../services/plans-service");

const plansService = new PlansService();

//GET api/plans
router.get("/", asyncWrapper(async (req, res) => {
    let userId = null;
    let plans = await plansService.findAll(userId);
    res.send(plans);
}));
//GET api/plans/:id
router.get("/:id", asyncWrapper(async (req, res) => {
    let id = req.params.id;
    let userId = null;
    let plan = await plansService.findOne(id);
    res.send(plan);
}));
//POST api/plans
router.post("/", asyncWrapper(async (req, res) => {

}));
//DELETE api/plans/:id
router.delete("/:id", asyncWrapper(async (req, res) => {

}));

module.export = router;