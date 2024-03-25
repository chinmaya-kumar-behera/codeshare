import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Code from "./pages/code/Code";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Code />} />
    </Routes>
  );
}

export default App;
