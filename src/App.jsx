import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
