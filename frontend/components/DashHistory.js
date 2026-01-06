"use client";

import { Calendar, MapPin, CreditCard, Download, ChevronDown, ChevronUp, Hash, Clock, Car } from "lucide-react";
import { useState } from "react";

export default function DashHistory() {
    const [expandedId, setExpandedId] = useState(null);

    const history = [
        {
            id: 1,
            ticketId: "TK-2025-05-20-001",
            mall: "Phoenix Mall",
            location: "Lower Parel, Mumbai",
            date: "20 May, 2024",
            entryTime: "14:30",
            exitTime: "17:45",
            duration: "3h 15m",
            price: "₹120",
            status: "Paid",
            plate: "MH 02 AB 1234",
            model: "Toyota Fortuner",
            paymentMethod: "UPI",
        },
        {
            id: 2,
            ticketId: "TK-2025-05-18-042",
            mall: "Inorbit Mall",
            location: "Malad, Mumbai",
            date: "18 May, 2024",
            entryTime: "11:00",
            exitTime: "13:20",
            duration: "2h 20m",
            price: "₹80",
            status: "Paid",
            plate: "MH 02 AB 1234",
            model: "Toyota Fortuner",
            paymentMethod: "Credit Card",
        },
        {
            id: 3,
            ticketId: "TK-2025-05-15-089",
            mall: "Infinity Mall",
            location: "Andheri, Mumbai",
            date: "15 May, 2024",
            entryTime: "18:00",
            exitTime: "21:00",
            duration: "3h 00m",
            price: "₹150",
            status: "Paid",
            plate: "MH 02 AB 1234",
            model: "Toyota Fortuner",
            paymentMethod: "Cash",
        },
    ];

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="pb-32 min-h-screen bg-slate-50">
            <div className="bg-white pt-6 pb-6 px-6 shadow-sm border-b border-slate-100 sticky top-0 z-10">
                <h1 className="text-2xl font-bold text-slate-900">History</h1>
                <p className="text-slate-500 text-sm">Your past parking sessions</p>
            </div>

            <div className="px-6 mt-6 space-y-4">
                {history.map((item) => {
                    const isExpanded = expandedId === item.id;
                    return (
                        <div
                            key={item.id}
                            className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 ${isExpanded ? "ring-2 ring-indigo-500/10" : ""
                                }`}
                        >
                            <div
                                onClick={() => toggleExpand(item.id)}
                                className="p-4 cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">{item.mall}</h3>
                                        <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                                            <MapPin size={12} />
                                            {item.location}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="font-bold text-slate-900 text-lg">{item.price}</span>
                                        <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold uppercase mt-1">
                                            {item.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-slate-500 text-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Car size={14} />
                                            <span>{item.plate}</span>
                                        </div>
                                    </div>
                                    <button className="text-slate-400">
                                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                </div>
                            </div>

                            {isExpanded && (
                                <div className="border-t border-slate-100 bg-slate-50/50">
                                    <div className="p-4 space-y-3">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Booking Details</h4>
                                            <div className="flex items-center gap-1.5 bg-indigo-50 px-2 py-1 rounded text-[10px] mobile-text-compact">
                                                <span className="text-slate-500 font-medium">Duration:</span>
                                                <span className="text-indigo-700 font-bold">{item.duration}</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                            <div className="flex gap-2">
                                                <Hash size={14} className="text-slate-400 mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-[10px] text-slate-400 font-medium uppercase">Ticket ID</p>
                                                    <p className="text-slate-700 font-medium text-xs font-mono">{item.ticketId}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <CreditCard size={14} className="text-slate-400 mt-0.5 shrink-0" />
                                                <div>
                                                    <p className="text-[10px] text-slate-400 font-medium uppercase">Payment</p>
                                                    <p className="text-slate-700 font-medium text-xs">{item.paymentMethod}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 col-span-2">
                                                <Car size={14} className="text-slate-400 mt-0.5 shrink-0" />
                                                <div className="flex items-baseline gap-2">
                                                    <div>
                                                        <p className="text-[10px] text-slate-400 font-medium uppercase">Vehicle</p>
                                                        <span className="text-slate-700 font-bold text-xs">{item.model}</span>
                                                        <span className="text-[10px] text-slate-500 ml-1">({item.plate})</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 col-span-2">
                                                <Clock size={14} className="text-slate-400 mt-0.5 shrink-0" />
                                                <div className="flex-1 grid grid-cols-2 gap-4">
                                                    <div>
                                                        <p className="text-[10px] text-slate-400 font-medium uppercase">Entry</p>
                                                        <p className="text-slate-700 font-medium text-xs">{item.entryTime}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-slate-400 font-medium uppercase">Exit</p>
                                                        <p className="text-slate-700 font-medium text-xs">{item.exitTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full bg-white text-indigo-600 border border-indigo-100 rounded-lg py-2.5 font-medium text-xs flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors mt-1 shadow-sm">
                                            <Download size={14} />
                                            Download Receipt
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
