import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import MoveTop from "./components/common/MoveTop";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <MoveTop />
    </BrowserRouter>
  );
}
