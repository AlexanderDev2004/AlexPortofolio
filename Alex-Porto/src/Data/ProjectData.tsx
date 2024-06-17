import techData from "./TechData";
const tech = techData;

const projectData = [
    {
        id: 1,
        image: "",
        title: "My Portiofolio",
        subtitle: "this is web my personal ",
        description: "This personal website is used to update what I am working on on a project, this website is used using next js.",
        tech: [
            tech[22].id,
            tech[22].title,
            tech[22].image,
        ],
        source: "https://github.com/AlexanderDev2004/AlexPortofolio"
    },
    {
        id: 2,
        image: "",
        title: "Escape From Alex",
        subtitle: "Escape From Alex is my Game Project Using Unity",
        description: "This game uses C# and Unity as the engine, this game was my project during vocational school",
        tech: [
            tech[2].id,
            tech[2].title,
            tech[2].image,
        ],
        source: "https://github.com/AlexanderDev2004/AlexPortofolio"
    },
];
console.log(projectData);