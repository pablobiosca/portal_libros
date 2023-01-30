const express = require('express');
const router = express.Router();
const fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  
  try{
    let datos = fs.readFileSync("./datos/daticos.json")
    if (datos!=""){
      console.log(datos)

      console.log(typeof(datos))

      // console.log(JSON.parse(datos))

      let datos_parseados = JSON.parse(datos)

      console.log(datos_parseados)

      res.render("index",{datos_parseados})

    }else{
      console.log("no hay datos")
    }
  }catch(e){
    console.log("error",e)
  }


});


module.exports = router;
