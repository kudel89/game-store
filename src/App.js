import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { HomePage } from "./pages/home-page/HomePage";
import { Header } from "./components/header/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
