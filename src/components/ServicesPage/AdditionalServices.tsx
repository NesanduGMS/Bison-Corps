import { Database, Monitor, Server, Smartphone } from 'lucide-react';

export default function AdditionalServices() {
    return (
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Specialized Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Additional specialized services to address specific technical needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Data Analytics</h3>
              <p className="text-gray-600">
                Transform your data into actionable insights with our advanced analytics solutions.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Create intuitive, engaging user experiences that delight your customers.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">DevOps</h3>
              <p className="text-gray-600">
                Streamline your development and operations with our DevOps practices.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-[#6A9AB0] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#001F3F] mb-2">Mobile Development</h3>
              <p className="text-gray-600">
                Build powerful, user-friendly mobile applications for iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  