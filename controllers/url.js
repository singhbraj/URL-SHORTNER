const shortid = require('shortid');
const SHORTURL = require('../modals/url.js')

async function handleGenerateNewShortURL(req,res){
   const body = req.body;
   if(!body.url) return res.status(400).json({error:'url is required'})
   const shortID =  shortid.generate()
   console.log(shortID)
  await SHORTURL.create({
   shortId:shortID,
   redirectURL:body.url,
   visitHistory:[]
}) 

return res.json({id:shortID})
}

module.exports = {
   handleGenerateNewShortURL
}