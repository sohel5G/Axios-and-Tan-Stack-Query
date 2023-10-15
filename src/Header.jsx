import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-gray-200">
            <header className="py-4">
                <nav>
                    <ul className="flex gap-3 justify-center">
                        <li> <NavLink to={'/'}> Coffees </NavLink> </li>
                        <li> <NavLink to={'/addcoffee'}> Add Coffee </NavLink> </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;