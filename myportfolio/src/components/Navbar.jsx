import {Link} from "react-scroll";
import {useState} from "react";


export const Navbar = () => {

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "projects"
        },
        {
            id: 3,
            link: "skills"
        },
        {
            id: 4,
            link: "contact"
        }
    ]

    return (
        <div className="flex w-full h-20 px-4 bg-gray-800 items-center justify-between text-white fixed">
            <div>
                <h1 className="text-4xl">Asger Birk</h1>
            </div>

            <ul className="flex">
                {links.map(({id, link}) => (
                    <li key={id} className="px-4 text-white text-2xl hover:scale-125 duration-200 capitalize">
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );


}