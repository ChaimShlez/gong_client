
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Make sure to import these
import Login from "../login/Login";
import Register from "../register/Register";
import './Layout.css';

export default function Layout() {
    return (
        <section className="Layout">
            <BrowserRouter>
               
            

                <main>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>

                
            </BrowserRouter>
        </section>
    );
}
