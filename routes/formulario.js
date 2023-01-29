const fs = require("fs")
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("formvista")
});

router.post("/", (req,res,next)=>{
    let datos = req.body

    let {titulo,imagen,descripcion} = req.body

    if ( titulo == "" || imagen == "" || descripcion == "" ){
        res.render('error',{message:"Error,datos no introducidos",error:{"status":404,"stack":"hey"}});
    }else{
        
        console.log("datos vanila :",datos)
    
        // fs.readFile("./datos/daticos.json","utf-8")

        let pasar = JSON.stringify(datos)
        console.log("datos sttringificados",pasar)
    
        fs.readFile("./datos/daticos.json","utf-8", (err,data) => {
            if (err){console.log("error de lectura",err)}else{
                
                console.log("datos json : ",data)

                if (data != ""){
                    
                }else{

                }
                // console.log("lista normal",lista_libros)
                // console.log("datos stringificados","["+lista_libros.toString()+"]")
            }
            try{
                fs.writeFile("./datos/daticos.json",data+","+pasar, (error) => {
                    if (error){
                        console.log("error d escritura")
                    }
                })
            }catch(e){
                console.log("algo mal en escitura",e)
            }
        } )
    }

})


module.exports = router;