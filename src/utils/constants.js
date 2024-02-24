import projImg1 from "../assets/img/port1.jpg";
import projImg2 from "../assets/img/port2.jpg";
import projImg3 from "../assets/img/port5.jpg";
import jsProjectImg1 from '../assets/img/commercial-project1.png'
import jsProjectImg2 from '../assets/img/coffee-projectImg.png'
import jsProjectImg3 from '../assets/img/test-projectImg.png'
import reactProjectImg2 from '../assets/img/my-portfolioImg.png'

export const projects = {
    vanillaJS: [
        {
            title: "My Commercial Vanilla Js Project",
            description: "Design & Development",
            imgUrl: jsProjectImg1,
            gitUrl: 'https://github.com/GulzhanKarakul/equipment_repair_website',
            webUrl: 'https://icecoldservice.netlify.app/',
        },
        {
            title: "My Pet Project using State Machine",
            description: "Design & Development",
            imgUrl: jsProjectImg2,
            gitUrl: 'https://github.com/GulzhanKarakul/coffee-machine',
            webUrl: 'https://gulzhankarakul.github.io/coffee-machine/',
        },
        {
            title: "My Mini-Pet Project using LocalStorage",
            description: "Design & Development",
            imgUrl: jsProjectImg3,
            gitUrl: 'https://github.com/GulzhanKarakul/test-project',
            webUrl: 'https://gulzhankarakul.github.io/test-project/',
        },
    ],
    react: [
        {
            title: "React Project",
            description: "Design & Development",
            imgUrl: projImg1,
            gitUrl: '',
            webUrl: '',
        },
        {
            title: "My beautiful Portfolio Site",
            description: "Design & Development",
            imgUrl: reactProjectImg2,
            gitUrl: 'https://github.com/GulzhanKarakul/my-portfolio',
            webUrl: 'https://gulzhankarakul.github.io/my-portfolio/',
        },
        {
            title: "React Native Project",
            description: "Design & Development",
            imgUrl: projImg3,
            gitUrl: '',
            webUrl: '',
        }
    ],
    vue: [
        {
            title: "Vue Project",
            description: "Design & Development",
            imgUrl: projImg2,
            gitUrl: '',
            webUrl: '',
        }
   
    ],
}