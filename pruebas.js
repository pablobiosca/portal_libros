let x= [
    {
        nombre:"chaba",edad:10
    },
    {
        nombre:"cerdo",edad:20
    },
    {
        nombre:"zapatilla",edad:200
    }
]

console.log(x.map(x => x.nombre))
console.log(x.map(x => x.nombre).indexOf("zapatilla"))

x.splice(x.map(x => x.nombre).indexOf("zapatilla"),1)

console.log(x)