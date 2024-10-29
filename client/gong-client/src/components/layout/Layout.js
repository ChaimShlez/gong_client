import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure to import these
import Login from "../main/Login/Login";
import Register from "../main/Register/Register";
import Header from "../header/Header";
import Activities from "../main/Activities/Activities";
import Statics from "../main/Statics/Statics";
import "./Layout.css";

export default function Layout() {
  return (
    <section className="Layout">
      <BrowserRouter>
      {sessionStorage.getItem("token") !== undefined && sessionStorage.getItem("token") !== null ?   
       <header>
          <Header />
        </header>
        :<></>}
      
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userLog/activities" element={<Activities />} />
            <Route path="/userLog/statics" element={<Statics />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}
