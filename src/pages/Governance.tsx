import { motion } from 'motion/react';
import { ShieldCheck, Lock, Users, FileText, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';

export default function Governance() {
  const sections = [
    {
      id: "esg-governance",
      title: "ESG Governance",
      icon: <Users className="w-6 h-6 text-secondary" />,
      subtitle: "Integrating ESG into Strategy",
      desc: "ESG is integrated into our core business strategy. Our ESG Committee provides oversight and guidance on ESG initiatives, ensuring alignment with global standards and stakeholder expectations. The Board of Directors regularly reviews ESG performance and sets strategic goals.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      details: [
        "Board-level oversight of ESG strategy",
        "Dedicated ESG Committee",
        "Cross-functional ESG Task Force",
        "Stakeholder engagement framework"
      ]
    },
    {
      id: "risk-management",
      title: "Risk Management",
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      subtitle: "Proactive Risk Stewardship",
      desc: "We continuously scan operations, markets, and ESG signals to surface emerging threats early. We quantify likelihood, impact, velocity, and control strength to size exposure. Risks are compared to appetite/tolerance and prioritised for action and escalation.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop",
      details: [
        "Comprehensive risk management framework",
        "Quarterly risk assessments",
        "Climate-related risk scenarios",
        "Business continuity planning"
      ]
    },
    {
      id: "data-protection",
      title: "Data Protection",
      icon: <Lock className="w-6 h-6 text-secondary" />,
      subtitle: "Securing Digital Assets",
      desc: "RMZ is actively advancing its cybersecurity and data protection posture by aligning with ISO/IEC 27001:2022. We are implementing comprehensive security controls, including access management, encryption, and formalised incident response procedures.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      details: [
        "Information security management system",
        "End-to-end data encryption",
        "Regular vulnerability assessments",
        "Employee cybersecurity training"
      ]
    },
    {
      id: "transparency-reporting",
      title: "Transparency and Reporting",
      icon: <FileText className="w-6 h-6 text-secondary" />,
      subtitle: "Radical Transparency",
      desc: "Transparency is a cornerstone of our operational philosophy. We utilise a Project Data Control Centre (PDCC) for real-time access to project progress, and partner with Breathe ESG to digitise ESG data collection, ensuring data integrity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      details: [
        "Real-time PDCC monitoring",
        "Breathe ESG digital platform",
        "Annual ESG performance reports",
        "GRI & SASB aligned disclosures"
      ]
    },
    {
      id: "financial-resilience",
      title: "Financial Resilience",
      icon: <BarChart3 className="w-6 h-6 text-secondary" />,
      subtitle: "Built for Longevity",
      desc: "We demonstrate remarkable agility in deal closures, underpinned by a culture of sound governance and meticulous documentation. Clear, accessible, and well-managed documentation practices have been instrumental in driving transparency and accountability.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
      details: [
        "Agile deal closure processes",
        "Strong balance sheet management",
        "Rigorous internal audit controls",
        "Stakeholder value creation"
      ]
    },
    {
      id: "sustainable-finance",
      title: "Sustainable Finance",
      icon: <TrendingUp className="w-6 h-6 text-secondary" />,
      subtitle: "Financing a Greener Future",
      desc: "Sustainable finance is a strategic lever to embed ESG principles into every stage of real estate investment. This includes green buildings & certifications, ESG integration in investment decisions, and green finance instruments.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      details: [
        "Green Finance Instruments",
        "ESG-linked loan facilities",
        "Sustainable investment criteria",
        "Green building certifications"
      ]
    }
  ];

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
                Governance & Ethical Conduct
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-light max-w-lg">
                Governance engineered for enduring impact, transparency, and resilience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate building" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance Sections */}
      {sections.map((section, index) => (
        <section 
          key={section.id} 
          className={`py-24 ${index % 2 === 0 ? 'bg-accent' : 'bg-surface'} border-b border-gray-100 last:border-0`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">{section.title}</h2>
                </div>
                <h3 className="text-4xl font-bold text-primary mb-6 leading-tight">
                  {section.subtitle}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {section.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                      <span className="text-sm font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''} relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200`}>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

