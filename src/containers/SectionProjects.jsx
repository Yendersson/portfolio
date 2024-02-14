import { useEffect, useState } from "react";
import { projects } from "../api/projects.js";
import { knowledges } from "../api/tecnologies.js";
import '../App.css'

const SectionProjects = () => {

    const [state, setState] = useState(projects);

    function filtering(e) {
        let temp;
        if (e.target.textContent === "Todos") {
            temp = projects;
        } else {
            temp = projects.filter(item => item.tecnologies.includes(e.target.textContent))
        }
        setState(temp);
    }

    useEffect(_ => { }, [state])

    return (
        <div className="container mb-5 mt-5" id="thirdSection">
            <h2>Proyectos</h2>
            

            <div className="mb-3 mt-3 tecno-badges">
                <span onClick={(e) => filtering(e)} className="tecno">Todos</span>
                {knowledges.map((item, index) => (
                    <span key={index} onClick={(e) => filtering(e)} className="tecno">{item.name}</span>
                ))}

            </div>


            
                {state.map((item, index) =>
                (
                    <div key={index} className="card-project" style={{backgroundImage: `linear-gradient(to ${(index+1)%2==0? "right":"left"}, ${item.color} , white)`}}>
                        <div className="card-img">
                            <img src={item.pictures} alt="" />
                        </div>
                        <div className="card-text">
                            <div>
                                <h2 >{item.name}</h2>
                                <p>{item.summary}</p>
                                {item.tecnologies.map((item1, index1) =>
                                 (
                                     <span key={index1} className="">| {item1} </span>
                                 )
                                 )}
                            </div>

                                <div>
                                    <button><a href={item.github}>GitHub</a></button>
                                    {item.url &&
                                        <button><a href={item.url} >Web</a></button>
                                    }
                                    {item.apk &&
                                        <button><a href={item.apk}>App</a></button>
                                    }
                                    
                                </div>

                        </div>
                    </div>
                    /* <div key={index} className="card mb-5 shadow-sm" style={{ width: "25rem" }}>
                         <img src={item.pictures} className="card-img-top" alt="..." />
                         <div className="card-body">
                             <h5 className="card-title">{item.name}</h5>
                             <div>
                             {item.tag.map((item1, index1) =>
                                 (
                                     <span key={index1} className="badge rounded-pill text-bg-light">{item1}</span>
                                 )
                                 )}
                             </div>
                             <p className="card-text">{item.summary}</p>
                             <a href={item.github} className="btn btn-primary">Codigo</a>
                             {item.url && 
                                 (
                                     <a href={item.url} className="btn btn-primary">Ver Web</a>
                                 )
                             }
                             {item.tag.includes("APK") && 
                                 (
                                     <a href={item.apk} className="btn btn-primary">Descarga la App</a>
                                 )
                             }
 
                             <div>
                                 {item.tecnologies.map((item1, index1) =>
                                 (
                                     <span key={index1} className="badge rounded-pill text-bg-light">{item1}</span>
                                 )
                                 )}
                             </div>
                         </div>
                     </div>*/
                )

                )}

            </div>

        
    )
}

export default SectionProjects;