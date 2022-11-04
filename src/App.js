import './styles/main.scss';
import './App.scss';
import {useEffect} from "react";

const webapp = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    webapp.close()
  }

  useEffect(() => {
    webapp.ready()
  }, [])
  return (
    <div className="app">
      <h1 className="title">works</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
