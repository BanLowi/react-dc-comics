export default function NavbarLinks({ menus }) {




    return (
        <ul className="nav navbar-nav">
            {
                menus.map(item => (
                    <li class="nav-item">
                        <a key={item.id} className={`nav-link`} href={item.link}>{item.text}</a>
                    </li>
                ))
            }
        </ul>
    )
}