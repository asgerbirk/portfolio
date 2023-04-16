import {Link} from "react-router-dom";
import {useState} from "react";


export const Navbar = () => {

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "Projects"
        },
        {
            id: 3,
            link: "Contact"
        }
    ]

    return (
       <div className=" flex w-full h-20 px-4 bg-gray-600 flex items-center justify-between text-white">
           <div>
               <h1 className="text-4xl  ">Asger Birk</h1>
           </div>


           <ul className="flex">
               {links.map(({id, link}) => (
                   <li key={id}
                       className="px-4 text-white-500 text-2xl hover:scale-125 duration-200">
                       {link}
                   </li>
               ))}
           </ul>

       </div>
    );


}