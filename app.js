const inputId = document.getElementById('inputId');
const btnBuscar = document.getElementById('btnBuscar');
const resultado = document.getElementById('resultado');

function mostrarBusqueda(id) {
  console.log(`Búsqueda del estudiante con ID ${id}`);

  buscarEstudiantePorId(id)
    .then((estudiante) => {
      const texto = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`;
      console.log(texto);
      resultado.innerHTML += `<p class="ok">ID ${id} → ${texto}</p>`;
    })
    .catch((error) => {
      const texto = `Error: ${error}`;
      console.log(texto);
      resultado.innerHTML += `<p class="error">ID ${id} → ${texto}</p>`;
    })
    .finally(() => {
      console.log('-----------------------');
    });
}

btnBuscar.addEventListener('click', () => {
  const id = Number(inputId.value);
  mostrarBusqueda(id);
});

mostrarBusqueda(2);
mostrarBusqueda(1);
mostrarBusqueda(10);
