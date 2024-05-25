function App() {
  return (
    <div>
    <h2>Diferentes tipos de inputs</h2>
    <label htmlFor="boton">Botón: </label>
    <input type="button" id="boton" value="Presioname" />
    <br />

    <label htmlFor="checkbox">Checkbox: </label>
    <input type="checkbox" id="checkbox" />
    <label htmlFor="checkbox">Marcar casilla</label>
    <br />

    <label htmlFor="color">Color: </label>
    <input type="color" id="color" />
    <br />

    <label htmlFor="fecha">Fecha: </label>
    <input type="date" id="fecha" />
    <br />

    <label htmlFor="fechaHoraLocal">Fecha y hora local: </label>
    <input type="datetime-local" id="fechaHoraLocal" />
    <br />

    <label htmlFor="email">Correo electrónico: </label>
    <input type="email" id="email" />
    <br />

    <label htmlFor="archivo">Archivo: </label>
    <input type="file" id="archivo" />
    <br />

    <input type="hidden" id="oculto" value="Valor oculto" /> {/* No se muestra */}
    <br />

    <label htmlFor="imagen">Imagen: </label>
    <input type="image" id="imagen" src="imagen.jpg" alt="Imagen" />
    <br />

    <label htmlFor="mes">Mes: </label>
    <input type="month" id="mes" />
    <br />

    <label htmlFor="numero">Número: </label>
    <input type="number" id="numero" />
    <br />

    <label htmlFor="password">Contraseña: </label>
    <input type="password" id="password" />
    <br />

    <label htmlFor="radio1">Opción 1: </label>
    <input type="radio" id="radio1" name="opcion" value="1" />
    <label htmlFor="radio2">Opción 2: </label>
    <input type="radio" id="radio2" name="opcion" value="2" />
    <br />

    <label htmlFor="rango">Rango: </label>
    <input type="range" id="rango" min="0" max="100" value="50" />
    <br />

    <input type="reset" value="Limpiar formulario" />
    <br />

    <label htmlFor="buscar">Buscar: </label>
    <input type="search" id="buscar" placeholder="Ingrese términos de búsqueda" />
    <br />

    <input type="submit" value="Enviar formulario" />
    <br />

    <label htmlFor="telefono">Teléfono: </label>
    <input type="tel" id="telefono" />
    <br />

    <label htmlFor="texto">Texto: </label>
    <input type="text" id="texto" />
    <br />

    <label htmlFor="hora">Hora: </label>
    <input type="time" id="hora" />
    <br />

    <label htmlFor="url">URL: </label>
    <input type="url" id="url" placeholder="Ingrese una URL válida" />
    <br />

    <label htmlFor="semana">Semana: </label>
    <input type="week" id="semana" />
    <br />
  </div>
);
}

export default App
