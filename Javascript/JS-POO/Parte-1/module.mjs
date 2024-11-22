import { funcionario } from "./project.mjs";

const funcionario1 = new funcionario({
    name: "Jorge",
    id: 2,
    _password: "sdadsada",
});

// estas dos funciones no se reproduncen ya que no estan siendo exportadas
// funcionario1.ingresoFuncionario()
// funcionario1.salidaFuncionario()

funcionario1.horaDeIngreso();
funcionario1.horaDeSalida();

// Esto funciona ya que estoy exportando el prototipo "funcionarios" a la cual le estoy pasando las funciones con los datos