const express = require('express');
const app = express();
const authRoutes = require(`./routes/authRoute`);

// middlewares
app.use(express.json());
app.use(`/`, authRoutes);



//IMPORT MONGOOSE-----------------------------------------------------------------
const mongoose = require("mongoose"); //import mongoose
const url = `mongodb://localhost:27017/userAuth`;
// connect to mongoose
mongoose.connect(url, function (err) { 
  if (err) { console.log(err); }
  console.log(`Connected to MongoDB`);
});

// -----------------------------------------------------------------


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})