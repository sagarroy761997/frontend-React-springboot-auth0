
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ReactLogo from "./components/ReactLogo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/react"
        element={<ReactLogo />} />
    </Routes>
  );
}

export default App;
