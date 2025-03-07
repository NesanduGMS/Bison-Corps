import { Database, Monitor, Server, Smartphone } from 'lucide-react';

export default function AdditionalServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-[#001F3F] mb-4">Specialized Services</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Additional specialized services to address specific technical needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-t-4 border-amber-500">
            <div className="bg-[#001F3F] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#001F3F] mb-3 text-center">Data Analytics</h3>
            <p className="text-gray-600 text-center">
              Transform your data into actionable insights with our advanced analytics solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-t-4 border-amber-500">
            <div className="bg-[#001F3F] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
              <Monitor size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#001F3F] mb-3 text-center">UI/UX Design</h3>
            <p className="text-gray-600 text-center">
              Create intuitive, engaging user experiences that delight your customers.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-t-4 border-amber-500">
            <div className="bg-[#001F3F] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#001F3F] mb-3 text-center">DevOps</h3>
            <p className="text-gray-600 text-center">
              Streamline your development and operations with our DevOps practices.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-t-4 border-amber-500">
            <div className="bg-[#001F3F] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#001F3F] mb-3 text-center">Mobile Development</h3>
            <p className="text-gray-600 text-center">
              Build powerful, user-friendly mobile applications for iOS and Android.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}