'use client';

import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AlertTriangle,
  FileText,
  Clock,
  XCircle,
  TrendingDown,
  CheckCircle,
  BarChart,
  MessageSquareText,
  UserCheck,
  Apple,
  ShieldCheck,
  Lock,
  FileCheck,
  EyeOff,
  Repeat2,
  UserPlus,
   
} from "lucide-react";
const FEATURES = [
  {
    icon: <FileCheck className="text-blue-600" size={36} />,
    title: "Easy & Accessible for Suppliers",
    desc: "Daily lists, accessible by app or web, with instant updates.",
    accent: "border-blue-400",
  },
  {
    icon: <BarChart className="text-green-600" size={36} />,
    title: "No More Paperwork",
    desc: "All digital, every single order is logged and easy to review.",
    accent: "border-green-500",
  },
  {
    icon: <ShieldCheck className="text-green-600" size={36} />,
    title: "Allergy Safety",
    desc: "Automatically records and communicates dietary needs to suppliers each day.",
    accent: "border-green-500",
  },
  {
    icon: <Repeat2 className="text-orange-500" size={36} />,
    title: "Flexible Ordering",
    desc: "Order for a single day, a week, or set meals to repeat for the whole term or year. Change choices anytime.",
    accent: "border-orange-400",
  },
  {
    icon: <Clock className="text-orange-500" size={36} />,
    title: "Saves Teachers Time",
    desc: "No more handwritten orders, phone calls, or miscommunication.",
    accent: "border-orange-400",
  },
  {
    icon: <Apple className="text-blue-600" size={36} />,
    title: "Home-Controlled Orders",
    desc: "Families can pick favourites or try new options to broaden their child’s diet.",
    accent: "border-blue-400",
  },
  {
    icon: <Lock className="text-orange-500" size={36} />,
    title: "Compliant & Secure",
    desc: "Designed for Ireland’s government-funded school meal program.",
    accent: "border-orange-400",
  },
  {
    icon: <EyeOff className="text-blue-600" size={36} />,
    title: "Privacy First",
    desc: "Suppliers only see pupil numbers and meal choices—never personal details.",
    accent: "border-blue-400",
  },
];


// Simple UI components
type ButtonProps = React.PropsWithChildren<{
  className?: string;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-2 rounded-full font-semibold shadow transition transform focus:outline-none focus:ring-2 focus:ring-[#f58c36] bg-gradient-to-tr from-[#f58c36] to-[#fb9e4c] hover:scale-105 hover:from-[#01777a] hover:to-[#f58c36] text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}


type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={
        'rounded-3xl bg-white/70 backdrop-blur border border-gray-200 shadow-2xl overflow-hidden ' +
        className
      }
    >
      {children}
    </div>
  );
}

const GETFORM_ENDPOINT = 'https://getform.io/f/bjjmkpwb';

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    const formData = new FormData(formRef.current);
    try {
      const res = await fetch(GETFORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        toast.success('Message sent! 🙌');
        formRef.current.reset();
      } else {
        throw new Error(`Status ${res.status}`);
      }
    } catch {
      toast.error('Oops, try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 text-gray-900">
      {/* HEADER */}
      <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/lunch-log.png" alt="Logo" width={180} height={30} />
            </Link>
            <nav className="hidden md:flex gap-5 text-md font-semibold">
              <a href="#how" className="hover:text-orange-500 transition">How It Works</a>
              <a href="#value" className="hover:text-orange-500 transition">Why LunchLog?</a>
              <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
            </nav>
          </div>
          <div className="hidden md:block">
            <a href="#contact">
              <Button>Contact</Button>
            </a>
          </div>
          <button
            className="md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              // Close icon SVG
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              // Hamburger icon SVG
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2 px-6">
            <nav className="flex flex-col gap-2 text-lg font-semibold">
              <a href="#how" onClick={() => setMobileOpen(false)} className="py-2 hover:text-orange-500">How It Works</a>
              <a href="#value" onClick={() => setMobileOpen(false)} className="py-2 hover:text-orange-500">Why LunchLog?</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="py-2 hover:text-orange-500">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO w/ DEMO VIDEO */}
<section
  id="demo"
  className="relative w-full overflow-hidden bg-gradient-to-tr from-[#fff7f0] to-[#fefdf9] py-20 px-6"
>
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
    {/* Left (Text + CTA) */}
    <motion.div
      className="w-full md:w-1/2 z-10 flex flex-col justify-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow">
        School <span className="text-orange-500">Lunches</span>
        <br />
        Made Simple.
      </h1>
      <p className="text-xl mb-8 text-gray-700 max-w-lg">
        A smarter, simpler way for Irish schools and parents/guardians to order
        government-funded lunches from suppliers. No more paper slips, last-minute
        changes, or confusion.
        <br />
        <span className="text-orange-500">Book a free live demo.</span>
      </p>
      <div className="flex gap-4">
        <a href="#contact">
          <Button>Get in Touch</Button>
        </a>
        <a href="#how">
          <Button>
            How It Works
          </Button>
        </a>
      </div>
    </motion.div>

    {/* Right (Image) */}
   <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative w-full md:w-1/2 flex justify-center md:justify-end overflow-visible"
>
  <div className="w-full md:w-[150%] max-w-none transition-transform duration-300 hover:scale-105">
    <Image
      src="/demo-pic.png"
      alt="LunchLog preview"
      width={1600}
      height={900}
      className="w-full h-auto pointer-events-none"
      priority
    />
  </div>
</motion.div>

  </div>
</section>

      {/* FEATURES SECTION */}
      {/* PAIN POINTS / VALUE SECTION */}
      <section id="value" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Pain Points */}
          <Card className="p-8 shadow-2xl border-l-8 border-orange-400">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-orange-600">
              <AlertTriangle className="text-orange-500" size={28} />
              Current Pain Points
            </h2>
            <ul className="space-y-6 text-gray-800 text-lg">
              <li className="flex gap-3 items-start">
                <FileText className="text-orange-400 mt-1" size={22} />
                Manual ordering via email, phone, or spreadsheets
              </li>
              <li className="flex gap-3 items-start">
                <XCircle className="text-red-400 mt-1" size={22} />
                Order errors and missed dietary needs
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="text-blue-400 mt-1" size={22} />
                Time wasted chasing schools or re-entering data
              </li>
              <li className="flex gap-3 items-start">
                <MessageSquareText className="text-blue-400 mt-1" size={22} />
                Lack reporting or order tracking
              </li>
            </ul>
          </Card>
          {/* Right: Value Delivered */}
          <Card className="p-8 shadow-2xl border-l-8 border-green-500">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-green-700">
              <CheckCircle className="text-green-500" size={28} />
              LunchLog Value
            </h2>
            <ul className="space-y-6 text-gray-800 text-lg">
              <li className="flex gap-3 items-start">
                <Clock className="text-green-500 mt-1" size={22} />
                Saves on admin hours for schools and suppliers
              </li>
              <li className="flex gap-3 items-start">
                <TrendingDown className="text-orange-500 mt-1" size={22} />
                Reduces order errors and food waste
              </li>
              <li className="flex gap-3 items-start">
                <UserCheck className="text-blue-500 mt-1" size={22} />
                Improves school–supplier communication
              </li>
              <li className="flex gap-3 items-start">
                <BarChart className="text-green-500 mt-1" size={22} />
                Makes reporting and compliance easier
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          How LunchLog Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 flex flex-col items-center gap-5 border-t-8 border-orange-400">
              <UserPlus className="text-orange-400" size={36} />
              <h3 className="text-lg font-bold text-orange-500 mb-2">1. Quick Pupil Setup</h3>
              <p className="text-base text-gray-800">
                Teachers easily print secure registration letters. Parents/Guardians enter a code to claim their child. No manual data entry.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="p-8 flex flex-col items-center gap-5 border-t-8 border-blue-400">
              <Apple className="text-blue-400" size={36} />
              <h3 className="text-lg font-bold text-blue-600 mb-2">2. Parent/Guardians Order</h3>
              <p className="text-base text-gray-800">
Parents/Guardians can choose meals for one day, a week, or set them to repeat for the whole term or year. LunchLog tracks allergies and dietary needs, and automatically applies your saved preferences if you forget to order.              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="p-8 flex flex-col items-center gap-5 border-t-8 border-green-400">
              <ShieldCheck className="text-green-500" size={36} />
              <h3 className="text-lg font-bold text-green-600 mb-2">3. Suppliers Deliver</h3>
              <p className="text-base text-gray-800">
                Every morning, suppliers get an accurate, up-to-date meal list for each classroom including absences and allergies making delivery simple.
              </p>
            </Card>

          </motion.div>
        </div>
      </section>

      {/* WHY LUNCHLOG SECTION */}
  
    <section id="benefits" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-900 drop-shadow">
        Why LunchLog?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feat) => (
          <div
            key={feat.title}
            className={
              `flex flex-col items-center p-7 bg-white/80 rounded-2xl border-t-8 ${feat.accent} shadow-xl hover:shadow-2xl transition
              hover:-translate-y-1 hover:scale-105 duration-200 ease-out`
            }
          >
            <div className="mb-4">{feat.icon}</div>
            <div className="font-bold text-lg mb-2 text-gray-800 text-center">{feat.title}</div>
            <div className="text-gray-600 text-base text-center">{feat.desc}</div>
          </div>
        ))}
      </div>
    </section>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-lg font-medium mb-2 text-blue-900">Let’s chat!</p>
            <p className="text-gray-700 mb-4">
              Fill the form or just <a href="mailto:darren@lunchlog.ie" className="text-orange-500 font-semibold">email darren@lunchlog.ie</a>
            </p>
            <ul className="text-gray-600 text-sm">
              <li>💬 Free consultation and demo</li>
              <li>⚡ Fast response</li>
            </ul>
          </div>
          <Card className="flex-1 p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-semibold mb-1">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/90 focus:ring-2 ring-blue-300 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/90 focus:ring-2 ring-blue-300 transition"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white/90 focus:ring-2 ring-blue-300 transition resize-none"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </Card>
        </div>
        <ToastContainer position="bottom-center" autoClose={5000} theme="light" />
      </section>
      
      {/* FOOTER */}
      <footer className="w-full mt-20 py-8 bg-white/90 border-t border-gray-200 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-3">
          <div>
            <span className="font-bold text-orange-500">LunchLog</span> &copy; {new Date().getFullYear()} A product of Syfo Ireland.
          </div>
          <div>
            <a href="mailto:darren@lunchlog.ie" className="hover:text-orange-500">darren@lunchlog.ie</a>
            <span className="mx-2">|</span>
            <a href="tel:+353871204431" className="hover:text-orange-500">+353 87 120 4431</a>
          </div>
          <div>
            <span>Privacy focused.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
