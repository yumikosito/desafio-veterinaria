const fs= require('fs')

const registrar = (nombre,edad,animal,color,enfermedad)=>{
  const citas=fs.readFileSync('citas.json','utf-8')
  let citasParse= JSON.parse(citas)
  citasParse.push({Nombre:nombre, Edad:edad,Animal:animal,Color:color,Enfermedad:enfermedad})
  fs.writeFileSync('citas.json',JSON.stringify(citasParse))
  
}

const leer=()=>{
  const citas=fs.readFileSync('citas.json','utf-8')
  let citasParse= JSON.parse(citas)
  citasParse.forEach(animal => {
    console.log(animal);
  });
  
  
}
module.exports={registrar,leer}