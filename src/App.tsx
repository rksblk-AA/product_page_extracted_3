/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, Menu, X, Boxes, Droplets, Zap, CircleDollarSign, ArrowDown, Leaf, Fan,
  CloudFog, Droplet, Wind, ShieldCheck, Quote, 
  CheckCircle2, ChefHat, Utensils, Factory, Settings, AirVent,
  Star, Package, Shield, Settings2, Wrench, ArrowRight,
  Plane, GraduationCap, Milk, Building, Users, UtensilsCrossed, Coffee, Store, Building2
} from 'lucide-react';
import espCellImage from './assets/images/esp_cell_single_1785694044849.jpg';
import espInternalDiagram from './assets/images/esp_internal_diagram_transparent.png';
import airotakeEspImage from './assets/images/airotake_esp_control_unit_1785697340351.jpg';
import heroKitchenImage from './assets/images/airotake-website-front-page.png';

import logoImage from './assets/images/Logo1.png';

export default function App() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <div className="min-h-screen bg-transparent font-['Exo_2'] text-gray-800 flex flex-col relative">
      
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-8 w-full w-full relative z-10">
       <div className="flex items-center">
  {/* Logo */}
  <img
    src={logoImage}
    alt="AiroTAKE - Engineered Air Solutions"
    className="w-[180px] h-auto object-contain"
  />
</div>
       <button
  type="button"
  className="lg:hidden"
  onClick={() => setMobileMenu(!mobileMenu)}
>
  {mobileMenu ? <X size={28} /> : <Menu size={28} />}
</button>
        <div className="flex flex-col items-end gap-3">
          <div className="hidden lg:flex items-center gap-6 font-bold text-[#004fa3] text-[15px] px-2">
            <a href="tel:+91 6302 104 702" className="hover:opacity-80 transition-opacity">+91 6302 104 702</a>
            <a href="mailto:info@airotake.com" className="hover:opacity-80 transition-opacity">info@airotake.com</a>
          </div>

          <nav className="hidden lg:flex items-center gap-7 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white">
            <div className="relative group">
              <a href="#" className="text-[14px] font-bold text-gray-800 hover:text-[#004fa3] flex items-center gap-1.5 transition-colors py-2">
                Sectors <span className="text-[#004fa3] font-bold">+</span>
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3">
                {[
                  { name: 'Airports & Transport Hubs', icon: Plane },
                  { name: 'Education & Healthcare', icon: GraduationCap },
                  { name: 'Food Processing Facilities', icon: Milk },
                  { name: 'Hotels', icon: Building },
                  { name: 'Kitchen – Casual Dining', icon: Users },
                  { name: 'Kitchen – Fine Dining', icon: UtensilsCrossed },
                  { name: 'Kitchen – Quick Service & Takeaway', icon: Coffee },
                  { name: 'Manufacturing & Engineering', icon: Settings },
                  { name: 'Shopping Malls', icon: Store },
                  { name: 'Stadiums & Arenas', icon: Building2 },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a key={idx} href="#" className="flex items-center gap-4 px-6 py-2.5 hover:bg-gray-50 transition-colors">
                      <Icon className="w-[18px] h-[18px] text-[#4a6382] shrink-0" strokeWidth={1.5} />
                      <span className="text-[13px] font-semibold text-[#0f284f]">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <a href="#" className="text-[14px] font-bold text-gray-800 hover:text-[#004fa3] flex items-center gap-1.5 transition-colors">Solutions <span className="text-[#004fa3] font-bold">+</span></a>
            <a href="#" className="text-[14px] font-bold text-gray-800 hover:text-[#004fa3] transition-colors">Servicing</a>
            <a href="#" className="text-[14px] font-bold text-gray-800 hover:text-[#004fa3] transition-colors">About</a>
            <a href="#" className="text-[14px] font-bold text-gray-800 hover:text-[#004fa3] transition-colors">Contact</a>
          
          <div className="flex items-center gap-3 border-l-2 border-gray-300 pl-5 ml-2">
             <a href="#" className="text-[14px] font-bold text-gray-800 hover:text-gray-900 flex items-center gap-1.5 transition-colors">EN <span className="text-[#004fa3] font-bold">+</span></a>
             <button className="text-gray-800 hover:text-[#004fa3] ml-1 transition-colors">
               <Search className="w-[20px] h-[20px]" strokeWidth={2.5} />
             </button>
          </div>
        </nav>
       {mobileMenu && (
  <div className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-white rounded-2xl shadow-2xl p-6 z-50">
    {mobileMenu && (
  <div className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-white rounded-2xl shadow-2xl p-6 z-50">
    <a href="#" className="block py-3 border-b">Sectors</a>
    <a href="#" className="block py-3 border-b">Solutions</a>
    <a href="#" className="block py-3 border-b">Servicing</a>
    <a href="#" className="block py-3 border-b">About</a>
    <a href="#" className="block py-3">Contact</a>
  </div>
)}
  </div>
)}
    

        </div>
      </header>
{/* ================= HOME PAGE START ================= */}
{/* Hero Section */}
{/* ================= HOME PAGE START ================= */}
      <section
        className="relative w-full overflow-hidden"
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[750px]">
          <div className="flex flex-col items-start max-w-xl pl-0 md:pl-12 bg-slate-900/20 backdrop-blur-[1px] p-8 rounded-2xl border border-white/10">
            <h1 className="text-[48px] font-bold text-[#004fa3] mb-6 drop-shadow-sm">ESP</h1>
            <p className="text-[16px] text-gray-200 leading-[1.8] mb-6 font-semibold">
              Our Electrostatic Precipitators or ESPs have been specifically designed for kitchen extract systems and have integral sumps to collect the oil, grease and smoke particles filtered out of the exhaust.
            </p>
            <p className="text-[14px] text-gray-200 leading-[1.8] mb-10 font-medium">
              This not only simplifies servicing but eradicates potentially dangerous spillage from the bottom of the units and greatly cuts down on buildups of grease within the ducting.
            </p>
            <button className="bg-gradient-to-r from-[#004fa3] to-[#49a82e] hover:opacity-90 text-white px-8 py-3.5 rounded text-[14px] font-bold transition-opacity shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
              View the Technical Specification
            </button>
          </div>

          <div className="hidden md:flex justify-center items-center" aria-hidden="true">
            <div className="w-full max-w-md h-[260px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center text-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white hover:-translate-y-1 transition-transform">
          <Boxes className="w-[28px] h-[28px] text-[#004fa3] stroke-[2]" />
          <span className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">Modular in design</span>
        </div>
        <div className="flex flex-col items-center text-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white hover:-translate-y-1 transition-transform">
          <Droplets className="w-[28px] h-[28px] text-[#49a82e] stroke-[2]" />
          <span className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">IP65 Rated for outside installation</span>
        </div>
        <div className="flex flex-col items-center text-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white hover:-translate-y-1 transition-transform">
          <Zap className="w-[28px] h-[28px] text-[#004fa3] stroke-[2]" />
          <span className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">Highly energy efficient</span>
        </div>
        <div className="flex flex-col items-center text-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white hover:-translate-y-1 transition-transform">
          <CircleDollarSign className="w-[28px] h-[28px] text-[#49a82e] stroke-[2]" />
          <span className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">Competitive Cost / High availability</span>
        </div>
      </section>


      {/* ESP Diagram Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24 w-full flex flex-col items-center">
        <div className="w-full relative mb-12 flex justify-center items-center">
             <img 
               src={espInternalDiagram} 
               alt="ESP Internal Diagram: Dirty Air Inlet -> Pre Filter -> High Voltage -> Collector Cells -> Clean Air Outlet" 
               className="w-full max-w-6xl object-contain mx-auto"
             />
        </div>
        <h2 className="text-[32px] md:text-[42px] font-normal text-black text-center tracking-tight hidden">
          Breathe Easier with a Better Kitchen Air System
        </h2>
      </section>

      {/* ESP Working Principle & Information */}
      <section className="py-24 px-6 w-full bg-white/80 backdrop-blur-md relative overflow-hidden z-10">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#004fa3]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-48 -left-24 w-72 h-72 bg-[#49a82e]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="w-full mx-auto flex flex-col gap-24">
          
          {/* Heading */}
          <div className="text-center flex flex-col items-center">
            <h2 className="text-[36px] md:text-[46px] font-bold text-[#0f284f] mb-4 tracking-tight">Electrostatic Precipitator (ESP)</h2>
            <div className="h-[3px] w-24 bg-gradient-to-r from-[#004fa3] to-[#49a82e] rounded-full mb-6"></div>
            <p className="text-[18px] md:text-[22px] font-medium text-[#49a82e] tracking-wide">Clean Air. Healthy Environment.</p>
          </div>

          {/* Row 1: 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col">
              <h3 className="text-[28px] font-bold text-[#004fa3] mb-6">What is ESP?</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8] mb-10">
                Electrostatic Precipitator (ESP) is an advanced air cleaning technology that removes smoke, grease, oil mist, PM2.5 particles and odour from commercial kitchen exhaust air using electrostatic charging technology.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: CloudFog, label: 'Smoke', color: 'text-gray-600' },
                  { icon: Droplet, label: 'Grease', color: 'text-amber-500' },
                  { icon: Droplets, label: 'Oil Mist', color: 'text-blue-500' },
                  { icon: ShieldCheck, label: 'PM 2.5', color: 'text-slate-700' },
                  { icon: Wind, label: 'Odour', color: 'text-teal-500' },
                  { icon: Leaf, label: 'Clean Air', color: 'text-[#49a82e]' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <item.icon className={`w-6 h-6 ${item.color}`} strokeWidth={1.5} />
                    </div>
                    <span className="text-[13px] font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] group bg-white border border-gray-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#004fa3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src={espCellImage}
                alt="Actual ESP Product" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out p-4"
              />
            </div>
          </div>

          {/* Row 2: Timeline */}
          <div className="flex flex-col">
            <h3 className="text-[24px] font-bold text-[#0f284f] mb-10 text-center">ESP Working Process</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {[
                { title: 'Dirty Air Inlet', icon: Wind, color: 'text-red-500', bg: 'bg-red-50' },
                { title: 'Pre Filter', icon: Boxes, color: 'text-gray-500', bg: 'bg-gray-50' },
                { title: 'Ionizer Section', subtitle: '(High Voltage)', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-50' },
                { title: 'Collector Cells', subtitle: '(Grounded Plates)', icon: Droplet, color: 'text-orange-500', bg: 'bg-orange-50' },
                { title: 'Carbon Filter', subtitle: '(Optional)', icon: Wind, color: 'text-slate-700', bg: 'bg-slate-50' },
                { title: 'Clean Air Outlet', icon: Leaf, color: 'text-[#49a82e]', bg: 'bg-green-50' }
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center flex-1 w-full md:w-auto">
                    <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 flex flex-col items-center text-center w-full max-w-[200px] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-full ${step.bg} ${step.color} flex items-center justify-center mb-4`}>
                        <step.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-[14px] font-bold text-gray-800 leading-tight">{step.title}</h4>
                      {step.subtitle && <span className="text-[11px] text-gray-500 mt-1">{step.subtitle}</span>}
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="py-2 md:py-0 md:px-2 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-6 h-6 text-[#004fa3] hidden md:block animate-pulse" />
                      <ArrowDown className="w-6 h-6 text-[#004fa3] block md:hidden animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Row 3: Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="bg-[#0f284f] p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <h3 className="text-white font-bold text-[18px]">Key Advantages</h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {[
                    'Up to 95% smoke removal', 'Grease removal', 'Oil Mist removal', 
                    'Low pressure drop', 'Washable ESP cells', 'Energy efficient', 
                    'Easy maintenance', 'Long life'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#49a82e] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[14px] text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="bg-[#49a82e] p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <h3 className="text-white font-bold text-[18px]">Applications</h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {[
                    'Commercial Kitchen', 'Hotel', 'Restaurant', 'Food Court', 
                    'Food Processing', 'Industrial Kitchen', 'HVAC Exhaust', 'Cloud Kitchen'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#49a82e] shrink-0 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-[14px] text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="bg-gradient-to-r from-[#004fa3] to-[#49a82e] p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <h3 className="text-white font-bold text-[18px]">Why AIRoTAKE ESP?</h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {[
                    'Stainless Steel Construction', 'High Efficiency', 'Compact Design', 
                    'Custom Sizes', 'Reliable Performance', 'Low Maintenance', 
                    'International Quality', 'Made for Commercial Kitchen Ventilation'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-[#004fa3] shrink-0 mt-0.5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[14px] text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="technical-specification" className="bg-gray-50/80 backdrop-blur-md py-24 px-6 w-full border-t border-gray-100 z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-14">
            <h2 className="text-[32px] md:text-[38px] font-normal text-[#0f284f] mb-4">Technical Specification</h2>
            <div className="h-[3px] w-24 bg-gradient-to-r from-[#004fa3] to-[#49a82e] mx-auto rounded-full"></div>
            <p className="text-[15px] text-gray-500 mt-6 max-w-2xl mx-auto">
              Our AiroTake ESP units are designed with modularity and efficiency in mind. Below are the standard specifications across our commercial range.
            </p>
          </div>
          
          <div className="w-full overflow-x-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl bg-white border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gradient-to-r from-[#004fa3] to-[#49a82e] text-white">
                  <th className="py-5 px-6 font-semibold text-[14px] whitespace-nowrap">Model</th>
                  <th className="py-5 px-6 font-semibold text-[14px] whitespace-nowrap">Electrical Supply</th>
                  <th className="py-5 px-6 font-semibold text-[14px] whitespace-nowrap">Power Cons.</th>
                  <th className="py-5 px-6 font-semibold text-[14px] whitespace-nowrap">Max Air Volume</th>
                  <th className="py-5 px-6 font-semibold text-[14px] whitespace-nowrap">Dimensions (H x W x D)</th>
                  <th className="py-5 px-6 font-semibold text-[14px] whitespace-nowrap">Weight</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-gray-700">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 3000-4000</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">50 W</td>
                  <td className="py-4 px-6">1.6 m&sup3;/sec</td>
                  <td className="py-4 px-6">450 x 450 x 640 mm</td>
                  <td className="py-4 px-6">45 kg</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 6500-7500</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">100 W</td>
                  <td className="py-4 px-6">3.2 m&sup3;/sec</td>
                  <td className="py-4 px-6">450 x 900 x 640 mm</td>
                  <td className="py-4 px-6">85 kg</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 10000-11000</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">150 W</td>
                  <td className="py-4 px-6">4.8 m&sup3;/sec</td>
                  <td className="py-4 px-6">450 x 1350 x 640 mm</td>
                  <td className="py-4 px-6">120 kg</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 13500-14500</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">200 W</td>
                  <td className="py-4 px-6">6.4 m&sup3;/sec</td>
                  <td className="py-4 px-6">450 x 1800 x 640 mm</td>
                  <td className="py-4 px-6">160 kg</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 20500-21500</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">300 W</td>
                  <td className="py-4 px-6">9.6 m&sup3;/sec</td>
                  <td className="py-4 px-6">900 x 1350 x 640 mm</td>
                  <td className="py-4 px-6">240 kg</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 27500-28500</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">400 W</td>
                  <td className="py-4 px-6">12.8 m&sup3;/sec</td>
                  <td className="py-4 px-6">900 x 1800 x 640 mm</td>
                  <td className="py-4 px-6">320 kg</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 31000-32000</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">450 W</td>
                  <td className="py-4 px-6">14.4 m&sup3;/sec</td>
                  <td className="py-4 px-6">1350 x 1350 x 640 mm</td>
                  <td className="py-4 px-6">360 kg</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 font-semibold text-[#004fa3]">ATESP 41500-42500</td>
                  <td className="py-4 px-6">220/240V 50Hz 1ph</td>
                  <td className="py-4 px-6">600 W</td>
                  <td className="py-4 px-6">19.2 m&sup3;/sec</td>
                  <td className="py-4 px-6">1350 x 1800 x 640 mm</td>
                  <td className="py-4 px-6">480 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-[13px] text-gray-500 text-center bg-white py-3 px-6 rounded-full border border-gray-200 shadow-sm">
            <span className="text-[#49a82e] font-bold">*</span> All AiroTake ESP models are designed for easy modular linking to accommodate larger air volumes.
          </div>
        </div>
      </section>


      {/* Footer / Bottom Banner */}
      <section className="bg-gradient-to-r from-[#001f40]/90 to-[#003366]/90 backdrop-blur-md text-white py-20 px-6 mt-auto z-10">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start pl-0 lg:pl-12">

          <div className="flex items-start gap-6">
            <button className="bg-gradient-to-br from-[#004fa3] to-[#49a82e] p-3 rounded-sm mt-2.5 flex-shrink-0 hover:opacity-90 transition-opacity">
              <ArrowDown className="w-5 h-5 text-white" strokeWidth={2} />
            </button>

            <div className="flex flex-col items-start">
              <img
                src={logoImage}
                alt="AiroTAKE - Engineered Air Solutions"
                className="w-[240px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="pt-4 pr-0 lg:pr-12">
            <p className="text-[14px] text-gray-300 leading-relaxed font-light">
              All leading restaurant brands use AiroTake products, and as a premier manufacturer of Commercial Kitchen Filtration equipment, we take great pride in knowing that our Commercial Kitchen Electrostatic Precipitators (ESP) are unrivalled.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
