import Todo from "./components/Todo";

const Infos = [
  {
    id : 1,
    title : "My Todo 1",
    contents : "Wake Up at 8:00 Am"
  },
  {
    id : 2,
    title : "My Todo 2",
    contents : "Eat Breakfast"
  },
];

function App() {
  return (
    <>
      <h1>My Todos</h1>
      {Infos.map((info) => <Todo key={info.id} title={info.title} contents={info.contents} />)}

    </>
  );
}

export default App;
