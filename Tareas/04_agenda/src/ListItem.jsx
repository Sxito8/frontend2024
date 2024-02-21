const ListItem = ({persona})=>{
const{apellido, nombre, gmail, telefono}=persona
    return(
    <li>
        {apellido}, {nombre}
        <ul>
        <li>{gmail}</li>
        <li>{telefono}</li>
    </ul>
    </li>
    
)
    
}
export default ListItem