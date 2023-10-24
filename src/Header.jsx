import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider";


const Header = () => {
    const { name } = useContext(authContext);
    return (
        <div className="bg-gray-200">
            <header className="py-4">
                <nav>
                    <ul className="flex gap-3 justify-center">
                        <li> <NavLink to={'/'}> Coffees </NavLink> </li>
                        <li> <NavLink to={'/addcoffee'}> Add Coffee </NavLink> </li>
                        <li> <NavLink to={'/coffees_tan_stack_query'}> Coffees_Tan_Stack_Query </NavLink> </li>
                        <li> <NavLink to={'/login'}> Login </NavLink> </li>
                        <li> <NavLink to={'/signup'}> Signup </NavLink> </li>
                        <li> <a href="#"> {name} </a> </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;