export default function About() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl mb-8">About</h1>

        <div className="max-w-2xl mb-16">
          <p className="text-xl text-gray-600 mb-6">
            Hey, I’m Rian — a Full Stack Developer who loves turning ideas into real, working products.
          </p>

          <p className="text-xl text-gray-600 mb-6">
            I work primarily with the MERN stack and Next.js, building clean user interfaces, scalable backend APIs, and full end-to-end features like authentication systems, dashboards, and SaaS-style applications.
          </p>

          <p className="text-xl text-gray-600 mb-6">
            I’ve worked with MySQL databases and enjoy designing structured data models that keep applications fast, reliable, and easy to maintain.
          </p>

          <p className="text-xl text-gray-600">
            I also use AI tools daily — GitHub Copilot, Gemini, Claude, and ChatGPT — to accelerate development, explore better solutions, and continuously improve my workflow and code quality.
          </p>
        </div>
     

        <div>
          <h2 className="text-2xl mb-8">Skills</h2>

          <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
            <div>
              <h3 className="text-xl mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML & CSS</li>
                <li>Responsive & UI-focused design</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4">Backend & Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js & Express</li>
                <li>MongoDB (MERN stack)</li>
                <li>MySQL</li>
                <li>REST APIs</li>
                <li>Git & GitHub</li>
                <li>AI Tools (Copilot, Gemini, Claude, ChatGPT)</li>
              </ul>
            </div>
            <div> <a
        href="/Rian-Coetzee-CV.pdf"
        download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Download CV
      </a></div>
               
          </div>
        </div>
      </div>
    </div>
  );
}