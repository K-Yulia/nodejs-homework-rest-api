const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Yulia:Cpw9vhH0n6d4g30j@cluster0.nh1fmdp.mongodb.net/contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
