import './styles/main.scss';
import './App.scss';
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom"
import {useTelegram} from "./hooks";
import {Footer, Form, Header, ProductList} from "./components";

function App() {
  const {onReady} = useTelegram();

  useEffect(() => {
    onReady()
  }, [onReady])

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
