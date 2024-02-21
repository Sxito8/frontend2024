const persona ={
Nombre: "Sixto Exiga Martinez",
Edad: 22,
Profesion: "Estudiante",
PasaTiempo:[
  "Entrenar",
  "Comer",
  "Cocinar",

],
Hobby:[
  "Cantar",
  "Dibujar",
],
Yo:[
  "Tuxtepec Oaxaca",
  "Cancer",
  "08/07/2001",
]
}
function App() {
  return (
    <div>
      <h1>Informacion Personal</h1>
      <hr />
      <ul>
        <li>Nombre: {persona.Nombre}</li>
        <li>Edad: {persona.Edad}</li>
        <li>Profesion: {persona.Profesion}</li>
        <li>Pasatiempo:
          <ul> 
          <li>{persona.PasaTiempo[0]}</li>
          <li>{persona.PasaTiempo[1]}</li>
          <li>{persona.PasaTiempo[2]}</li>
          </ul>
        </li>
        <li>Jovi:
          <ul> 
          <li>{persona.Hobby[0]}</li>
          <li>{persona.Hobby[1]}</li>
          </ul>
        </li>
        <li>Informacion Peronal:
          <ul> 
          <li>{persona.Yo[0]}</li>
          <li>{persona.Yo[1]}</li>
          <li>{persona.Yo[2]}</li>
          </ul>
        </li>
       
      </ul>
    </div>
  )
}

export default App
