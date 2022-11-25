import './styles/main.scss';
import './App.scss';
import {useEffect} from "react";
import {useTelegram} from "./hooks";
import {Footer, Header} from "./components";

function App() {
  const {onReady} = useTelegram();

  useEffect(() => {
    onReady()
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        main
      </main>
      <Footer />
    </div>
  );
}

export default App;
