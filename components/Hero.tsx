export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Content Side */}
      <div className="text-center lg:text-left space-y-8 animate-fade-in">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
          </div>
          <span className="text-sm text-gray-300 font-medium">Trusted by 2,500+ companies worldwide</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto lg:mx-0">
          Everything You Need,
          <span className="block mt-2 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            All in One Place
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Streamline your operations, boost productivity, and scale faster with our comprehensive business platform designed for modern teams.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-300">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base font-medium">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base font-medium">14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm md:text-base font-medium">Cancel anytime</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="group px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Start Free Trial
            <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
          <div className="text-center lg:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">2.5K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
            <div className="text-sm text-gray-400">User Rating</div>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
        {/* Floating Card 1 */}
        <div className="absolute -top-6 -left-6 z-10 bg-white rounded-xl shadow-2xl p-4 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Performance</div>
              <div className="text-xs text-gray-500">+127% this month</div>
            </div>
          </div>
        </div>

        {/* Floating Card 2 */}
        <div className="absolute -bottom-6 -right-6 z-10 bg-white rounded-xl shadow-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Team Growth</div>
              <div className="text-xs text-gray-500">+43 new members</div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80"
            alt="Modern team collaborating in a bright office space with laptops and digital displays"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Gradient Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

  <style jsx>{`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
</section>
  );
}