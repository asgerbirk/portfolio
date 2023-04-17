import githubb from "../assets/githubb.png"
import linkin from "../assets/linkin.png"
import facebook from "../assets/facebook.png"
export const Contact = () => {

    const handleCopyEmail = () => {
        const email = 'Asger.birk@gmail.com';
        navigator.clipboard.writeText(email);
        alert(`Email "${email}" copied to clipboard!`);
    };

    const contact = [
        {
            id: 1,
            src: githubb,
            link: "https://github.com/asgerbirk"

        },
        {
            id: 2,
            src: linkin,
            link: "https://www.linkedin.com/in/asger-birk-96741a234/"
        },
        {
            id: 3,
            src: facebook,
            link: "https://www.facebook.com/asger.birk/"
        }
    ]

    return<div name="contact" className="h-screen bg-gradient-to-b from-zinc-700 to-gray-800 text-white md:h-screen">
        <div className="text-center pb-12">
            <h1 className="text-4xl font-bold mb-4">Contact</h1>
        </div>
        <div className="text-white text-center text-3xl mt-4">
            <p className="mb-8">Asger Birk</p>

            <p
                title="Copy Email"
                onClick={handleCopyEmail}
                className="mb-8 cursor-pointer hover:underline"
            >
                Asger.birk@gmail.com</p>

            <p className="mb-8">+45 29892575</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
            {contact.map(({id, src, link}) => (
                <div key={id} className="rounded-lg overflow-hidden" style={{height: "400px"}}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={src}
                            alt="contact"
                            className="w-full h-full object-cover"
                        />
                    </a>
                </div>
            ))}

        </div>
    </div>
}