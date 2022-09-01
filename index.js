import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    res.send("This is Home Page");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
