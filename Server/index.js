const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const { register } = require("./controllers/auth.js");
const authRoute = require("./routes/auth.js");

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 6001;
app.post("/auth/register", register);

app.use("/auth", authRoute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));