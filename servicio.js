
function buscarEstudiantePorId(id) {
  return new Promise((resolve, reject) => {
    const estudiante = estudiantes.find((e) => e.id === id);

    if (estudiante) {
      resolve(estudiante);
    } else {
      reject(`No existe un estudiante con el ID ${id}.`);
    }
  });
}
