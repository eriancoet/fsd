export default function About() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl mb-8">About</h1>
        
        <div className="max-w-2xl mb-16">
          <p className="text-xl text-gray-600 mb-6">
            I'm a junior frontend developer focused on building clean, responsive interfaces with React.
          </p>
          
          <p className="text-xl text-gray-600 mb-6">
            I enjoy turning designs into real products and learning how users interact with interfaces.
          </p>
          
          <p className="text-xl text-gray-600">
            I'm currently looking for a junior frontend or UI engineer role where I can grow within a product team.
          </p>
        </div>

        <div>
          <h2 className="text-2xl mb-8">Skills</h2>
          
          <div className="grid gap-8 sm:grid-cols-2 max-w-2xl">
            <div>
              <h3 className="text-xl mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive design</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git</li>
                <li>Figma (basic)</li>
                <li>API integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
