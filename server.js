const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

const PlansController = require("./controllers/plans-controller");
const SubscriptionsController = require("./controllers/subscriptions-controller");

app.use("api/plans", PlansController);
app.use("/api/subscriptions", SubscriptionsController);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})