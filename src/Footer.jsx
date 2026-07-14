export const Footer = () => {


    return(
        <footer className="w-full items-center justify-center flex flex-col bg-blue-800 text-white py-10 gap-2" id="contact">
            <h1 className="text-3xl font-bold">Contact Me</h1>
            <div className="flex items-center w-full gap-5 justify-center">
            <p className="text-lg font-light"><a href="mailto:shoaibkhan171015393@gmail.com" className="text-blue-400 hover:underline">
                Email
            </a></p>
            <p className="text-lg font-light"><a href="https://www.linkedin.com/in/shoaib-khan-2369b02b4" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                LinkedIn
            </a></p>
            <p className="text-lg font-light"><a href="https://github.com/shoaib17101" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                GitHub
            </a></p>
            </div>
            <p className="text-sm font-light">© 2026 Shoaib Khan. All rights reserved.</p>
        </footer>
    )
}
