import expre from "../assets/expre.jpg"
import java from "../assets/java.png"
import Js from "../assets/Js.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import Spring from "../assets/Spring.png"
import sql from "../assets/sql.png"
import tailwind from "../assets/tailwind.png"
import svelte from "../assets/svelte.png"
export const Competences = () => {

    const competences = [
        {
            id: 1,
            src: java,
            title: "Java"
        },
        {
            id: 2,
            src: Js,
            title: "JavaScript"
        },
        {
            id: 3,
            src: node,
            title: "Node"
        },
        {
            id: 4,
            src: react,
            title: "React"
        },
        {
            id: 5,
            src: Spring,
            title: "Spring Boot"
        },
        {
            id: 6,
            src: expre,
            title: "Express"
        },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind"
        },
        {
            id: 8,
            src: sql,
            title: "MySQL"
        },
        {
            id: 9,
            src: svelte,
            title: "Svelte"
        },

    ]

    return<div>
        <div name="skills" className="h-screen w-full bg-gradient-to-b from-zinc-700 to-gray-800 text-white">
            <div className="pb-12 text-center">
                <h1 className= "text-4xl font-bold mb-4" >Skills</h1>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center py-4 gap-6">

                {competences.map(({id, src, title}) => (
                    <div key={id} className="hover:scale-110 duration-500 rounded-lg shadow-md py-2 h-40">
                        <img src={src} alt="" className="w-20 object-cover mx-auto"/>
                        <p className="mt-2">{title}</p>
                    </div>
                )) }


            </div>

        </div>
    </div>

}