"use client";

import { ChevronLeft, ChevronDown, MapPin, Calendar, TrendingUp, Ticket, IndianRupee, Car, CheckCircle, XCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function DashboardSuperAdmin({ onBack }) {
    const [activeTab, setActiveTab] = useState("overview");
    const [selectedSite, setSelectedSite] = useState("Phoenix Mall - Lower Parel");
    const [showSiteDropdown, setShowSiteDropdown] = useState(false);

    const sites = [
        { id: 1, name: "Phoenix Mall - Lower Parel", address: "Lower Parel, Mumbai" },
        { id: 2, name: "Inorbit Mall - Malad", address: "Malad West, Mumbai" },
        { id: 3, name: "R City Mall - Ghatkopar", address: "Ghatkopar West, Mumbai" },
        { id: 4, name: "Nexus Seawoods", address: "Navi Mumbai" },
    ];

    const currentSite = sites.find(s => s.name === selectedSite) || sites[0];

    const todayStats = {
        ticketsIssued: 87,
        collection: 13050,
    };

    const overallStats = {
        totalTickets: 1247,
        totalCollection: 186450,
        activeParking: 45,
    };

    const pendingApprovals = [
        {
            id: 1,
            type: "New Manager",
            name: "Ramesh Verma",
            site: "Phoenix Mall - Lower Parel",
            date: "5 Jan, 2026",
            status: "pending",
        },
        {
            id: 2,
            type: "New Driver",
            name: "Akash Patel",
            site: "Inorbit Mall - Malad",
            date: "4 Jan, 2026",
            status: "pending",
        },
        {
            id: 3,
            type: "Site Request",
            name: "New Parking Zone B",
            site: "R City Mall - Ghatkopar",
            date: "3 Jan, 2026",
            status: "pending",
        },
    ];

    return (
        <div className="pb-32 bg-slate-50 min-h-screen">
            <div className="bg-linear-to-r from-purple-600 to-purple-700 pt-4 pb-5 px-5">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onBack}
                        className="w-8 h-8 flex items-center justify-center"
                    >
                        <ChevronLeft size={22} className="text-white" />
                    </button>
                    <div>
                        <h1 className="text-white text-lg font-semibold">Super Admin</h1>
                        <p className="text-purple-200 text-xs mt-0.5">System overview and approvals</p>
                    </div>
                </div>

                <div className="flex mt-5 bg-white/10 rounded-full p-1">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === "overview"
                            ? "bg-white text-purple-700"
                            : "text-white"
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("approvals")}
                        className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === "approvals"
                            ? "bg-white text-purple-700"
                            : "text-white"
                            }`}
                    >
                        Approvals
                    </button>
                </div>
            </div>

            {activeTab === "overview" && (
                <div className="px-5">
                    <div className="mt-5">
                        <p className="text-slate-500 text-xs font-medium mb-2">Select Site</p>
                        <div className="relative">
                            <button
                                onClick={() => setShowSiteDropdown(!showSiteDropdown)}
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <MapPin size={16} className="text-purple-600" />
                                    </div>
                                    <span className="text-slate-900 font-medium">{selectedSite}</span>
                                </div>
                                <ChevronDown size={20} className={`text-slate-400 transition-transform ${showSiteDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showSiteDropdown && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-10 overflow-hidden">
                                    {sites.map((site) => (
                                        <button
                                            key={site.id}
                                            onClick={() => {
                                                setSelectedSite(site.name);
                                                setShowSiteDropdown(false);
                                            }}
                                            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors ${selectedSite === site.name ? 'bg-purple-50' : ''
                                                }`}
                                        >
                                            <MapPin size={16} className="text-slate-400" />
                                            <div className="text-left">
                                                <p className="text-slate-900 font-medium text-sm">{site.name}</p>
                                                <p className="text-slate-500 text-xs">{site.address}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Calendar size={16} className="text-slate-500" />
                            <h2 className="text-slate-900 font-semibold">Today's Performance</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                <p className="text-slate-500 text-sm mb-1">Tickets Issued</p>
                                <p className="text-3xl font-bold text-purple-600">{todayStats.ticketsIssued}</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                <p className="text-slate-500 text-sm mb-1">Collection</p>
                                <p className="text-3xl font-bold text-purple-600">₹{todayStats.collection.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-2 mb-3">
                            <TrendingUp size={16} className="text-slate-500" />
                            <h2 className="text-slate-900 font-semibold">Overall Statistics</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Ticket size={18} className="text-blue-600" />
                                    </div>
                                    <span className="text-slate-600">Total Tickets</span>
                                </div>
                                <span className="text-slate-900 font-bold text-xl">{overallStats.totalTickets.toLocaleString()}</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                        <IndianRupee size={18} className="text-green-600" />
                                    </div>
                                    <span className="text-slate-600">Total Collection</span>
                                </div>
                                <span className="text-slate-900 font-bold text-xl">₹{overallStats.totalCollection.toLocaleString()}</span>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <MapPin size={18} className="text-purple-600" />
                                    </div>
                                    <span className="text-slate-600">Active Parking</span>
                                </div>
                                <span className="text-slate-900 font-bold text-xl">{overallStats.activeParking}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "approvals" && (
                <div className="px-5 mt-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-slate-900 font-semibold">Pending Approvals</h2>
                        <span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full text-xs font-medium">
                            {pendingApprovals.length} pending
                        </span>
                    </div>

                    <div className="space-y-4">
                        {pendingApprovals.map((approval) => (
                            <div
                                key={approval.id}
                                className="bg-white rounded-2xl border border-slate-200 p-4"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                                            {approval.type}
                                        </span>
                                        <h3 className="text-slate-900 font-semibold mt-2">{approval.name}</h3>
                                        <p className="text-slate-500 text-sm mt-1">{approval.site}</p>
                                        <div className="flex items-center gap-1.5 mt-2">
                                            <Clock size={12} className="text-slate-400" />
                                            <span className="text-slate-400 text-xs">{approval.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-4">
                                    <button className="flex-1 py-2.5 bg-emerald-500 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors">
                                        <CheckCircle size={16} />
                                        Approve
                                    </button>
                                    <button className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors border border-slate-200">
                                        <XCircle size={16} />
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {pendingApprovals.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-16">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={32} className="text-slate-400" />
                            </div>
                            <h3 className="text-slate-800 font-semibold">All caught up!</h3>
                            <p className="text-slate-500 text-sm mt-1">No pending approvals</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
