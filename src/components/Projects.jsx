import reactfolio from "../assets/reactfolio.png";
import techshed from "../assets/techshed.png";
import healpath from "../assets/healpath.png";
export const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-16 text-slate-100">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-serif sm:text-5xl">My Projects</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="flex flex-col justify-between gap-5 rounded-3xl border border-slate-700 bg-slate-950/80 p-5 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-1">
          <img
            src={healpath}
            alt="HealPath"
            className="h-64 w-full rounded-3xl object-cover object-top"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif">
              HealPath — Doctor-Patient Healthcare Platform (Final Year Project)
            </h3>
            <p className="text-sm leading-7 text-slate-300">
              Full-stack MERN platform connecting doctors and patients. Built the
              complete responsive frontend with role-based dashboards, and
              implemented REST API endpoints with JWT authentication for core
              features. The platform also includes payment integration, video
              consultations, and an AI health assistant.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="inline-flex justify-center rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
              href="https://github.com/shoaib17101/reactfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
            <a
              className="inline-flex justify-center rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
              href="https://shoaib17101.github.io/reactfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="flex flex-col justify-between gap-5 rounded-3xl border border-slate-700 bg-slate-950/80 p-5 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-1">
          <img
            src={techshed}
            alt="Techshed"
            className="h-64 w-full rounded-3xl object-cover object-top"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif">Techshed — Electronics E-Commerce UI</h3>
            <p className="text-sm leading-7 text-slate-300">
              A frontend recreation of an electronics store, built to practice
              complex UI and state management. Includes category browsing, cart
              functionality, and related-product recommendations. Frontend only.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="inline-flex justify-center rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
              href="https://github.com/shoaib17101/techshed"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
            <a
              className="inline-flex justify-center rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
              href="https://shoaib17101.github.io/techshed"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </article>
        <article className="flex flex-col justify-between gap-5 rounded-3xl border border-slate-700 bg-slate-950/80 p-5 shadow-lg shadow-black/25 transition duration-300 hover:-translate-y-1">
          <img
            src={reactfolio}
            alt="Reactfolio"
            className="h-64 w-full rounded-3xl object-cover object-top"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif">Reactfolio — Portfolio Recreation (Practice Project)</h3>
            <p className="text-sm leading-7 text-slate-300">
              A recreation of a senior developer's personal portfolio, converting
              the original React + TypeScript build into React with JSX. Built to
              practice component structure and responsive layout.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              className="inline-flex justify-center rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
              href="https://github.com/shoaib17101/reactfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
            <a
              className="inline-flex justify-center rounded-xl bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
              href="https://shoaib17101.github.io/reactfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
