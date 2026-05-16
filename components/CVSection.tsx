export default function CVSection() {
  return (
    <section id="cv" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Vitae</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Senior Position</h4>
                  <p className="text-sm text-gray-600">Company Name • 2020 - Present</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Leading key initiatives and managing cross-functional teams to deliver 
                    exceptional results and drive organizational growth.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Previous Role</h4>
                  <p className="text-sm text-gray-600">Company Name • 2018 - 2020</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Developed expertise in core competencies and contributed to significant 
                    project successes and team achievements.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Degree Name</h4>
                  <p className="text-sm text-gray-600">University Name • 2014 - 2018</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Specialized in relevant field with focus on practical applications and 
                    theoretical foundations.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Certification</h4>
                  <p className="text-sm text-gray-600">Certifying Body • 2019</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Advanced certification in specialized area demonstrating expertise and 
                    commitment to professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Download Full CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
