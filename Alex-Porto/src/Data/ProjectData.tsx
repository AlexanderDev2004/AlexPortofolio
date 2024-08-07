import techData from "./TechData";
const tech = techData;

const projectData = [
    {
        id: 1,
        image: "/assets/project/images/WebPorto.png",
        title: "My Portfolio",
        subtitle: "This is my personal website",
        description: "This personal website is used to update what I am working on on a project. This website is built using Next.js.",
        tech: [
            tech[10].id,
            tech[1].id,
            tech[9].id
        ],
        source: "https://github.com/AlexanderDev2004/AlexPortofolio",
        Views: "https://alex-portofolio.vercel.app/"
        
    },
    {
        id: 2,
        image: "/assets/project/Games/EscapeFromAlex.png",
        title: "Escape From Alex",
        subtitle: "Escape From Alex is my game project using Unity",
        description: "This game uses C# and Unity as the engine. This game was my project during vocational school.",
        tech: [
            tech[2].id,
            tech[22].id
            
        ],
        source: "maaf Tidak tersedia",
        Views: "https://alex-game-dev-indonesia.itch.io/escape-from-alex"
    },
    {
        id: 3,
        image: "/assets/project/EscapeFromAlex.png",
        title: "Jump Box",
        subtitle: "Jump Box is my game project first using Unity",
        description: "This game First uses C# and Unity as the engine. This game was my project personal.",
        tech: [
            tech[2].id,
            tech[22].id
        ],
        source: "maaf Tidak tersedia",
        Views: "https://alex-game-dev-indonesia.itch.io/jump-box"
    },
];

export default projectData;
