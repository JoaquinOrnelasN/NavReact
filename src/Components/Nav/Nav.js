import logo from '../../assets/logo.png'
import './Nav.css'
import { FaCartArrowDown } from "react-icons/fa";

const Nav = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>Mi tienda online</h1>
            <nav>
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Contacto</a>                             
            </nav>
                <h2><FaCartArrowDown size='30px' /></h2>                    
        </header>
    )
}

export default Nav