
const Header = () => {
    return (
        <header >

            <nav id="navbar-example2" className="container navbar px-3 mb-3">
                <h2><a className="navbar-brand" href="/#">Yenderson Colmenares</a></h2>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#firstSection">Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#secondSection">Tecnologias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#thirdSection">Proyectos</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                            aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;



