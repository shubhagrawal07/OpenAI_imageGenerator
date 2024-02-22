const express = require("express");
const dotenv = require("dotenv");

const openaiRoutes = require("./routes/openaiRoutes");

const app = express();

dotenv.config();

app.use("/openai", openaiRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

dotenv.config();
