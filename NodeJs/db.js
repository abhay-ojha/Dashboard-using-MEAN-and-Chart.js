const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://abhayojha04:abhay123@cluster0.kaksmbp.mongodb.net/jsonDb?retryWrites=true&w=majority"

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to database...");
  })
  .catch((err) => {
    console.log(mongoose.version);
    console.log("Unable to connect to MongoDB. Error: " + err);
  });

  module.exports = mongoose;