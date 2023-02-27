import Paciente from "./Paciente";

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {

  // console.log(pacientes.length)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoPaciente</h2>
          <p className="text-xl text-center mt-5 mb-10"> Administra tus{" "}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10"> Comienza agregando pacientes{" "}
          <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}


      {pacientes.map( (paciente) => (
        <Paciente 
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
    </div>
  );
};

export default ListadoPaciente;
