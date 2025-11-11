export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    {/* Section header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center justify-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
        </svg>
        Complete Solutions
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Everything You Need,
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">All in One Place</span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Comprehensive services designed to streamline your operations and accelerate growth
      </p>
    </div>

    {/* Services grid - Featured layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
      
      {/* Featured Service - Spans 2 columns on large screens */}
      <div className="lg:col-span-2 lg:row-span-2 group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12 lg:p-16 h-full flex flex-col">
            <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop" 
                alt="Strategic Business Consulting" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Most Popular
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                    Strategic Business Consulting
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    Transform your business with data-driven strategies and expert guidance. We partner with you to identify opportunities, optimize operations, and drive sustainable growth through comprehensive analysis and actionable insights.
                  </p>
                </div>
                <div className="ml-6 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Market analysis and competitive positioning strategies</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Process optimization and operational efficiency improvements</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Growth roadmaps with measurable KPIs and milestones</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">Executive coaching and leadership development programs</span>
                </div>
              </div>

              <div className="mt-auto">
                <button className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 group/btn">
                  <span>Get Started</span>
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12 h-full flex flex-col">
            <div className="relative w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Digital Transformation" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                Digital Transformation
              </h3>
              <div className="ml-4 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Modernize your operations with cutting-edge technology solutions that enhance efficiency, improve customer experience, and position your business for the digital age.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Cloud migration and infrastructure modernization</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Automation and AI integration</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Digital workflow optimization</span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 group/btn">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12 h-full flex flex-col">
            <div className="relative w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                alt="Data Analytics & Insights" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                Data Analytics & Insights
              </h3>
              <div className="ml-4 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Turn your data into actionable intelligence with advanced analytics, predictive modeling, and real-time dashboards that drive informed decision-making.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Custom analytics dashboards and reporting</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Predictive analytics and forecasting</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Business intelligence implementation</span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 group/btn">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12 h-full flex flex-col">
            <div className="relative w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" 
                alt="Project Management Solutions" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                Project Management Solutions
              </h3>
              <div className="ml-4 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Deliver projects on time and within budget with our proven methodologies, expert oversight, and collaborative tools that keep teams aligned and productive.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Agile and waterfall methodology expertise</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Resource allocation and risk management</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Stakeholder communication and reporting</span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 group/btn">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service 5 */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8 md:p-12 h-full flex flex-col">
            <div className="relative w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop" 
                alt="Change Management & Training" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>
            
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                Change Management & Training
              </h3>
              <div className="ml-4 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Navigate organizational change smoothly with comprehensive training programs, stakeholder engagement strategies, and adoption frameworks that ensure lasting transformation.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Customized training programs and workshops</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Change readiness assessments</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-base text-gray-600">Ongoing support and adoption tracking</span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 group/btn">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 md:mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="text-left sm:text-left flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ready to Transform Your Business?
          </h3>
          <p className="text-teal-50 text-lg">
            Let us help you achieve your goals with our comprehensive solutions
          </p>
        </div>
        <button className="flex-shrink-0 px-8 py-4 bg-white text-teal-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Schedule Consultation
        </button>
      </div>
    </div>
  </div>
</section>
  );
}