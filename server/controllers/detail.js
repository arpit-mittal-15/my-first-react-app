const Detail = require("../models/detail");

async function handleFormData(req, res){
  const body = req.body;
  if(!body.firstName || !body.lastName || !body.email || !body.contact || !body.gender || !body.url || !body.codingLang) {
    return res.status(400).json({error: 'Incomplete Data'})
  }
  console.log(body)

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

// async function handleResume(req,res){
//   const image = req.files.resume;
//   const path =  'resume' + '/images/' + image.name
//   console.log(image)

//   image.mv('./resume/' + image.name, (error) => {
//     if (error) {
//       console.error(error)
//       res.writeHead(500, {
//         'Content-Type': 'application/json'
//       })
//       res.end(JSON.stringify({ status: 'error', message: error }))
//       return
//     }

//     res.writeHead(200, {
//       'Content-Type': 'application/json'
//     })
//     res.end(JSON.stringify({ status: 'success', path: '/images/' + image.name }))
//   })
// };

// async function handlePdfResume(req, res){
//   const name = req.body;
//   console.log(name)
// }

module.exports = {
  handleFormData,
  // handleResume,
  // handlePdfResume,
}