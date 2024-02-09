import React from 'react';

export const Contact = () => {

    const handleCopyEmail = () => {
        const email = 'Asger.birk@gmail.com';
        navigator.clipboard.writeText(email);
        alert(`Email "${email}" copied to clipboard!`);
    };

    return (
        <div name="contact" className="h-screen bg-gradient-to-b from-zinc-700 to-gray-800 text-white flex flex-col justify-end pb-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Contact</h1>
                <p className="text-3xl mt-4 mb-4">Asger Birk</p>
                <p
                    title="Copy Email"
                    onClick={handleCopyEmail}
                    className="text-3xl cursor-pointer hover:underline"
                >
                    Asger.birk@gmail.com
                </p>
                <p className="text-3xl">+45 29892575</p>
            </div>
            <div className="flex justify-center gap-10">
                <a href="https://github.com/asgerbirk" target="_blank" rel="noopener noreferrer" className="text-5xl">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/asger-birk-96741a234/" target="_blank" rel="noopener noreferrer" className="text-5xl">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
};
