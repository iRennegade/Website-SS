import express from "express";

import routes from "./routes/router";

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded());
app.use("/", routes);

app.listen(app.settings.port, () => {
    console.log(`Server online on port ${app.settings.port}`);
});