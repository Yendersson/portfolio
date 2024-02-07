import newCommerceLogo from "../assets/nc.png"
import RedSocialLogo from "../assets/AppSocial.png"
import ToDoList from "../assets/ToDoList.png"
import ApiPaises from "../assets/ApiPaises.png"
import ApiPaisesRedux from "../assets/ApiPaisesRedux.png"
import ncSystem from "../assets/ncSystem.png"
import appDolar from "../assets/appDolar.png"

export const projects = [
    {
        id:'1',
        name: "NewCommerce Advanced",
        summary:"Tienda Ecommerce con administrador, metodos de pago, implementacion con plantillas excel, servicio de mensajeria",
        pictures:ncSystem,
        tecnologies:['React Js', 'Redux', 'Java', 'Spring-Boot', 'MySQL', 'Bootstrap'],
        tag:['Full-Stack', 'BackEnd', "FrontEnd"],
        content:'',
        url:null,
        github: "https://github.com/Yendersson/ProjectEcommerceJava"
    },
    {
        id: "6",
        name: "DolarHoy",
        summary: "Una app la cual te informa la tasa y cotizacion del dolar al dia, con graficos describiendo el comportamiento dependiendo del periodo a escoger ",
        pictures:appDolar,
        tecnologies:['React Js', 'Apache Cordova', 'Bootstrap'],
        tag:["FrontEnd", "APK"],
        content: '',
        url:null,
        github: "https://github.com/Yendersson/app-Dolar",
        apk:"https://drive.google.com/file/d/1zks_YwKABdGblZIeNtWwsmY5IbJ1w7y0/view?usp=drive_link"
    },
    {
        id:'2',
        name: "Mini Red Social",
        summary:"Peque;a simulacion de una app de red social donde puedes crear post y comentarlos",
        pictures:RedSocialLogo,
        tecnologies:['React Js', 'Node Js', 'Express Js', 'MySQL', 'Bootstrap'],
        tag:['Full-Stack', 'BackEnd', "FrontEnd", "APK"],
        content:'',
        url:"https://red-social-yender.netlify.app/",
        github: "https://github.com/Yendersson/Frontend-Red_social",
        apk:"https://drive.google.com/file/d/1oROpM1oiuVSVys6KwnWLL2vrJsYoXJRI/view?usp=sharing"
    },
    {
        id: "7",
        name: "NewCommerce",
        summary: "Un Ecommerce con sus partes basicas tambien para app ",
        pictures:newCommerceLogo,
        tecnologies:['Handlebars', 'Apache Cordova', 'HTML', "CSS", "Node Js", "Express Js", "MongoDB"],
        tag:['Full-Stack', 'BackEnd', "FrontEnd", "APK"],
        content: '',
        url:"https://new-commerce.glitch.me/",
        github: "https://github.com/Yendersson/New-Commerce",
        apk:""
    },
    {
        id:'3',
        name: "To do list",
        summary:"Una clasica lista de tareas ",
        pictures:ToDoList,
        tecnologies:['React Js', 'Node Js', 'Express Js', 'MongoDB', 'Bootstrap'],
        tag:['Full-Stack', 'BackEnd', "FrontEnd", "APK"],
        content:'',
        url:"https://apptask.glitch.me/",
        github: "https://github.com/Yendersson/App_tareas",
        apk:"https://drive.google.com/file/d/1MrkUdkU5LGnCGmSbI9Cg9ydWsT7pMEw-/view?usp=sharing"
    },
    {
        id:'4',
        name: "Api rest de paises clasica",
        summary:"Pagina informativa acerca de los paises del mundo con informacion basica de los mismos",
        pictures:ApiPaises,
        tecnologies:['HTML', 'CSS', 'JavaScript', 'Handlelbars'],
        tag:["FrontEnd"],
        content:'',
        url:"https://yendersson.github.io/ApiRestPaises/",
        github: "https://github.com/Yendersson/ApiRestPaises"
    },
    {
        id:'5',
        name: "Api rest de paises advanced",
        summary:"Pagina informativa acerca de los paises del mundo con informacion basica de los mismos",
        pictures:ApiPaisesRedux,
        tecnologies:['React Js', 'Redux'],
        tag:["FrontEnd"],
        content:'',
        url:null,
        github: "https://github.com/Yendersson/Api-rest-Paises-React-Redux"
    },


];

