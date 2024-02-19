import avatar from '../assets/Avatar2.png'
import cv from '../files/CV-Yenderson_Colmenares.pdf'
const SectionOne = () => {

    async function downloadCV(){
        const rutaPDF = cv;

        try {
            const response = await fetch(rutaPDF);
            const blob = await response.blob();
      
            const blobURL = URL.createObjectURL(blob);
      
            const link = document.createElement('a');
            link.href = blobURL;
            link.download = 'CV-Yenderson_Colmenares.pdf'; // Nombre del archivo para la descarga
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    
            URL.revokeObjectURL(blobURL);
            
        } catch (error) {
            
        }
    }

    return (
            <div className="container container" id="about">
                <div className="row align-items-center">
                    <div className="col text-center">
                        <img className="img-fluid" src={avatar} alt="" />
                    </div>
                    <div className="col presentation">
                        <h2>👋 Hola, <br /> Soy Yenderson <br /> Full-Stack Developer</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempore ipsa numquam debitis possimus quia quo nihil. Veniam autem perspiciatis, corrupti cupiditate provident nesciunt repellat expedita, dolore quibusdam voluptatem omnis?
                        </p>
                        <button className='btn' onClick={downloadCV}>DESCARGAR CV</button>
                        

                    </div>
                </div>
            </div>
    )

}

export default SectionOne;