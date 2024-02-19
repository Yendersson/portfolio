import newCommerceLogo from "../assets/nc.png"
import ncMobile from "../assets/ncMobile.png"
import RedSocialLogo from "../assets/RSDesktop.png"
import RSMobile from '../assets/RSMobile.png'
import ToDoList from "../assets/ToDoList.png"
import ToDoListMobile from "../assets/ToDoListMobile.png"
import ApiPaises from "../assets/ApiPaises.png"
import ncSystem from "../assets/ncSystem.png"
import appDolar from "../assets/dolarApp.png"

export const projects = [
    {
        id:'1',
        name: "E-Commerce Advanced",
        summary:"Tienda ecommerce con sistema de gestion, el proyecto ofrece roles, permisos, administracion de la pagina, productos, ventas etc. import y export de datos a traves de archivos excel o xml,notificaicon via email, metodo de pago con mercado pago. ",
        pictures:{
            mobile:ncMobile,
            desktop:ncSystem
        },
        tecnologies:['React Js', 'Redux', 'Java', 'Spring-Boot', 'MySQL', 'Bootstrap'],
        tag:['Full-Stack', 'BackEnd', "FrontEnd"],
        content:'',
        url:null,
        github: "https://github.com/Yendersson/ProjectEcommerceJava",
        color:"#227FBB"
    },
    {
        id: "6",
        name: "DolarHoy",
        summary: "App informativa acerca de la tasa del dolar en tiempo real, inflacion actual y esperada, reservas internacionales, y evolucion del valor.",
        pictures:{
            mobile:appDolar,
            desktop:null
        },
        tecnologies:['React Js', 'Cordova', 'Bootstrap'],
        tag:["FrontEnd", "APK"],
        content: '',
        url:null,
        github: "https://github.com/Yendersson/app-Dolar",
        apk:"https://drive.google.com/file/d/1zks_YwKABdGblZIeNtWwsmY5IbJ1w7y0/view?usp=drive_link",
        color:"green"
    },
    {
        id:'2',
        name: "Mini Red Social",
        summary:"Una App Hibrida simulando de los estandares basicos de una red social, la creacion de post junto a contenido multimedia de imagenes, comentar posts, login, registro, permisos.",
        pictures:{
            mobile:RSMobile,
            desktop:RedSocialLogo
        },
        tecnologies:['React Js','Cordova', 'Node Js', 'Express Js', 'MySQL', 'Bootstrap'],
        tag:['Full-Stack', 'BackEnd', "FrontEnd", "APK"],
        content:'',
        url:"https://red-social-yender.netlify.app/",
        github: "https://github.com/Yendersson/Frontend-Red_social",
        apk:"https://drive.google.com/file/d/1oROpM1oiuVSVys6KwnWLL2vrJsYoXJRI/view?usp=sharing",
        color:"gray"
    },
    {
        id: "7",
        name: "NewCommerce",
        summary: "Un ecommerce caritativo, este ecommerce fue el proyecto final grupal del curso de insercion laboral con orientacion en programacion web full stack, al ser grupal mi principal funcion fue la elaboracion del backend mas adelante modifique el proyecto para que sea una app hibrida y poder ser instaladas para dispositivos android a traves de una apk.",
        pictures:{
            mobile:ncMobile,
            desktop:newCommerceLogo,
        },
        tecnologies:['Handlebars', 'Cordova', 'HTML', "CSS", "Node Js", "Express Js", "MongoDB"],
        tag:['Full-Stack', 'BackEnd', "FrontEnd", "APK"],
        content: '',
        url:"https://new-commerce.glitch.me/",
        github: "https://github.com/Yendersson/New-Commerce",
        apk:"",
        color:"orange"
    },
    {
        id:'3',
        name: "To do list",
        summary:"Una Clasica to do list app. Disponible tambien para android.",
        pictures:{
            mobile:ToDoListMobile,
            desktop:ToDoList
        },
        tecnologies:['React Js','Cordova', 'Node Js', 'Express Js', 'MongoDB', 'Bootstrap'],
        tag:['Full-Stack', 'BackEnd', "FrontEnd", "APK"],
        content:'',
        url:"https://apptask.glitch.me/",
        github: "https://github.com/Yendersson/App_tareas",
        apk:"https://drive.google.com/file/d/1MrkUdkU5LGnCGmSbI9Cg9ydWsT7pMEw-/view?usp=sharing",
        color:"blue"
    },
    {
        id:'4',
        name: "Api rest de paises clasica",
        summary:"Pagina informativa acerca de los paises del mundo con informacion basica de los mismos",
        pictures:{
            mobile:null,
            desktop:ApiPaises
        },
        tecnologies:['HTML', 'CSS', 'JavaScript', 'Handlelbars'],
        tag:["FrontEnd"],
        content:'',
        url:"https://yendersson.github.io/ApiRestPaises/",
        github: "https://github.com/Yendersson/ApiRestPaises",
        color:"gray"
    },

];

