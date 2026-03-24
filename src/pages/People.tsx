import { motion } from 'motion/react';
import { HardHat, Users, HeartHandshake, Palette, BookOpen, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';

export default function People() {
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
                People & Communities
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-light max-w-lg">
                Shaping human-centred ecosystems through safety, inclusion, and cultural enrichment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="People collaborating" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. A Safe and Empowered Workforce */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HardHat className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Safety & Well-being</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                A Safe and Empowered Workforce
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We uphold rigorous standards to protect the physical, mental, and social well-being of our labour community across all development sites. Our policies are designed not only to meet regulatory expectations but to set new benchmarks in on-site safety, health, and dignity.
              </p>
              
              <div className="bg-surface p-8 rounded-2xl border border-gray-200 mb-8 shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">35 Million</div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Safe Man-Hours Surpassed</p>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                  Between FY 2022–23 and FY 2024–25, our development sites have collectively surpassed 35 million Safe Man-Hours – a testament to our strong safety culture and operational discipline.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "OHS Management", desc: "Fully aligned with ISO 45001:2018, complemented by British Safety Council audits." },
                { title: "Hazard Identification", desc: "Structured checklists, risk scoring, job safety analysis, and periodic reviews." },
                { title: "Labour Welfare", desc: "Ensuring dignified living conditions, healthcare access, and fair wages for all workers." },
                { title: "Safety Training", desc: "Comprehensive training programmes to ensure safety competency across all groups." }
              ].map((item, i) => (
                <div key={i} className="bg-surface p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Designing Inclusive, Experiential Communities */}
      <section className="py-24 bg-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Modern inclusive office campus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Community Experience</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Designing Inclusive, Experiential Communities
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Great developments should seamlessly integrate into the social fabric of their neighbourhoods and cities. Our projects go beyond the boundaries of traditional business parks, offering open, inclusive campuses that welcome the public and foster diverse experiences.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Open Campuses", desc: "Removing physical barriers to integrate our developments with the surrounding urban environment." },
                  { title: "Public Art", desc: "Democratising art by placing world-class installations in accessible public spaces." },
                  { title: "Social Infrastructure", desc: "Creating spaces for interaction, collaboration, and cultural exchange among diverse groups." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-accent rounded-xl border border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Diverse and Specialised Talent */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Human Capital</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Diverse and Specialised Talent
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                People are our greatest asset. We actively invest in developing our human capital, recognising the skills, experience, and innovation that drive long-term business value. Our commitment to diversity ensures a breadth of perspectives that fuels our growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-3xl font-bold text-primary mb-2">23%</h4>
                  <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Women in Workforce</p>
                  <p className="text-xs text-gray-500">We are committed to increasing gender representation across all levels of the organisation.</p>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-3xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Specialised Functions</p>
                  <p className="text-xs text-gray-500">Our team comprises experts from diverse fields including design, engineering, and finance.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                alt="Diverse team collaborating" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Investing in Minds */}
      <section className="py-24 bg-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Learning & Development</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">Investing in Minds</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Continuous learning is a core value at RMZ. We provide our employees with access to world-class training and development opportunities to help them reach their full potential and stay ahead in a rapidly evolving industry.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <GraduationCap className="w-5 h-5 text-secondary" />,
                    title: "Leadership Development",
                    desc: "Customised programmes for high-potential employees to build the next generation of leaders."
                  },
                  {
                    icon: <Globe className="w-5 h-5 text-secondary" />,
                    title: "Global Partnerships",
                    desc: "Collaborating with prestigious institutions like Harvard for executive education."
                  },
                  {
                    icon: <BookOpen className="w-5 h-5 text-secondary" />,
                    title: "Technical Training",
                    desc: "Regular workshops on the latest technologies and sustainability standards."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-accent p-5 rounded-xl border border-gray-200 flex gap-4 items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern learning environment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Corporate Social Responsibility */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5e5a46c5805a63534f083c1e/14e5f32b-4c62-4826-b015-fc74f22e6f24/2.+Garden+of+Un-Eearthly+Delights+at+Frieze+Sculpture+Park+2023+%C2%A9+Suhasini+Kejriwal.jpg" 
                alt="Art installation in public space" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-secondary" />
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Social Impact</h2>
              </div>
              <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                Corporate Social Responsibility
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Social responsibility is deeply woven into our identity. Through our foundation and outreach initiatives, we champion both cultural enrichment and social transformation, placing creativity, inclusion, and sustainability at the heart of community impact.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Art as Impact", desc: "We believe that art should be accessible to all, not just confined to galleries. Through public art initiatives, we bring world-class creative expression into everyday spaces." },
                  { title: "Art with Purpose", desc: "Our foundation reimagines public space as a canvas for collective expression, bridging the gap between art and society through site-specific installations." },
                  { title: "Global Outreach", desc: "From the Yorkshire Sculpture Park to Mumbai Art Week, we curate immersive installations that reflect pressing social themes." }
                ].map((item, i) => (
                  <div key={i} className="bg-surface p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
