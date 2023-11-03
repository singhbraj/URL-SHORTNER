const express = require('express')
const app = express()
const mongoose = require('mongoose')
const urlRoute = require("./routes/url");
const SHORTURL = require('./modals/url')

require('dotenv').config()


mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASS}@${process.env.DB_NAME}.x2hhzi2.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.use(express.json())

app.use("/url",urlRoute)
app.get('/:shortId',async(req,res)=>{
  const shortId = req.params.shortId;
  console.log(shortId)
  const entry =await SHORTURL.findOneAndUpdate({
    shortId
  },{$push:{
    visitHistory:{
      timestamp:Date.now()
    }
  }});
console.log(entry)
  res.redirect(entry.redirectURL)

})

 const PORT = 3001

 app.listen(PORT || 3002, ()=>{
    console.log(`server start on port ${PORT}`)
 })