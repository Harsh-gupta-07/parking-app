import { Scan, MapPin, Clock, Calendar, ChevronRight, Trophy, Car } from "lucide-react";

function DashHome({ onScanClick }) {
    const recentParking = [
        {
            id: 1,
            mall: "Phoenix Mall",
            location: "Lower Parel, Mumbai",
            date: "8 Dec 2025",
            time: "4h 15m",
            plate: "MH 12 AB 1234",
            price: "₹180",
            status: "completed",
        },
        {
            id: 2,
            mall: "Central Plaza",
            location: "Andheri West, Mumbai",
            date: "5 Dec 2025",
            time: "2h 30m",
            plate: "MH 12 AB 1234",
            price: "₹120",
            status: "completed",
        },
    ];
    return (
        <div className="bg-slate-50 min-h-full pb-32">
            <div className="bg-indigo-600 px-6 pt-8 pb-12 rounded-b-[2rem] relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="text-white">
                        <h1 className="text-lg font-bold">Smart Parking</h1>
                        <p className="text-indigo-200 text-sm">Welcome back!</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30" />
                </div>

                <div className="bg-linear-to-r from-violet-600 to-indigo-500 rounded-2xl p-4 text-white relative overflow-hidden border border-white/10 shadow-lg shadow-indigo-900/20 mt-4">
                    <div className="relative z-10 max-w-[70%]">
                        <div className="flex items-center gap-1.5 text-amber-300 text-[10px] font-bold mb-1">
                            <Trophy size={12} fill="currentColor" />
                            #1 IN INDIA
                        </div>
                        <h2 className="font-bold text-lg leading-tight mb-1">Premium Parking Solution</h2>
                        <p className="text-indigo-100 text-[10px]">Trusted by 1M+ users nationwide</p>
                    </div>

                    <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                        <Car size={80} className="text-white/20 rotate-12" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Car size={48} className="text-red-500 drop-shadow-lg" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 -mt-6 relative z-20 space-y-6">

                <button onClick={onScanClick} className="w-full bg-orange-50 rounded-2xl p-4 border border-orange-100 shadow-sm hover:shadow-md transition-shadow text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-orange-400 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                            <Scan className="text-white" size={28} />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-800">Scan to Park</h3>
                            <p className="text-slate-500 text-xs mt-0.5">Scan QR code at parking entrance</p>
                        </div>
                        <ChevronRight className="text-slate-300" size={20} />
                    </div>
                </button>

                <div>
                    <h3 className="font-bold text-slate-800 mb-3 px-1">Active Parking</h3>

                    <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                                    <span className="font-bold text-lg">In</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">Inorbit Mall</h3>
                                    <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                                        <span className="flex items-center gap-1"><Clock size={12} /> 01:56 pm</span>
                                        <span className="flex items-center gap-1"><Car size={12} /> MH 12 AB 1234</span>
                                    </div>
                                </div>
                            </div>
                            <ChevronRight className="text-slate-400" size={16} />
                        </div>

                        <div className="flex items-center">
                            <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                Parked - 8m
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-3 px-1">Recent Parking</h3>
                    <div className="space-y-3">
                        {recentParking.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold text-slate-800">{item.mall}</h4>
                                        <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                                            <MapPin size={12} />
                                            {item.location}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="block font-bold text-slate-800">{item.price}</span>
                                        <span className="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">
                                            {item.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-slate-50 pt-3 flex items-center gap-4 text-xs text-slate-500">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Car size={12} />
                                        {item.plate}
                                    </div>
                                    <div className="ml-auto font-medium">
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DashHome;