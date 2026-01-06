"use client";

import { Car, Bell, MapPin, Clock, User, ChevronRight } from "lucide-react";

export default function DashboardDriver() {
    const driverName = "Rajesh Kumar";
    const notificationCount = 1;

    const newAssignment = {
        id: 1,
        model: "Maruti Swift",
        plate: "MH12CD5678",
        type: "retrieve", // "park" or "retrieve"
    };

    const currentAssignment = {
        id: 2,
        model: "Honda City",
        plate: "MH02AB1234",
        type: "park",
        customer: "Amit Sharma",
        location: "Phoenix Mall",
        address: "Lower Parel, Mumbai",
        parkAt: "Level 2 - B34",
        assignedAt: "10:28 pm",
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 px-6 pt-6 pb-5 rounded-b-[2rem] sticky top-0 z-10">
                <div className="flex justify-between items-start">
                    <div className="text-white">
                        <h1 className="text-lg font-bold">Driver Console</h1>
                        <p className="text-indigo-200 text-sm mt-1">Welcome back,</p>
                        <p className="text-xl font-bold">{driverName}</p>
                    </div>
                    <button className="relative p-2">
                        <Bell className="text-white" size={24} />
                        {notificationCount > 0 && (
                            <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                {notificationCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <div className="px-5 mt-6 space-y-6">
                {/* New Assignments Section */}
                {newAssignment && (
                    <div>
                        <div className="flex items-center gap-2 mb-3 px-1">
                            <div className="w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <Bell size={14} className="text-indigo-600" />
                            </div>
                            <h3 className="font-bold text-slate-800">New Assignments</h3>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                        <Car size={24} className="text-indigo-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900">{newAssignment.model}</h4>
                                        <p className="text-sm text-slate-500 font-mono">{newAssignment.plate}</p>
                                        <span className={`inline-block mt-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${newAssignment.type === "retrieve"
                                            ? "bg-orange-100 text-orange-600"
                                            : "bg-emerald-100 text-emerald-600"
                                            }`}>
                                            {newAssignment.type === "retrieve" ? "Retrieve Vehicle" : "Park Vehicle"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-indigo-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
                                Accept Assignment
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Current Assignment Section */}
                {currentAssignment && (
                    <div>
                        <h3 className="font-bold text-slate-800 mb-3 px-1">Current Assignment</h3>

                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
                            {/* Vehicle Info */}
                            <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                    <Car size={24} className="text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">{currentAssignment.model}</h4>
                                    <p className="text-sm text-slate-500 font-mono">{currentAssignment.plate}</p>
                                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold border ${currentAssignment.type === "park"
                                        ? "border-emerald-400 text-emerald-600 bg-emerald-50"
                                        : "border-orange-400 text-orange-600 bg-orange-50"
                                        }`}>
                                        {currentAssignment.type === "park" ? "Park Vehicle" : "Retrieve Vehicle"}
                                    </span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-4 mt-4">
                                {/* Customer */}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mt-0.5">
                                        <User size={16} className="text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Customer</p>
                                        <p className="font-semibold text-slate-800">{currentAssignment.customer}</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mt-0.5">
                                        <MapPin size={16} className="text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Location</p>
                                        <p className="font-semibold text-slate-800">{currentAssignment.location}</p>
                                        <p className="text-sm text-slate-500">{currentAssignment.address}</p>
                                    </div>
                                </div>

                                {/* Park At */}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mt-0.5">
                                        <MapPin size={16} className="text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Park at</p>
                                        <p className="font-semibold text-slate-800">{currentAssignment.parkAt}</p>
                                    </div>
                                </div>

                                {/* Assigned At */}
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mt-0.5">
                                        <Clock size={16} className="text-slate-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Assigned at</p>
                                        <p className="font-semibold text-slate-800">{currentAssignment.assignedAt}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className={`w-full mt-6 py-3.5 rounded-xl font-bold text-white transition-colors ${currentAssignment.type === "park"
                                ? "bg-emerald-500 hover:bg-emerald-600"
                                : "bg-orange-500 hover:bg-orange-600"
                                }`}>
                                {currentAssignment.type === "park" ? "Mark as Parked" : "Mark as Retrieved"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
