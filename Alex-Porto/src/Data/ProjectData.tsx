import techData from "./TechData";
const tech = techData;

const projectData = [
    {
        id: 1,
        image: "",
        title: "My Portfolio",
        subtitle: "This is my personal website",
        description: "This personal website is used to update what I am working on on a project. This website is built using Next.js.",
        tech: [
            tech[10].id,
            tech[10].title,
            tech[10].image,
        ],
        source: "https://github.com/AlexanderDev2004/AlexPortofolio"
    },
    {
        id: 2,
        image: "",
        title: "Escape From Alex",
        subtitle: "Escape From Alex is my game project using Unity",
        description: "This game uses C# and Unity as the engine. This game was my project during vocational school.",
        tech: [
            tech[2].id,
            tech[2].title,
            tech[2].image,
        ],
        source: "https://github.com/AlexanderDev2004/AlexPortofolio"
    },
];

export default projectData;
