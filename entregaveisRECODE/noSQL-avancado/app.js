const express = require('express')
let exphbs = require('express-handlebars')
const multer = require('multer')
const app = express()
const imageModel = require('./models/upload')
const imageData = imageModel.find({})



app.use(express.static('public/images'))


app.engine('handlebars', exphbs())
app.set("view engine","handlebars")


let Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/images");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  });
  
  let upload = multer({
    storage: Storage,
  }).single("image");
                                                                    


app.get('/',(req,res)=>{

  imageData.exec(function(err,data){
    if(err) throw err;

    res.render('home',{records:data})

  })
})

app.post('/', (req,res)=>{
    upload(req,res,function(err){
        if(err){
            console.log(err)
            return res.end('Aconteceu algo de errado :(')
        } else {
            console.log(req.file.path)

            let filename = req.file.filename


            let imageDetails = new imageModel({
              imagename:filename
            })

            imageDetails.save(function(err,doc){
              if(err) throw err;

              imageData.exec(function(err,data){
                if(err) throw err;

                res.render('home',{records:data,success:true})

              })
              
            })

        }
    })
})

app.listen(3333, () => {
    console.log('Server ativo na porta 3333')
})