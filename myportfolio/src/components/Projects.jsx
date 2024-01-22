
import exam from "../assets/exam.jpg"
import mandatory from "../assets/mandatory.jpg"
import app from "../assets/app.png"
import fullstack from "../assets/fullstack.png"
export const Projects = () => {

    const projects = [
        {
            id: 1,
            src: exam,
            link: "https://github.com/asgerbirk/examfrontend",
            title: "Exam 3. Semester",
            description: "In this exam we had 24 hours to build the project. " +
                "The project is build with Java Spring-Boot as backend and React.js as frontend. It is a simple CRUD delivery project with some database relationships"
        },
        {
            id: 2,
            src: mandatory,
            link: "https://github.com/asgerbirk/expressExercise/tree/master/mandatory_01",
            title: "Project in Full stack with Node.js",
            description: "This project is a website that contains code snippets and documentation from what i have learned in the course." +
                "All the Pages are served with Express and the application is using SSR(Server-side-rendering)"
        },
        {
            id: 3,
            src: app,
            link: "https://github.com/asgerbirk/mandatoryMobile",
            title: "Wine App",
            description: "This is a simple CRUD Wine App where you can see the all the wines and all the recent wines in 7 days. I have used React-Native for the front-end and Firebase store as backend"
        },
        {
            id: 4,
            src: fullstack,
            link: "https://github.com/asgerbirk/fullstack",
            title: "E-Commerce",
            description: "Fullstack application with Express, MongoDB, JWT, Tailwind and  Svelte. " +
                "Simple E-Commerce where you can sell things and buy things with Stripe. There is a login system with JWT Tokens. I save the pictures in a S3-AWS-Bucket"
        }

    ]

    return (
        <div name="projects" className="bg-gradient-to-b from-zinc-700 to-gray-800 text-white h-screen w-full overflow-auto">
            <div className="container mx-auto h-full flex flex-col">
                <div className="pb-12 text-center">
                    <h3 className="text-4xl font-bold mb-4">Projects</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 flex-grow">
                    {projects.map(({ id, src, link, title, description }) => (
                        <div key={id} className="bg-gray-900 rounded-lg overflow-hidden flex flex-col">
                            <img src={src} alt={title} className="h-40 w-full object-contain mx-auto" />
                            <div className="p-2 flex-grow">
                                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                                <p className="text-sm text-gray-400">{description}</p>
                            </div>
                            <div className="p-2 flex justify-end items-end">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-zinc-500 hover:bg-zinc-600 text-white px-3 py-1 rounded">Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}