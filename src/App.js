import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import  Home  from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<h1>About</h1>} />
      <Route path="dashboard" element={<h1>Dashboard</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  );
}
