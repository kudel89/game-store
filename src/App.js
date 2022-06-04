import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page/HomePage";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
