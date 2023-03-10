const express = require('express');
const router = express.Router();
const fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // res.cookie("theme","light",{maxAge:1000*60*60})

  console.log(req.cookies.theme)
  let theme=req.cookies.theme

  try{
    let datos = fs.readFileSync("./datos/daticos.json")
    if (datos!=""){
      console.log(datos)

      console.log(typeof(datos))

      // console.log(JSON.parse(datos))

      let datos_parseados = JSON.parse(datos)

      // console.log(datos_parseados)

      res.render("index",{datos_parseados,theme})

    }else{
      console.log("no hay datos")
    }
  }catch(e){
    console.log("error",e)
  }
});

router.get( "/delete/:id" , (req,res) =>{
  console.log(req.params.id)
  // res.send("nombre"+req.params.id) 

  fs.readFile("./datos/daticos.json","utf-8", (err,data) => {
    if (err){console.log("error de lectura",err)}else{
        
        console.log("datos json : ",data)

        data = JSON.parse(data)

        let index_of_name = data.map( libro=>libro.titulo ).indexOf(req.params.id)

        if (index_of_name == -1){
          console.log("libro no disponible")
          res.send("no existe este libro")
        }else{
          data.splice(index_of_name,1)
          console.log("libro eliminado con exito")
          console.log(data)
          fs.writeFileSync("./datos/daticos.json",JSON.stringify(data))
          res.redirect("/")
        }

        // console.log("lista normal",lista_libros)
        // console.log("datos stringificados","["+lista_libros.toString()+"]")
    }
} )
})

router.get("/set_dark", (req,res)=>{

  if (req.cookies.theme == "dark"){
    res.cookie("theme","light",{maxAge:1000*60*60})
    res.redirect("/")
  }else{
    res.cookie("theme","dark",{maxAge:1000*60*60})
    res.redirect("/")
  }

})


module.exports = router;
