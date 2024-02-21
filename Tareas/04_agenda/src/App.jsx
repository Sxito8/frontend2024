import ListItem from "./ListItem"
const persona = [{
  nombre:"Sixto",
  apellido:"Exiga",
  gmail:"holamndo@gmail.com",
  telefono:"1298374625"

},
{
  nombre:"Pedro",
  apellido:"Tellez",
  gmail:"amoatellez@gmail.com",
  telefono:"102938476"

},
{
  nombre:"Sugey ",
  apellido:"Matinez",
  gmail:"jijija@gmail.com",
  telefono:"7483901764"

},
{
  nombre:"Angel",
  apellido:"Jimenez",
  gmail:"hola@gmail.com",
  telefono:"1928367352"

}]

function App() {
  return (
    <div >
     <h1>Agenda</h1>
     <hr />

     <ul>
      {persona.map((persona)=>(
        <ListItem
        key={persona.gmail}
        persona={persona}
        />

      ))}
     </ul>
    </div>
  );
}

export default App;
