const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


if (!process.env.SERVER_SECRET) {
  // SERVER_SECRET env var is required for auth
  throw new Error("SERVER_SECRET is not set.");
}

const uri = process.env.MONGODB_URI || "mongodb://localhost/bookDB";
mongoose.connect(uri, { useNewUrlParser: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/favorites", (req, res)=>{
  console.log(req);
})  

// Send every other request to the React app
// Define any API routes before this runs

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

