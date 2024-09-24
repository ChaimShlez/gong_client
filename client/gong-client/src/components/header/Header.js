import { Link, Outlet, useLocation } from 'react-router-dom';
import './Header.css';
import logo from './logo.webp';


export default function Header() {
    const location = useLocation(); 

    return (
        <div className="Header">
            <div className='line-one'> 
                
                <div className="logo">
                    <img src={logo} alt="Website Logo" className="website-logo" />
                </div>
                <button className='button'>Create</button>
            </div>
            <div className='buttons-menu'>
                 <Link to="/userLog/activities">
                        <button className={location.pathname === "/userLog/activities" ? 'button-active' : 'button-user-log'}>Activities</button>
                    </Link>
                    <Link to="/userLog/statics">
                        <button className={location.pathname === '/userLog/statics' ? 'button-active' : 'button-user-log'}>Statics</button>
                    </Link>
            </div>
            <div className='line-two'>
                <div className='nuvbar'>
                    {/* <button className='optiens-button'>Activities</button>
                    <button className='optiens-buttonn'>Statics</button> */}
                  
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
