import './App.css';

function App() {

  const titleApp = "Task List";

  return (
    <div className="App">
      <div className="titleApp">
        {titleApp}
      </div>
      <div className="container">
        <div className="space-insertTask">
          <input type="text" placeholder="Insertar tarea..."/>
          <button>¡Listo!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
