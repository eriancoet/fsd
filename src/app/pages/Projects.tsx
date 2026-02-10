import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts, maps, and location-based alerts.',
    tags: ['React', 'API', 'Charts'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Content management system specifically designed for creative portfolios.',
    tags: ['Next.js', 'Headless CMS', 'TypeScript'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            A selection of my recent work showcasing various technologies and design approaches.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors"
            >
              <h3 className="text-2xl mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
