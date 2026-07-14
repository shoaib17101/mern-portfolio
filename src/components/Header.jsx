export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md py-4 shadow-sm shadow-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 text-sm text-white md:flex-row md:items-center md:justify-between">
        <div className="text-xl font-bold">Shoaib Khan</div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-start gap-3 md:gap-4 md:flex-row">
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
