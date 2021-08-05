var mongoose = require("mongoose");

const atlasUri = 'mongodb+srv://Aya:food1234@cluster0.dv04n.mongodb.net/FoodCourt?retryWrites=true&w=majority'

//mongoose.
mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("atlaaas"))
  .catch((err) => console.log("error\n", err));

