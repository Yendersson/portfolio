import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import github from 'bootstrap-icons/icons/github.svg'
import envelope from 'bootstrap-icons/icons/envelope.svg'
import whatsapp from 'bootstrap-icons/icons/whatsapp.svg'


const Footer = () => {
    return (
        <footer>
            <div className="contnainer d-flex justify-content-center">
                <div>
                    <a href="https://www.linkedin.com/in/yenderson-colmenares-rodriguez/">
                        <img src={linkedin} alt="" />
                    </a>
                    
                </div>
                <div>
                    <a href="https://github.com/yendersson">
                        <img src={github} alt="" />
                    </a>
                </div>
                <div>
                    <a href="mailto:yendersoncolmenares67@gmail.com">
                        <img src={envelope} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://wa.me/5491123447858">
                        <img src={whatsapp} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;