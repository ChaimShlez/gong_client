import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure to import these
import Login from "../main/Login/Login";
import Register from "../main/Register/Register";
import Header from "../header/Header";
import Activities from "../main/Activities/Activities";
import Statics from "../main/Statics/Statics";
import "./Layout.css";
import CreateBudgets from '../main/Budgets/CreateBudgets/CreateBudgets'
import Budgets from '../main/Budgets/Budgets'
import Menu from '../Menu/Menu';

export default function Layout() {
  return (
    <section className="Layout">
      <BrowserRouter>
      {sessionStorage.getItem("token") !== undefined && sessionStorage.getItem("token") !== null ?   
       <><header>
            <Header />
          </header><aside>
              <Menu />
            </aside></>
        :<></>}
      
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userLog/activities" element={<Activities />} />
            <Route path="/userLog/statics" element={<Statics />} />
            <Route path="/createBudgets" element={<CreateBudgets />} />
            <Route path="/budgets" element={<Budgets />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}
