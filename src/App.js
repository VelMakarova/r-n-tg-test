import './styles/main.scss';
import './App.scss';
import {useEffect} from "react";

const webapp = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    webapp.close()
  }

  useEffect(() => {
    console.log(webapp.initDataUnsafe?.user)
    webapp.ready()
  }, [])
  return (
    <div className="app">
      <h1 className="title">App</h1>
      <button onClick={onClose}>Close</button>
      <span>{webapp.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default App;
