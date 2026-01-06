"use client";

import { ArrowLeft, Car, MapPin, Clock, CreditCard, Download, Share2, Smartphone, Hash } from "lucide-react";

export default function DashTickets({ setActiveView }) {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-indigo-600 pb-32 pt-12 px-6 rounded-b-[2.5rem] relative">
                <div className="flex items-center gap-4 text-white mb-8">
                    <div onClick={() => setActiveView("home")} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft size={24} />
                    </div>
                    <h1 className="text-lg font-bold">Parking Ticket</h1>
                </div>

                <div className="bg-emerald-500/90 backdrop-blur-sm mx-auto w-max px-6 py-2 rounded-full flex items-center gap-2 text-white font-medium text-sm shadow-lg shadow-emerald-900/10 mb-6">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Active Parking Session
                </div>
            </div>

            <div className="px-6 -mt-24 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden filter drop-shadow-xl">
                    <div className="p-8 pb-6 bg-white relative">
                        <div className="text-center mb-6">
                            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Smart Parking System</p>
                            <h2 className="text-xl font-bold text-slate-900">Digital Parking Ticket</h2>
                            <p className="text-indigo-600 font-medium text-sm mt-1">Inorbit Mall</p>
                        </div>

                        <div className="w-48 h-48 mx-auto bg-slate-50 rounded-2xl border-2 border-slate-100 p-4 flex items-center justify-center mb-2">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
                                <path d="M0 0h30v30H0V0zm40 0h20v10H40V0zm30 0h30v30H70V0zM10 10v10h10V10H10zm70 0v10h10V10H80zM0 40h10v10H0V40zm20 0h20v20H20V40zm40 0h10v10H60V40zm20 0h20v10H80V40zM0 60h10v20H0V60zm40 0h30v30H40V60zm-30 10v10h10V70H10zm70 0v10h20V70H80z" />
                                <rect x="45" y="45" width="10" height="10" rx="2" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative h-6 bg-white flex items-center">
                        <div className="absolute left-0 w-6 h-6 bg-slate-50 rounded-r-full -ml-3" />
                        <div className="w-full border-t-2 border-dashed border-slate-200 mx-4" />
                        <div className="absolute right-0 w-6 h-6 bg-slate-50 rounded-l-full -mr-3" />
                    </div>

                    <div className="p-8 pt-6 bg-white space-y-6">

                        <div className="flex gap-4">
                            <div className="w-8 flex justify-center pt-1"><Hash size={20} className="text-slate-300" /></div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium mb-0.5">Ticket ID</p>
                                <p className="text-slate-900 font-bold font-mono">TK-2026-01-05-790</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 flex justify-center pt-1"><Car size={20} className="text-slate-300" /></div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium mb-0.5">Vehicle</p>
                                <p className="text-slate-900 font-bold">Toyota Camry</p>
                                <p className="text-slate-500 text-sm">MH 12 AB 1234</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 flex justify-center pt-1"><MapPin size={20} className="text-slate-300" /></div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium mb-0.5">Location</p>
                                <p className="text-slate-900 font-bold">Malad West, Mumbai</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 flex justify-center pt-1"><Clock size={20} className="text-slate-300" /></div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium mb-0.5">Entry Time</p>
                                <p className="text-slate-900 font-bold">5 Jan 2026, 01:56 pm</p>
                                <p className="text-slate-500 text-sm">Duration: 0m</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-8 flex justify-center pt-1"><CreditCard size={20} className="text-slate-300" /></div>
                            <div>
                                <p className="text-xs text-slate-400 font-medium mb-0.5">Amount Paid</p>
                                <p className="text-slate-900 font-bold text-lg">₹150</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-50 text-center">
                            <p className="text-slate-300 text-xs font-medium">Powered by Smart Parking</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                        <Car size={20} />
                        Get My Car
                    </button>

                    <button className="w-full bg-white text-slate-700 font-bold py-4 rounded-2xl border border-slate-200 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                        <Download size={20} />
                        Download Ticket
                    </button>

                    <button className="w-full bg-white text-slate-700 font-bold py-4 rounded-2xl border border-slate-200 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                        <Share2 size={20} />
                        Share Ticket
                    </button>
                </div>

                <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3 items-start">
                    <Smartphone size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-bold text-amber-800 text-sm">Keep this ticket handy</p>
                        <p className="text-amber-700 text-xs mt-1">Show this QR code when retrieving your vehicle</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
