
const Header = () => {
    return (
        <header >

            <nav className="navbar-expand-lg container navbar px-3 mb-3">
            <div className="container-fluid">
                <h2><a className="navbar-brand" href="/#">Yenderson Colmenares</a></h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#technologies">Tecnologias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Proyectos</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;



