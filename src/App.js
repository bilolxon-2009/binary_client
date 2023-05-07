import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Casepage from "./pages/case/Casepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/case' element={<Casepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
