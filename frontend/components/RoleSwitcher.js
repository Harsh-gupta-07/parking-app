"use client";

import { useRole } from "../app/context/RoleContext";
import { User, Shield, Car, Crown } from "lucide-react";

export default function RoleSwitcher() {
    const { role, setRole } = useRole();

    const roles = [
        { id: "user", label: "User", icon: User },
        { id: "manager", label: "Manager", icon: Shield },
        { id: "driver", label: "Driver", icon: Car },
        { id: "super_admin", label: "Super Admin", icon: Crown },
    ];

    return (
        <div className="bg-white rounded-[2rem] shadow-xl p-6">
            <h3 className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Login As</h3>
            <div className="flex justify-between gap-2">
                {roles.map((item) => {
                    const Icon = item.icon;
                    const isActive = role === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setRole(item.id)}
                            className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200 ${isActive
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                                    : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                                }`}
                        >
                            <Icon size={20} strokeWidth={2.5} />
                            <span className="text-[10px] font-bold text-center leading-tight">{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
