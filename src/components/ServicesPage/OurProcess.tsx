export default function OurProcess() {
    return (
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">Our Process</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We follow a proven methodology to ensure successful project delivery and client satisfaction.
          </p>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#6A9AB0]"></div>
            
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Discovery</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business, goals, and requirements through in-depth discussions and analysis.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Discovery phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Planning phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-12 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Planning</h3>
                  <p className="text-gray-600">
                    We develop a detailed project plan, including timelines, milestones, and resource allocation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Development</h3>
                  <p className="text-gray-600">
                    Our expert team executes the plan, building your solution with regular updates and feedback cycles.
                  </p>
                </div>
                <div className="md:w-12 flex justify-center">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Development phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Deployment phase" 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-12 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                  <div className="bg-[#3A6D8C] text-white rounded-full w-12 h-12 flex items-center justify-center z-10">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                  <h3 className="text-2xl font-semibold text-[#001F3F] mb-2">Deployment & Support</h3>
                  <p className="text-gray-600">
                    We carefully deploy your solution and provide ongoing support and maintenance to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  