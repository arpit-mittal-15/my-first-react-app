const Detail = require("../models/detail");

async function handleFormData(req, res){
  const body = req.body;
  if(!body.email) return res.status(400).json({error: 'email is required'})

  await Detail.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    contact: Number(body.contact),
    gender: body.gender,
    url: body.url,
    favLanguage: body.codingLang,
    about: body.about,
  });

  return res.json({"status": "success"});
};

module.exports = {
  handleFormData
}