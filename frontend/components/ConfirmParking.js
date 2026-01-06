"use client";
import { ArrowLeft, Car, MapPin, Smartphone, CreditCard, Banknote, CheckCircle2 } from "lucide-react";

export default function ConfirmParking({ vehicle, onBack }) {
    const paymentMethods = [
        { id: "upi", name: "UPI", icon: Smartphone, color: "bg-indigo-100", iconColor: "text-indigo-600" },
        { id: "netbanking", name: "Netbanking", icon: CreditCard, color: "bg-blue-100", iconColor: "text-blue-600" },
        { id: "card", name: "Credit/Debit Card", icon: CreditCard, color: "bg-emerald-100", iconColor: "text-emerald-600" },
        { id: "cash", name: "Cash", icon: Banknote, color: "bg-orange-100", iconColor: "text-orange-600" },
    ];

    const pricing = {
        baseRate: 100,
        serviceFee: 30,
        gst: 20,
    };

    const totalAmount = pricing.baseRate + pricing.serviceFee + pricing.gst;

    return (
        <div className="bg-slate-50 min-h-full pb-32">
            <div className="bg-indigo-600 px-6 pt-8 pb-6 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-lg font-bold text-white">Confirm Parking</h1>
                </div>
            </div>

            <div className="px-5 py-6 space-y-5">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3 flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                    <span className="text-emerald-700 text-sm font-medium">Auto-filled from saved vehicle</span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                        <Car size={18} />
                        <span className="font-semibold text-sm">Vehicle Details</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-slate-500 text-sm">Owner</span>
                            <span className="text-slate-800 font-medium text-sm">John Doe</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500 text-sm">Vehicle</span>
                            <span className="text-slate-800 font-medium text-sm">{vehicle?.name || "Honda Civic"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500 text-sm">Number Plate</span>
                            <span className="text-slate-800 font-medium text-sm">{vehicle?.plate || "MH 14 CD 5678"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500 text-sm">Mobile</span>
                            <span className="text-slate-800 font-medium text-sm">1234567890</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-slate-600 mb-3">
                        <MapPin size={18} />
                        <span className="font-semibold text-sm">Parking Location</span>
                    </div>
                    <h3 className="font-bold text-slate-800">Inorbit Mall</h3>
                    <p className="text-slate-500 text-sm">Malad West, Mumbai</p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-2">Payment Method</h3>
                    <p className="text-slate-500 text-sm mb-4">Choose how you want to pay</p>
                    <div className="grid grid-cols-2 gap-3">
                        {paymentMethods.map((method, index) => {
                            const Icon = method.icon;
                            const isSelected = index === 0;
                            return (
                                <button
                                    key={method.id}
                                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${isSelected
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-slate-100 bg-white hover:border-slate-200"
                                        }`}
                                >
                                    <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center`}>
                                        <Icon className={method.iconColor} size={24} />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">{method.name}</span>
                                    {isSelected && (
                                        <CheckCircle2 className="text-indigo-600" size={16} />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Base Rate</span>
                            <span className="text-slate-800 font-medium">₹{pricing.baseRate}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Service Fee</span>
                            <span className="text-slate-800 font-medium">₹{pricing.serviceFee}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">GST (18%)</span>
                            <span className="text-slate-800 font-medium">₹{pricing.gst}</span>
                        </div>
                        <div className="border-t border-slate-100 pt-3 flex justify-between">
                            <span className="text-slate-800 font-bold">Total Amount</span>
                            <span className="text-slate-800 font-bold">₹{totalAmount}</span>
                        </div>
                    </div>
                </div>

                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-indigo-600/30">
                    Proceed to Pay ₹{totalAmount}
                </button>
            </div>
        </div>
    );
}
