
import exam from "../assets/exam.jpg"
import mandatory from "../assets/mandatory.jpg"
import app from "../assets/app.png"
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
            description: "This is a simple CRUD Wine App where you can see the all the wines and all the recent wines in 7 days. I have used React-Native and Firestore Database"
        },
        {
            id: 4,
            src: "",
            link: "https://github.com/asgerbirk/fullstack/tree/master/server",
            title: "Login - UNDER DEVELOPMENT",
            description: "Fullstack application with a authentication(bcrypt), authorization(JWT). It is an exam project that i am working on, so it is not done yet. I am almost done with the backend, but i have not decided what web-framework to use yet"
        }

    ]

    return(
        <div name="projects"  className="h-screen bg-gradient-to-b from-zinc-700 to-gray-800 text-white md:h-screen">
            <div>
                <div className="pb-12 text-center">
                    <h3 className="text-4xl font-bold mb-4 ">Here are some of my school projects</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    {projects.map(({id, src, link, title, description}) => (
                        <div key={id} className="bg-gray-900 rounded-lg overflow-hidden flex flex-col">
                            <img src={src} alt="exam" className="w-full h-full max-h-64 object-cover object-center aspect-w-1 aspect-h-1"/>
                            <div className="p-4 h-28 flex-grow">
                                <h4 className="text-xl font-semi-bold mb-2">{title}</h4>
                                <p className="text-gray-400">{description}</p>
                            </div>
                            <div className="p-4 flex justify-end items-end">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded">Code</a>
                            </div>
                        </div>
                    )) }
                </div>

            </div>
        </div>
    )
}