
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure to import these
import Login from "../login/Login";
import Register from "../register/Register";
import Header from "../header/Header";
import Activities from "../activities/Activities";
import Statics from "../statics/Statics";
import './Layout.css';


export default function Layout() {
    return (
        <section className="Layout">
            <BrowserRouter>
            {/* <header>
                    <Header />
                </header>
             */}

                <main>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/userLog" element={<Header />} >
                        <Route path="/userLog/activities" element={<Activities />} />
                            <Route path="/userLog/statics" element={<Statics />} />
            
                        </Route>
                    </Routes>
                </main>

                
            </BrowserRouter>
        </section>
    );
}
                       
