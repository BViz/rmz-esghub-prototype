import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, Shield, Users, Zap, Building2, Globe, Award, CheckCircle2, Star, Sun, Quote, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);

  const caseStudies = [
    {
      id: 1,
      title: "One Boat Club – Flood Risk Assessment",
      category: "Climate Resilience",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      description: "Located along the banks of the Mula Mutha River, the One Boat Club site underwent a comprehensive 50-year and 100-year flood assessment using HEC-RAS to ensure climate resilience.",
      fullContent: {
        overview: "Located along the banks of the Mula Mutha River, the One Boat Club site underwent a comprehensive 50-year and 100-year flood assessment using the Hydrologic Engineering Centre’s River Analysis System (HEC-RAS) to ensure climate resilience and inform adaptive design measures.",
        methodology: [
          { title: "Rainfall Peak Data Extraction", text: "Historical data was analysed to identify 50-year rainfall peaks and construct an Intensity-Duration-Frequency (IDF) curve for high-level scenario modelling." },
          { title: "Surface Terrain & Watershed Modelling", text: "A surface terrain model was created using ArcGIS, followed by watershed analysis to understand surface runoff behaviour." },
          { title: "Hydrograph Generation", text: "Using HEC-HMS, hydrographs were generated for use in further HEC-RAS assessment for level and flooding near the site." },
          { title: "Scenario Testing", text: "The modelling was repeated for multiple return periods (50-year and 100-year events) to compare potential outcomes and stress-test resilience." }
        ],
        outcome: "The assessment concluded with risk-informed design recommendations, including elevation adjustments, flood-protective landscaping, and site drainage enhancements. These proactive measures are part of RMZ’s broader commitment to climate adaptation and resilient infrastructure planning."
      }
    },
    {
      id: 2,
      title: "Ecoworld 30 Case Study",
      category: "Biodiversity & Conservation",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      description: "Real estate is being called to play a proactive role in nature conservation. We are consciously working towards 'Greenifying' our assets beyond the mandatory requirements.",
      fullContent: {
        overview: "Real estate is being called to play a proactive role in nature conservation. Biodiversity is shifting from a compliance issue to a value creation driver, especially in cities aiming for climate resilience and liveability. We are developing a strong roadmap for the same and consciously working towards “Greenifying” our assets beyond the mandatory requirements.",
        stats: [
          { label: "Soft Landscaping", value: "1.2 Hectares", sub: "20% of overall site" },
          { label: "Location", value: "True Ground", sub: "Periphery & Podium" },
          { label: "Plantation", value: "Native Species", sub: "Drought-resistant" },
          { label: "Carbon Storage", value: "59,815 kg", sub: "Total potential" }
        ]
      }
    },
    {
      id: 3,
      title: "NEXITY, HYDERABAD",
      category: "Financial Resilience & Innovation",
      image: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2010&auto=format&fit=crop",
      description: "A 3.3 million-square-foot greenfield mixed-use development that demonstrated impressive financial performance despite macro headwinds.",
      fullContent: {
        overview: "Nexity & The Loft, a 3.3 million-square-foot greenfield mixed-use development in Hyderabad, India, had to weather multiple unforeseen shocks throughout the project timeline, including COVID-19 and global supply chain disruptions.",
        highlights: [
          "Transitioned to precast construction to reduce reliance on labour and make up for lost time.",
          "Debt costs remained stable despite RBI interest rate hikes of 250 basis points.",
          "USD 544 million gross asset value with a 2.4x equity multiple.",
          "77% pre-letted to high-quality occupiers like HSBC.",
          "Rents 11.5-12% higher than the market rate.",
          "Five-star ECBC rating, LEED v4 GOLD, and WELL GOLD pre-certifications."
        ]
      }
    }
  ];

  return (
    <div className="bg-surface">
      {/* Hero Section - Microsoft Style */}
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
                ESG Report 2025
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-light max-w-lg">
                We are committed to building a resilient, low-carbon future by shaping sustainable ecosystems that empower communities and preserve the planet for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-semibold rounded-sm hover:bg-secondary-dark transition-colors cursor-pointer">
                  Explore the report <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern sustainable building" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chairmen's Message Section */}
      <section className="py-24 bg-[#002B45] text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-1px bg-secondary" />
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">Chairmen's Message</h2>
            </div>

            <div className="relative">
              <Quote className="absolute -top-10 -left-10 w-20 h-20 text-white/10" />
              
              <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light text-gray-200">
                <p>
                  At RMZ, we envision a future shaped by strategic investments in transformative sectors that are anchored in sustainability and aligned with India’s evolving economic landscape. As a forward-thinking alternative asset owner, our mission is to foster enterprises that not only fuel the economy of tomorrow but also enrich the communities we serve today.
                </p>
                
                <p>
                  Our Environmental, Social, and Governance (ESG) strategy is central to this mission. We are committed to aligning business growth with the principles of sustainable development and responsible corporate citizenship. By embedding ESG considerations into our operations, risk frameworks, and decision-making processes, we strive to generate enduring value for all our stakeholders.
                </p>

                <div className="py-8">
                  <p className="text-white font-semibold mb-8">Guided by this approach, we focus on three key pillars:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-3">
                      <h4 className="text-secondary font-bold uppercase text-sm tracking-wider">Future-Proof Investments</h4>
                      <p className="text-base text-gray-300">We invest in sustainable projects with a focus on emission reductions and long-term value creation through future-focused strategies.</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-secondary font-bold uppercase text-sm tracking-wider">Diversity, Inclusivity, and Wellness</h4>
                      <p className="text-base text-gray-300">We champion community-focused investments, inclusive leadership, diversity at all levels, and initiatives that support the holistic well-being of our people.</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-secondary font-bold uppercase text-sm tracking-wider">Honourable Governance</h4>
                      <p className="text-base text-gray-300">We uphold transparency, security, and accountability through a robust ESG governance framework that protects stakeholder interests and fosters ethical corporate conduct.</p>
                    </div>
                  </div>
                </div>

                <p>
                  As we move forward, we remain committed to innovation, resilience, and responsible growth. Together, we are building a legacy that reflects both strength and integrity.
                </p>

                <p>
                  Thank you for your continued trust and partnership.
                </p>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row gap-12 sm:gap-24">
                <div>
                  <p className="text-gray-400 text-sm italic mb-4">Warm regards,</p>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-white">Raj Menda</p>
                    <p className="text-secondary font-medium text-sm uppercase tracking-widest">Chairman, RMZ</p>
                  </div>
                </div>
                <div className="sm:pt-9">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-white">Manoj Menda</p>
                    <p className="text-secondary font-medium text-sm uppercase tracking-widest">Chairman, RMZ</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Executive Summary</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">Our Organisation & Impact</h3>
          </div>

          {/* Our Legal Entities Sub-section */}
          <div className="mb-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h4 className="text-2xl font-bold text-primary mb-4">Our Legal Entities</h4>
              <p className="text-gray-600 leading-relaxed">
                The following legal entities form part of our organisation and are covered within the scope of our ESG disclosures, policies, and related governance processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Millenia Realtors Private Limited",
                "Harmen Developers LLP",
                "Infralogix Project LLP",
                "RMZ Nexus Project LLP"
              ].map((entity, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-surface rounded-xl border border-gray-100 shadow-sm hover:border-secondary/30 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-primary font-semibold text-sm leading-tight">{entity}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Sustainability Highlights Sub-section */}
          <div className="pt-20 border-t border-gray-200">
            <div className="text-center mb-16">
              <h4 className="text-2xl font-bold text-primary mb-4">Key Sustainability Highlights</h4>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our commitment to sustainability is reflected in these key performance indicators and milestones achieved across our portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: <Building2 className="w-12 h-12 text-secondary" />,
                  value: "98%",
                  label: "of the portfolio certified for Core and Shell design or O&M with USGBC or IGBC."
                },
                {
                  icon: <Star className="w-12 h-12 text-secondary" />,
                  value: "100%",
                  label: "of the portfolio certified for IWBI WELL Certification."
                },
                {
                  icon: <Sun className="w-12 h-12 text-secondary" />,
                  value: "78%",
                  label: "of total energy met through renewable sources."
                },
                {
                  icon: <Users className="w-12 h-12 text-secondary" />,
                  value: "23%",
                  label: "women in workforce."
                },
                {
                  icon: <Shield className="w-12 h-12 text-secondary" />,
                  value: "Zero",
                  label: "incidents concerning anti-corruption/ bribery, or breach of data."
                },
                {
                  icon: <Globe className="w-12 h-12 text-secondary" />,
                  value: "First Movers Coalition",
                  label: "Among the first five global signatories (Cement & Concrete)."
                }
              ].map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6 p-4 bg-surface rounded-2xl shadow-sm border border-gray-100">
                    {highlight.icon}
                  </div>
                  <div className={`${highlight.value.length > 5 ? 'text-2xl' : 'text-4xl'} font-extrabold text-primary mb-3`}>{highlight.value}</div>
                  <p className="text-sm text-gray-600 leading-relaxed px-2">{highlight.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESG Management Framework */}
      <section className="py-24 bg-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Approach</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">ESG Management Framework</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our ESG management framework translates our commitment into a structured, values-driven approach to building a resilient, inclusive, and responsible future.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] group">
            {/* Using aspect ratio and object-cover to crop out the top title text */}
            <div className="w-full aspect-[1.55] relative overflow-hidden">
              <img 
                src="/esg-framework.png"
                alt="ESG Management Framework" 
                className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if the image is not yet uploaded
                  e.currentTarget.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop";
                  e.currentTarget.className = "absolute inset-0 w-full h-full object-cover";
                }}
              />
            </div>
          </div>

          {/* Environment, Social and Governance Sub-section */}
          <div className="mt-24 pt-16 border-t border-gray-200">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Core Foundations</h2>
              <h4 className="text-3xl font-bold text-primary mb-4">Environment, Social and Governance</h4>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our commitment is anchored in three core foundations that drive our sustainable growth and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Environmental Stewardship",
                  icon: Leaf,
                  path: "/environment",
                  color: "text-success",
                  bg: "bg-success/10",
                  description: "Reimagining the built environment for a low-carbon, regenerative future. We integrate sustainability from the ground up, reducing carbon and increasing efficiency."
                },
                {
                  title: "People and Communities",
                  icon: Users,
                  path: "/people",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                  description: "Placing human experience at the core of design and operations. Our spaces inspire through biophilic architecture and wellness-focused amenities."
                },
                {
                  title: "Governance and Ethical Conduct",
                  icon: Shield,
                  path: "/governance",
                  color: "text-primary",
                  bg: "bg-primary/5",
                  description: "ESG is deeply integrated across all functions through a strong governance architecture, ensuring transparency and ethical conduct at every level."
                }
              ].map((foundation, i) => (
                <Link 
                  key={i} 
                  to={foundation.path}
                  className="group relative flex flex-col items-start p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${foundation.bg} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <foundation.icon className={`w-7 h-7 ${foundation.color}`} />
                  </div>
                  <h5 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{foundation.title}</h5>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {foundation.description}
                  </p>
                  <div className="mt-auto flex items-center text-secondary font-bold text-sm uppercase tracking-wider">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  
                  {/* Subtle accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-300 group-hover:w-full rounded-b-2xl" />
                </Link>
              ))}
            </div>
          </div>
          {/* Case Studies Section */}
          <div className="mt-24 pt-16 border-t border-gray-200">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Impact in Action</h2>
              <h4 className="text-3xl font-bold text-primary mb-4">Case Studies</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCaseStudy(study)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                        {study.category}
                      </span>
                      <h5 className="text-xl font-bold text-white leading-tight group-hover:text-secondary transition-colors">
                        {study.title}
                      </h5>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                      {study.description}
                    </p>
                    <div className="flex items-center text-secondary font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-primary/90 backdrop-blur-sm"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 sm:h-80 shrink-0">
                <img 
                  src={selectedCaseStudy.image} 
                  alt={selectedCaseStudy.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button 
                  onClick={() => setSelectedCaseStudy(null)}
                  className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                    {selectedCaseStudy.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {selectedCaseStudy.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8 sm:p-12">
                <div className="max-w-3xl mx-auto">
                  <div className="prose prose-lg max-w-none">
                    <h4 className="text-xl font-bold text-primary mb-4">Overview</h4>
                    <p className="text-gray-600 leading-relaxed mb-12">
                      {selectedCaseStudy.fullContent.overview}
                    </p>

                    {selectedCaseStudy.fullContent.methodology && (
                      <div className="mb-12">
                        <h4 className="text-xl font-bold text-primary mb-6">Methodology Overview</h4>
                        <div className="space-y-6">
                          {selectedCaseStudy.fullContent.methodology.map((item: any, idx: number) => (
                            <div key={idx} className="flex gap-4">
                              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0 text-secondary font-bold text-sm">
                                {idx + 1}
                              </div>
                              <div>
                                <h5 className="font-bold text-primary mb-1">{item.title}</h5>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedCaseStudy.fullContent.stats && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                        {selectedCaseStudy.fullContent.stats.map((stat: any, idx: number) => (
                          <div key={idx} className="p-6 bg-accent rounded-2xl text-center">
                            <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                            <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{stat.label}</div>
                            <div className="text-[10px] text-gray-500 italic">{stat.sub}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedCaseStudy.fullContent.highlights && (
                      <div className="mb-12">
                        <h4 className="text-xl font-bold text-primary mb-6">Key Highlights</h4>
                        <ul className="space-y-4">
                          {selectedCaseStudy.fullContent.highlights.map((highlight: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedCaseStudy.fullContent.outcome && (
                      <div className="p-8 bg-secondary/5 border border-secondary/20 rounded-2xl">
                        <h4 className="text-xl font-bold text-secondary mb-4">Outcome</h4>
                        <p className="text-gray-700 leading-relaxed italic">
                          "{selectedCaseStudy.fullContent.outcome}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
