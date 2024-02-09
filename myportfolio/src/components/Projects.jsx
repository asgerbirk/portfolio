
import exam from "../assets/exam.jpg"
import mandatory from "../assets/mandatory.jpg"
import app from "../assets/app.png"
import fullstack from "../assets/fullstack.png"
export const Projects = () => {

    const projects = [
        {
            id: 4,
            src: fullstack,
            link: "https://github.com/asgerbirk/ZandoBackend",
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
                            <div className="p-2">
                                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                                <p className="text-sm text-gray-400">{description}</p>
                            </div>
                            <div className="p-2 flex justify-end items-end">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="bg-zinc-500 hover:bg-zinc-600 text-white px-3 py-1 rounded">Code</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-grow"></div> {/* This div pushes content to the top */}
            </div>
        </div>
    );


}