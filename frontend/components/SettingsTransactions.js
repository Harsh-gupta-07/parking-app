"use client";

import { MapPin, Calendar, Car } from "lucide-react";

export default function SettingsTransactions({ setActiveView }) {
    const transactions = [
        {
            id: 1,
            mall: "Phoenix Mall",
            location: "Lower Parel, Mumbai",
            price: "₹180",
            status: "completed",
            date: "8 Dec 2025",
            vehicle: "MH 12 AB 1234",
            duration: "4h 15m",
        },
        {
            id: 2,
            mall: "Central Plaza",
            location: "Andheri West, Mumbai",
            price: "₹120",
            status: "completed",
            date: "5 Dec 2025",
            vehicle: "MH 12 AB 1234",
            duration: "2h 30m",
        },
        {
            id: 3,
            mall: "Infinity Mall",
            location: "Malad, Mumbai",
            price: "₹90",
            status: "completed",
            date: "1 Dec 2025",
            vehicle: "MH 14 CD 5678",
            duration: "1h 45m",
        },
    ];

    return (
        <div className="px-6 mt-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Parking</h2>

            <div className="space-y-4">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">{transaction.mall}</h3>
                                <div className="flex items-center gap-1 text-slate-500 text-sm mt-0.5">
                                    <MapPin size={14} />
                                    <span>{transaction.location}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="font-bold text-slate-900 text-lg">{transaction.price}</span>
                                <div className="mt-1">
                                    <span className="text-xs text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full font-medium">
                                        {transaction.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                            <div className="flex items-center gap-4 text-slate-500 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    <span>{transaction.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Car size={14} />
                                    <span>{transaction.vehicle}</span>
                                </div>
                            </div>
                            <span className="text-slate-700 font-medium text-sm">{transaction.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}