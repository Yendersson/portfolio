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
        summary:"Tienda ecommerce con sistema de gestión, el proyecto ofrece roles, permisos, administración de la página, productos, ventas etc. import y export de datos a través de archivos excel o xml, notificación vía email, método de pago con mercado pago. ",
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
        summary: "App informativa acerca de la tasa del dólar en tiempo real, inflación actual y esperada, reservas internacionales, y evolución del valor.",
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
        summary:"Una App Híbrida simulando de los estándares básicos de una red social, la creación de post junto a contenido multimedia de imágenes, comentar posts, login, registro, permisos.",
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
        summary: "Proyecto grupal de ecommerce, ofrece autenticación, autorización, altas y bajas de usuario, transformado posteriormente en una app híbrida disponible para android utilizando una base de datos NOSQL para el almacenamiento de los datos.",
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
        summary:"Una Clásica lista de tareas. Disponible también para Android.",
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
        summary:"Página informativa acerca de los países del mundo con información básica de los mismos",
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

