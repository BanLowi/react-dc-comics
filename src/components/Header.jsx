import logo from '../assets/img/dc-logo.png'

export default function Header() {

    return (
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <div class="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#">CHARACTERS</a>
                            <a class="nav-link" href="#">COMICS</a>
                            <a class="nav-link" href="#">MOVIES</a>
                            <a class="nav-link" href="#">TV</a>
                            <a class="nav-link" href="#">GAMES</a>
                            <a class="nav-link" href="#">COLLECTIBLES</a>
                            <a class="nav-link" href="#">VIDEOS</a>
                            <a class="nav-link" href="#">FANS</a>
                            <a class="nav-link" href="#">NEWS</a>
                            <a class="nav-link" href="#">SHOP</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}