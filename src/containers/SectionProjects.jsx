import { useEffect, useState } from "react";
import { projects } from "../api/projects.js";
import { knowledges } from "../api/tecnologies.js";
import '../App.css'

const SectionProjects = () => {

    const [state, setState] = useState(projects);

    function filtering(e) {
        let temp;
        if (e.target.value === "Todos") {
            temp = projects;
        } else {
            temp = projects.filter(item => item.tecnologies.includes(e.target.value))
        }
        setState(temp);
    }

    useEffect(_ => { }, [state])

    return (
        <div className="container mb-5 mt-5" id="thirdSection">
            <h2>Proyectos</h2>
            

            <div className="mb-3 mt-3 tecno-badges">
                <select onChange={(e) => filtering(e)}>
                    <option value="Todos">Todos</option>
                {knowledges.map((item, index) => (
                    <option key={index} defaultValue={item.name}>{item.name}</option>
                ))}
                </select>
            </div>


            
                {state.map((item, index) =>
                (
                    <div key={index} className="card-project" style={{backgroundImage: `linear-gradient(to ${window.innerWidth < 500?"top":(index+1)%2==0? "right":"left"}, ${item.color} , white)`}}>
                        <div className="card-img">
                            {item.pictures.mobile &&
                                <div className={item.pictures.desktop?"mobile":"normal"}>
                                    <img src={item.pictures.mobile} alt="" />
                                </div>
                            }
                            {item.pictures.desktop &&
                            <img src={item.pictures.desktop} alt="" />
                            }
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
                )

                )}

            </div>

        
    )
}

export default SectionProjects;