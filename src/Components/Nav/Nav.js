import logo from '../../assets/logo.png'
import './Nav.css'
import { FaCartArrowDown } from "react-icons/fa"
import Button from '../ItemListContainer/ItemListContainer';

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
                <div><Button /></div>   
                <h2><FaCartArrowDown size='30px' color='#50366d' /></h2>           
        </header>
    )
}

export default Nav