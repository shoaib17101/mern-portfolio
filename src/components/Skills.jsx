export const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 text-slate-100">
      <div className="mb-8">
        <h1 className="text-4xl font-bold sm:text-5xl">My Skills</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
          <h2 className="mb-4 text-3xl font-bold">Frontend Development</h2>
          <ul className="list-disc list-inside space-y-2 text-left text-base leading-8">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
          <h2 className="mb-4 text-3xl font-bold">Backend Development</h2>
          <ul className="list-disc list-inside space-y-2 text-left text-base leading-8">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>JWT Authentication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
