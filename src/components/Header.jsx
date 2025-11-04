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
                            <a class="nav-link" href="#">ciao</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nav 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ciao</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nav 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ciao</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nav 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ciao</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nav 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ciao</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nav 2</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>


    )
}