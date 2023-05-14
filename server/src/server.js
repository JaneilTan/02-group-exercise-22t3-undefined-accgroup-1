const port = process.env.PORT || 5001;
const app = require("./app");
const mongoose = require("mongoose");

// Connect to the database
mongoose.connect("mongodb://localhost:27017/mongo");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
