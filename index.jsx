import React, { useState } from 'react';
import { Download, Mail, Linkedin, ExternalLink, ChevronDown, Award, TrendingUp, Zap } from 'lucide-react';

export default function PortfolioCV() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const downloadCV = () => {
    const cvText = `ELVIN MERITEI
Full-Stack Performance Marketing Specialist | Growth Automation Architect | Psychology-Driven CRO Expert
📍 Nairobi, Kenya | 📧 sarunielvin@gmail.com | 📱 +254115559094
🔗 LinkedIn: linkedin.com/in/elvin-saruni-6b197b339 | 💼 Portfolio: elvins-digital-growth.vercel.app

PROFESSIONAL SUMMARY
Results-obsessed Full-Stack Performance Marketer with 3+ years driving measurable growth through marketing automation, behavioral psychology, and technical execution. Certified programmatic advertiser (Trade Desk, Meta, Google, University of Pennsylvania) combining data science with human-centered design to build scalable, high-converting marketing systems.

Core Expertise: Built 3 production-ready n8n automation workflows saving 15+ hours weekly | Achieved 93% reduction in indexing time through custom Python automation | Increased client ROI by 38% and conversion rates by 35% using psychology-driven CRO | Managed 227K monthly events with 16K active users across programmatic platforms

Unique Edge: Special Needs Education background + NLP Diploma (graduating Oct 2025) enables empathetic, insight-driven campaigns that resonate deeply while delivering ruthless performance metrics.

KEY PERFORMANCE METRICS
ROI Improvement: 38% increase - Data-driven campaign optimization across Meta/Google Ads
Conversion Rate: 35% lift - Psychology-driven landing page design & remarketing
Monthly Events: 227K managed - Google Analytics 4 optimization with 63.4% growth rate
Revenue Growth: 30% average - Multi-platform campaigns for 15+ freelance clients
Technical SEO: 93/100 score - Shopify customization with JSON-LD schemas
Automation Efficiency: 15+ hrs/week saved - n8n workflows for content & indexing automation
Indexing Speed: 93% faster - Custom Python scripts (2 weeks → 48 hours)
Brand Visibility: 40% increase - Integrated SEO, PPC, and social media strategies

TECHNICAL EXPERTISE
Marketing Automation & CRM: n8n | Klaviyo | Zapier | Hotjar | Notion | Trello
Programmatic & Paid Media: The Trade Desk (Certified) | MGID | DV360 | Meta Ads (Blueprint Certified) | Google Ads | TikTok Ads | LinkedIn Ads
Analytics & Tag Management: Google Analytics 4 | Google Tag Manager | Google Search Console | Google Merchant Center
Programming: Python (Automation, Data Analysis, API Integration) | JavaScript (GTM Custom Scripts) | HTML/CSS | Git
Technical SEO & Development: Schema Markup | Core Web Vitals | Shopify Development (Liquid, JSON-LD) | WordPress

PROFESSIONAL EXPERIENCE

Digital Marketing Executive | Adele Dejak Jewelry Brand Ltd (Gaga Ventures)
January 2025 - September 2025 | Nairobi, Kenya
• Increased brand visibility by 40% through integrated digital strategy combining SEO, PPC, social media, and email marketing
• Achieved #1 Google ranking for "brass and gold jewelry," outranking international competitors
• Drove 227K monthly events with 16K active users, achieving 63.4% month-over-month growth rate
• Managed Google Merchant Center with 1,260 products, generating 846 clicks with 15.1% MoM growth
• Optimized Performance Max campaigns generating $3,000 in weekly sales during off-peak periods
• Improved campaign ROI by 38% through programmatic advertising principles and cross-channel optimization
• Achieved 93/100 Best Practices score through advanced Shopify customizations (JSON-LD, pagination, rendering)
• Built custom Python automation reducing indexing time by 93% (2 weeks → 48 hours)
• Created n8n workflow automation saving 15+ hours weekly
• Designed and implemented Klaviyo email flows with advanced segmentation and behavioral triggers
• Expanded market reach by 25% through strategic ambassador partnerships and targeted email campaigns

Freelance Performance Marketing Consultant
April 2024 - Present | Remote
• Designed and executed campaigns across Meta Ads, Google Ads, MGID, DV360 for 15+ clients, increasing average revenue by 30%
• Implemented sophisticated remarketing strategies improving audience engagement by 45%
• Achieved 35% conversion rate improvement through psychology-driven landing page design and A/B testing
• Configured Google Tag Manager across 15+ client accounts for comprehensive analytics and conversion tracking
• Built 3 production-ready n8n automation systems for content creation, SEO indexing, and lead nurturing
• Developed custom Python scripts for competitor analysis, keyword research, and data scraping
• Prepared detailed campaign performance reports and digital marketing strategies for C-level stakeholders
• Provided training on Google Analytics 4, Tag Manager, and Search Console for client teams
• Developed custom KPI dashboards for real-time performance monitoring and optimization

Entrepreneur | Multi-Business Portfolio
June 2021 - July 2023 | Thika, Kenya
• Successfully managed and operated 3 concurrent businesses demonstrating proficiency in operations and client management
• Increased staff productivity by 40% through implementation of profit-sharing system
• Reduced customer acquisition costs by 25% through community-driven referral programs
• Built engaged online communities of 500+ members on Facebook and WhatsApp for customer engagement

EDUCATION & CERTIFICATIONS
Diploma in Neurolinguistic Programming (NLP) - Indiana University, India | Graduating October 2025
Diploma in Special Needs Education - Mount Kenya University, Thika | 2023
Professional Certifications:
✅ Marketing Essentials - Programmatic Advertising (The Trade Desk Edge Academy, 2025)
✅ Meta Ads Blueprint Certification (Meta, 2024)
✅ Google Ads Certification - Search, Display, Video, Performance Max (Google Skillshop, 2024)
✅ Google Digital Marketing & E-commerce Professional Certificate (Google via Coursera, 2024)
✅ Positive Psychology: Science & Applications (University of Pennsylvania via Coursera, 2024)
✅ Social Media Marketing Professional Certificate (Meta via Coursera, 2024)

KEY ACHIEVEMENTS
✅ Analytics Excellence: Managed 227K monthly events with 16K active users and 63.4% growth rate
✅ E-commerce Success: Optimized 1,260 products generating 846 clicks with 15.1% month-over-month growth
✅ Technical SEO: Achieved 93/100 Best Practices and 85/100 SEO score
✅ ROI Optimization: Increased marketing ROI by 38% through data-driven campaign optimization
✅ Conversion Growth: Improved conversion rates by 35% using behavioral psychology principles
✅ Automation Innovation: Built 3 production-ready marketing automations saving 15+ hours weekly
✅ Indexing Efficiency: Reduced Google indexing time by 93% through custom Python automation
✅ Revenue Impact: Generated up to 30% revenue increase for 15+ freelance clients
✅ Competitive Rankings: Achieved #1 Google ranking for "brass and gold jewelry" with zero budget
✅ International Reach: Drove consistent traffic from Kenya, South Africa, and international markets

WHAT MAKES ME DIFFERENT
Psychology-Driven Performance: Special Needs Education background + NLP enables deeper understanding of human behavior. I create empathetic, insight-driven experiences that resonate emotionally while delivering ruthless performance metrics.

Technical + Creative Fusion: Bridge the gap between data and emotion. Whether building Python automation, designing Klaviyo flows, or writing psychology-informed ad copy, I combine technical proficiency with human-centered design.

Automation-First Mindset: Build systems, not just campaigns. Every marketing challenge becomes an opportunity to create scalable, automated solutions that compound results over time.

Results-Obsessed: Every strategy, campaign, and piece of content ties back to measurable business impact. I speak the language of ROI, conversion rates, and revenue growth—not vanity metrics.

LANGUAGES
English: Advanced (C1/C2) - Excellent written and verbal communication
Swahili: Native

AVAILABILITY
✅ Immediate availability
✅ Remote, hybrid, or relocation opportunities
✅ Full-time, Contract (3+ months), or Fractional CMO arrangements
✅ Ideal for: Growth-stage startups or established brands seeking digital transformation
✅ Compensation: Aligned with performance-based outcomes and market rates for senior performance marketers

References and portfolio case studies available upon request.`;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvText));
    element.setAttribute('download', 'Elvin_Meritei_Performance_Marketing_CV.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const metrics = [
    { label: 'ROI Improvement', value: '38%', icon: TrendingUp },
    { label: 'Conversion Rate Lift', value: '35%', icon: Zap },
    { label: 'Monthly Events Managed', value: '227K', icon: Award },
    { label: 'Client Revenue Growth', value: '30%', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Elvin Meritei</h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-4">Full-Stack Performance Marketing Specialist</p>
          <p className="text-blue-100 mb-6">Growth Automation Architect | Psychology-Driven CRO Expert</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="mailto:sarunielvin@gmail.com" className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              <Mail size={18} /> Email
            </a>
            <a href="https://www.linkedin.com/in/elvin-saruni-6b197b339/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://elvins-digital-growth.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
              <ExternalLink size={18} /> Portfolio
            </a>
            <button onClick={downloadCV} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition">
              <Download size={18} /> Download CV
            </button>
          </div>

          <div className="text-sm text-blue-100">
            📍 Nairobi, Kenya | 📱 +254115559094 | ⏱ Immediate Availability
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="bg-slate-700 p-4 rounded-lg text-center border border-slate-600 hover:border-blue-500 transition">
                  <Icon className="text-blue-400 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-slate-300">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Professional Summary */}
          <section className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
            <p className="text-slate-200 leading-relaxed mb-4">
              Results-obsessed Full-Stack Performance Marketer with 3+ years driving measurable growth through the intersection of marketing automation, behavioral psychology, and technical execution. Certified programmatic advertiser combining data science with human-centered design to build scalable, high-converting marketing systems.
            </p>
            <div className="bg-slate-600 p-4 rounded text-slate-100 text-sm space-y-2">
              <p>✓ Built 3 production-ready n8n automation workflows saving 15+ hours weekly</p>
              <p>✓ Achieved 93% reduction in indexing time through custom Python automation</p>
              <p>✓ Increased client ROI by 38% and conversion rates by 35% using psychology-driven CRO</p>
              <p>✓ Managed 227K monthly events with 16K active users across programmatic platforms</p>
            </div>
          </section>

          {/* Experience */}
          <section className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition">
            <button 
              onClick={() => toggleSection('experience')}
              className="flex items-center justify-between w-full text-2xl font-bold text-white hover:text-blue-400 transition"
            >
              Professional Experience
              <ChevronDown size={24} className={`transform transition ${expandedSection === 'experience' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSection === 'experience' && (
              <div className="mt-6 space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-white">Digital Marketing Executive</h3>
                  <p className="text-blue-400">Adele Dejak Jewelry Brand Ltd (Gaga Ventures) | Jan 2025 - Sep 2025</p>
                  <ul className="text-slate-200 mt-3 space-y-2 text-sm">
                    <li>✓ Increased brand visibility by 40% through integrated digital strategy</li>
                    <li>✓ Achieved #1 Google ranking for "brass and gold jewelry" with zero budget</li>
                    <li>✓ Drove 227K monthly events with 16K active users, 63.4% MoM growth</li>
                    <li>✓ Improved campaign ROI by 38% through programmatic optimization</li>
                    <li>✓ Generated $3,000 in weekly sales through Performance Max optimization</li>
                    <li>✓ Achieved 93/100 Best Practices score through Shopify customizations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-white">Freelance Performance Marketing Consultant</h3>
                  <p className="text-blue-400">Remote | Apr 2024 - Present</p>
                  <ul className="text-slate-200 mt-3 space-y-2 text-sm">
                    <li>✓ Executed campaigns for 15+ clients across Meta, Google, MGID, DV360</li>
                    <li>✓ Increased average client revenue by 30%</li>
                    <li>✓ Improved audience engagement by 45% through remarketing strategies</li>
                    <li>✓ Achieved 35% conversion rate improvement through psychology-driven design</li>
                    <li>✓ Built 3 production-ready n8n automation systems</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-white">Entrepreneur</h3>
                  <p className="text-blue-400">Multi-Business Portfolio | Jun 2021 - Jul 2023</p>
                  <ul className="text-slate-200 mt-3 space-y-2 text-sm">
                    <li>✓ Managed 3 concurrent businesses successfully</li>
                    <li>✓ Increased staff productivity by 40% through profit-sharing system</li>
                    <li>✓ Built online communities of 500+ members</li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Technical Skills */}
          <section className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition">
            <button 
              onClick={() => toggleSection('technical')}
              className="flex items-center justify-between w-full text-2xl font-bold text-white hover:text-blue-400 transition"
            >
              Technical Expertise
              <ChevronDown size={24} className={`transform transition ${expandedSection === 'technical' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedSection === 'technical' && (
              <div className="mt-6 grid md:grid-cols-2 gap-4 text-slate-200 text-sm">
                <div>
                  <h4 className="font-bold text-white mb-2">Paid Media & Programmatic</h4>
                  <p>Meta Ads (Blueprint Certified) | Google Ads (All formats) | The Trade Desk (Certified) | MGID | DV360 | TikTok Ads | LinkedIn Ads</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Marketing Automation</h4>
                  <p>n8n | Klaviyo | Zapier | Hotjar | Notion | Trello | Google Tag Manager</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Analytics & Reporting</h4>
                  <p>Google Analytics 4 | Google Search Console | Google Merchant Center | Data Studio | Custom KPI Dashboards</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Programming & Development</h4>
                  <p>Python (Automation, APIs) | JavaScript (GTM) | HTML/CSS | Shopify Development | WordPress | Git</p>
                </div>
              </div>
            )}
          </section>

          {/* Certifications */}
          <section className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Award size={24} /> Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-3 text-slate-200 text-sm">
              <p>✅ Marketing Essentials - Programmatic Advertising (Trade Desk, 2025)</p>
              <p>✅ Meta Ads Blueprint Certification (Meta, 2024)</p>
              <p>✅ Google Ads Certification - All Formats (Google, 2024)</p>
              <p>✅ Google Digital Marketing & E-commerce (Google via Coursera, 2024)</p>
              <p>✅ Positive Psychology: Science & Applications (UPenn, 2024)</p>
              <p>✅ Social Media Marketing Professional (Meta via Coursera, 2024)</p>
              <p>✅ Diploma in Special Needs Education (Mount Kenya University, 2023)</p>
              <p>✅ NLP Diploma (Indiana University, India - Graduating Oct 2025)</p>
            </div>
          </section>

          {/* What Makes Me Different */}
          <section className="bg-blue-600 rounded-lg p-6 border border-blue-500">
            <h2 className="text-2xl font-bold text-white mb-4">What Makes Me Different</h2>
            <div className="space-y-3 text-slate-100">
              <p><strong>Psychology-Driven Performance:</strong> Special Needs Education + NLP background enables deeper understanding of human behavior. I create empathetic, insight-driven experiences that resonate emotionally while delivering ruthless performance metrics.</p>
              <p><strong>Technical + Creative Fusion:</strong> Bridge data and emotion. Whether building Python automation, designing Klaviyo flows, or writing psychology-informed ad copy, I combine technical proficiency with human-centered design.</p>
              <p><strong>Automation-First Mindset:</strong> Build systems, not just campaigns. Every challenge becomes an opportunity to create scalable, automated solutions that compound results over time.</p>
              <p><strong>Results-Obsessed:</strong> Every strategy ties back to measurable business impact. I speak ROI, conversion rates, and revenue growth—not vanity metrics.</p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-slate-700 rounded-lg p-8 border-2 border-blue-500 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Drive Performance Growth?</h2>
            <p className="text-slate-200 mb-6">Let's discuss how my expertise in full-stack performance marketing can drive measurable results for your business.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:sarunielvin@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Get in Touch
              </a>
              <a href="https://elvins-digital-growth.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-3 rounded-lg font-semibold transition">
                View Full Portfolio
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-700 py-6 px-4 text-center text-slate-400 text-sm">
        <p>Elvin Meritei | Performance Marketing Specialist | Nairobi, Kenya</p>
        <p>LinkedIn: linkedin.com/in/elvin-saruni-6b197b339 | Email: sarunielvin@gmail.com</p>
      </div>
    </div>
  );
}
