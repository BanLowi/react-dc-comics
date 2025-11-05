import logo from '../assets/img/dc-logo.png'
import NavbarLinks from './NavbarLinks'

export default function Header() {


    return (
        <header>
            <div className='container'>

                <nav className="navbar navbar-expand navbar-light d-flex justify-content-between">

                    <a className="nav-link" href="#">
                        <img src={logo} alt="" />
                    </a>

                    <NavbarLinks />

                </nav>

            </div>

        </header>


    )
}