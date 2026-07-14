import hero from '../assets/hero.png';
export const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 py-16 text-center md:flex-row md:items-center md:text-left">
      <img
        src={hero}
        alt="Hero"
        className="h-72 w-72 rounded-full object-cover shadow-2xl shadow-slate-900/50 md:h-96 md:w-96"
      />
      <div className="flex max-w-3xl flex-col gap-5">
        <h1 className="text-4xl font-bold font-serif sm:text-5xl lg:text-6xl">
          Hi, I'm Shoaib Khan
        </h1>
        <h2 className="text-2xl font-light sm:text-3xl">
          Frontend Developer building with React.js & the MERN Stack
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:mx-0">
          Final-year Computer Science student focused on building fast,
          responsive web applications. Currently seeking Frontend Developer or
          Junior Software Engineer opportunities.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
          <button className="btn btn-primary btn-outline min-w-40"><a href="/mern-portfolio/Shoaib_Khan_Resume.pdf" download> Download CV</a></button>
          <button className="btn btn-primary btn-outline min-w-40"><a href="/mern-portfolio/#contact"> Contact Me</a></button>
          <button className="btn btn-primary btn-outline min-w-40"><a href="/mern-portfolio/#projects">Projects</a></button>
        </div>
      </div>
    </section>
  );
};
