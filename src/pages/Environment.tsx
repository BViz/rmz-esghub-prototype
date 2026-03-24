import { motion } from 'motion/react';
import { Sun, Droplets, Recycle, TreePine, CheckCircle2, Factory, Building2, Leaf } from 'lucide-react';

export default function Environment() {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-surface text-primary border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Environmental Stewardship
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-light max-w-lg">
                Building a greener legacy through energy transition, water resilience, circularity, and biodiversity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065&auto=format&fit=crop" 
                alt="Sustainable building with greenery" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. Energy & Emissions */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Energy & Emissions</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Transitioning to a Clean Energy Portfolio
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Energy transition is at the heart of our environmental stewardship strategy. As a developer and operator of next-generation commercial real estate, we are actively reducing our carbon footprint by rethinking how energy is sourced, distributed, and consumed across our assets. Our goal is to operate high-performance, low-carbon buildings that align with both global climate goals and India's energy transition pathway.
              </p>
              
              <div className="bg-surface p-6 rounded-xl border border-gray-200 mb-8 shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <p className="text-sm text-gray-600">
                  of power needs at our Bengaluru and Hyderabad assets are met through renewable energy from PPAs and utility distributors.
                </p>
              </div>
              
              <h4 className="text-lg font-bold text-primary mb-4">Energy Efficient Design Practices:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Building Envelopes", desc: "High-performance designs to minimize thermal gain." },
                  { title: "HVAC Systems", desc: "Equipped with high-COP chillers for optimal cooling efficiency." },
                  { title: "Heat Recovery", desc: "AHUs with heat recovery wheels for significant energy conservation." },
                  { title: "Smart Lighting", desc: "High-efficiency LED fixtures with daylight and occupancy sensors." }
                ].map((item, i) => (
                  <div key={i} className="bg-surface p-5 rounded-xl border border-gray-200 hover:border-secondary/30 transition-colors shadow-sm">
                    <h5 className="font-bold text-primary text-sm mb-1">{item.title}</h5>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
                alt="Solar panels" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Water Management */}
      <section className="py-24 bg-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2000&auto=format&fit=crop" 
                alt="Water in nature" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Water Management</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Building Water Resilience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our approach to water management is guided by a policy that emphasises efficiency, resilience, and regulatory compliance. We operate in a water-stressed context and recognise the responsibility we carry as stewards of this finite resource. Our strategy is closely aligned with ISO 14001 environmental management standards.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Water consumption reduction begins at the design stage. All RMZ assets are equipped with low-flow, touchless faucets and other water-efficient plumbing fixtures. We deploy metering systems to monitor usage patterns in real time, detect anomalies, and drive accountability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Advanced STPs", desc: "Supporting circular water management." },
                  { title: "Treated Water Reuse", desc: "For landscaping, flushing, and HVAC systems." },
                  { title: "Zero Water Discharge", desc: "Sites where no untreated or treated wastewater is released externally." },
                  { title: "Rainwater Harvesting", desc: "Infrastructure integrated across all developments." },
                  { title: "Smart Metering", desc: "Real-time monitoring to detect anomalies and drive accountability." },
                  { title: "Reduced Dependency", desc: "Significantly reduced freshwater dependency through closed-loop systems." }
                ].map((item, i) => (
                  <div key={i} className="bg-accent p-5 rounded-xl border border-gray-200 hover:border-secondary/30 transition-colors shadow-sm">
                    <h4 className="font-bold text-primary mb-1 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Waste Management and Circularity */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Recycle className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Waste Management & Circularity</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Advancing Toward Zero Waste
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At RMZ, we approach waste not as a by-product, but as a design and operational challenge that must be addressed holistically, from construction to operations. Our waste strategy is aligned with the ambition of becoming a zero-waste organisation and is embedded across the asset lifecycle.
              </p>
              
              <div className="bg-white p-8 rounded-2xl border border-success mb-8 shadow-sm">
                <h4 className="text-xl font-bold text-success mb-2">TRUE Zero Waste Certification</h4>
                <p className="text-gray-700 mb-6 text-sm">
                  30% of our standing investments are TRUE certified. We are pursuing TRUE (Total Resource Use and Efficiency) certification for all our new assets.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                    <span className="block text-xs font-bold text-success uppercase mb-1">Plastic Waste</span>
                    <span className="text-sm text-gray-600">Converted into recycled plastic pellets</span>
                  </div>
                  <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                    <span className="block text-xs font-bold text-success uppercase mb-1">Wet Waste</span>
                    <span className="text-sm text-gray-600">Sent to bio-methanation plants</span>
                  </div>
                  <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                    <span className="block text-xs font-bold text-success uppercase mb-1">Dry Waste</span>
                    <span className="text-sm text-gray-600">Upcycled or used in waste-to-energy</span>
                  </div>
                  <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                    <span className="block text-xs font-bold text-success uppercase mb-1">Glass & Metal</span>
                    <span className="text-sm text-gray-600">Recycled through authorised vendors</span>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-primary mb-2">Circularity & Life Cycle Assessment</h4>
                <p className="text-sm text-gray-600">
                  We are progressively adopting Whole Building Life Cycle Assessments (WBLCA) to evaluate and optimise the embodied carbon and environmental impact of materials. We strive to reduce virgin material use by incorporating recycled content and efficient design principles.
                </p>
              </div>
            </div>
            
            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
                alt="Waste management and recycling" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Biodiversity and Habitat Management */}
      <section className="py-24 bg-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000&auto=format&fit=crop" 
                alt="Lush green forest" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <TreePine className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Biodiversity & Habitat</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Thriving Biodiversity and Vibrant Habitats
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At RMZ, we believe thriving biodiversity and vibrant habitats are cornerstones of sustainable urban communities. Our properties are meticulously designed to coexist harmoniously with nature, ensuring ample green spaces that promote ecological balance and enhance urban quality of life.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our strategic approach begins with comprehensive ecological assessments to identify and safeguard sensitive habitats and native species. By carefully incorporating native flora into our landscape designs, we create nurturing environments that sustain local ecosystems. Eco-ponds, strategically placed across our developments, further enrich biodiversity while simultaneously aiding in sustainable water management and microclimate moderation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
