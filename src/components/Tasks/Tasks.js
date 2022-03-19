const TAREAS = [
  {
    id: 't1',
    title: "Sacar al perro",
    description:
      "Es mejor pasearlo para que drene energia y cague, que ver, oler y limpiar el desastre que pueda ocurrir",
  },
  {
    id: 't2',
    title: "Hacer el almerzo",
    description: "Para comer saludable y ahorrar",
  },
  {
    id: 't3',
    title: "Hacer el curso",
    description: "para dejar de ser pobre ALV",
  },

];

const Tasks = () => {
  const listaDeTareas = TAREAS.map((tarea) => <li>{tarea.title}</li>);

  return (
    <section>
      <ul>{listaDeTareas}</ul>
    </section>
  );
};

export default Tasks;
