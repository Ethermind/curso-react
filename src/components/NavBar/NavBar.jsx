import './NavBar.css'
import logo from "../../assets/react.svg"
import NavLink from './NavLink'
import CartIcon from '../CartIcon/CartIcon'

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <img src={logo} alt="Logo"/>
                <nav className='navbar'>
                    <NavLink href={"#"} text={"Menu 1"}/>
                    <NavLink href={"#"} text={"Menu 2"}/>
                    <NavLink href={"#"} text={"Menu 3"}/>
                    <CartIcon></CartIcon>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
