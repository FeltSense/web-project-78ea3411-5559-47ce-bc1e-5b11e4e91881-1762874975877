import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Client Success Stories
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Trusted by Industry Leaders
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        See how we have helped businesses transform their operations and achieve measurable results
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Testimonial 1 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-1 text-yellow-400 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 italic mb-6">
          "We implemented their project management solution and reduced our delivery time by 40%. The automated workflow features alone saved our team 15 hours per week. The ROI was evident within the first month."
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <Image 
            src="https://cdn.pixabay.com/photo/2019/11/03/05/11/woman-4599005_1280.jpg"
            alt="Sarah Chen"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div>
            <div className="font-bold text-gray-900">Sarah Chen</div>
            <div className="text-sm text-gray-600 mt-1">Operations Director</div>
            <div className="text-sm text-gray-500">TechVenture Solutions</div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-1 text-yellow-400 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 italic mb-6">
          "After struggling with data silos for years, their integration platform unified our systems seamlessly. We now have real-time visibility across all departments, and decision-making has improved dramatically."
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <Image 
            src="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"
            alt="Michael Rodriguez"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div>
            <div className="font-bold text-gray-900">Michael Rodriguez</div>
            <div className="text-sm text-gray-600 mt-1">Chief Technology Officer</div>
            <div className="text-sm text-gray-500">DataFlow Enterprises</div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-1 text-yellow-400 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 italic mb-6">
          "The customer analytics dashboard transformed how we understand our audience. We identified three new market segments and increased conversion rates by 28% in just two quarters. Game-changing insights."
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <Image 
            src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_1280.jpg"
            alt="James Patterson"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div>
            <div className="font-bold text-gray-900">James Patterson</div>
            <div className="text-sm text-gray-600 mt-1">VP of Marketing</div>
            <div className="text-sm text-gray-500">GrowthMetrics Inc</div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-1 text-yellow-400 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 italic mb-6">
          "Their security audit uncovered vulnerabilities we did not know existed. The implementation of their recommended protocols reduced our security incidents by 95% and gave us peace of mind for compliance."
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <Image 
            src="https://cdn.pixabay.com/photo/2021/01/04/10/37/icon-5887113_1280.jpg"
            alt="Emily Thompson"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div>
            <div className="font-bold text-gray-900">Emily Thompson</div>
            <div className="text-sm text-gray-600 mt-1">Head of IT Security</div>
            <div className="text-sm text-gray-500">SecureNet Financial</div>
          </div>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-1 text-yellow-400 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 italic mb-6">
          "We scaled from 50 to 200 employees without adding complexity to our operations. Their scalable infrastructure and support team made growth feel effortless. Best investment we have made in our tech stack."
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <Image 
            src="https://cdn.pixabay.com/photo/2020/09/18/19/27/laptop-5582775_1280.jpg"
            alt="David Kim"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div>
            <div className="font-bold text-gray-900">David Kim</div>
            <div className="text-sm text-gray-600 mt-1">CEO & Founder</div>
            <div className="text-sm text-gray-500">Innovate Labs</div>
          </div>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-1 text-yellow-400 text-xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>
        <blockquote className="text-base md:text-lg text-gray-700 italic mb-6">
          "The training program they designed for our team was exceptional. Within three months, our productivity increased by 35% and employee satisfaction scores jumped 20 points. They truly understand organizational development."
        </blockquote>
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <Image 
            src="https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg"
            alt="Rachel Martinez"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div>
            <div className="font-bold text-gray-900">Rachel Martinez</div>
            <div className="text-sm text-gray-600 mt-1">Director of Human Resources</div>
            <div className="text-sm text-gray-500">PeopleFirst Corp</div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16 md:mt-20">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl">
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Join 500+ satisfied clients</h3>
          <p className="text-blue-100">Start your success story today</p>
        </div>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg whitespace-nowrap">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>
  );
}