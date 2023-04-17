
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
        }

    ]

return(
    <div name="projects"  className="h-screen bg-gradient-to-b from-zinc-700 to-gray-800 text-white md:h-screen">
        <div>
            <div className="pb-12 text-center">
                <h3 className="text-4xl font-bold mb-4 ">Here are some of my school projects</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {projects.map(({id, src, link, title, description}) => (
                    <div key={id} className="bg-gray-900 rounded-lg overflow-hidden">
                        <img src={src} alt="exam" className="w-full h-full max-h-64 object-cover object-center aspect-w-1 aspect-h-1"/>
                        <div className="p-4">
                            <h4 className="text-xl font-semibold mb-2">{title}</h4>
                            <p className="text-gray-400">{description}</p>
                            <div className="mt-4">
                                <a href={link}  target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded">Code</a>
                            </div>
                        </div>
                    </div>
            )) }
            </div>

        </div>
    </div>
)
}