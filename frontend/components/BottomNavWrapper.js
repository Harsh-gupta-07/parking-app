"use client";

import { Home, Receipt, History, Settings } from "lucide-react";
import { useRole } from "../app/context/RoleContext";
import { useBottomNavState } from "../app/context/BottomNavContext";

export default function BottomNavWrapper() {
    const { role } = useRole();
    const { activeView, setActiveView, showConfirmParking, showScanner } = useBottomNavState();

    if (role !== "user" || showConfirmParking || showScanner) return null;

    const navItems = [
        { name: "Home", id: "home", icon: Home },
        { name: "Ticket", id: "ticket", icon: Receipt },
        { name: "History", id: "history", icon: History },
        { name: "Settings", id: "settings", icon: Settings },
    ];

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 pb-6 z-50 flex justify-around items-center">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                    <button
                        key={item.name}
                        onClick={() => setActiveView(item.id)}
                        className={`flex flex-col items-center gap-1 transition-colors duration-200 ${isActive ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"
                            }`}
                    >
                        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </button>
                );
            })}
        </div>
    );
}
