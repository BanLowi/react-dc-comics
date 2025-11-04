import logo from '../assets/img/dc-logo.png'

export default function Header() {

    return (
        <header>
            <div className='container'>

                <nav class="navbar navbar-expand navbar-light d-flex justify-content-between">

                    <a class="nav-link" href="#">
                        <img src={logo} alt="" />
                    </a>


                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">CHARACTERS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">COMICS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">MOVIES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">GAMES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">COLLECTIBLES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">VIDEOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FANS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">NEWS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">SHOP</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>


    )
}