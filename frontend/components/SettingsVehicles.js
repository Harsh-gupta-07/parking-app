"use client";

import { Car, Pencil, Trash2, Plus } from "lucide-react";

export default function SettingsVehicles({ setActiveView, onEditVehicle }) {
    const vehicles = [
        {
            id: 1,
            name: "Toyota Camry",
            plate: "MH 12 AB 1234",
            owner: "John Doe",
        },
        {
            id: 2,
            name: "Honda Civic",
            plate: "MH 14 CD 5678",
            owner: "John Doe",
        },
    ];

    const handleEdit = (vehicle) => {
        onEditVehicle(vehicle);
        setActiveView("edit-vehicle");
    };

    return (
        <div className="px-6 mt-6">
            <div className="space-y-4">
                {vehicles.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <Car size={24} className="text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">{vehicle.name}</h3>
                                <p className="text-slate-600 text-sm">{vehicle.plate}</p>
                                <p className="text-slate-500 text-sm">{vehicle.owner}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleEdit(vehicle)}
                                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                            >
                                <Pencil size={16} />
                                Edit
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 border border-red-100 rounded-xl text-red-600 font-medium text-sm hover:bg-red-100 transition-colors">
                                <Trash2 size={16} />
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => setActiveView("add-vehicle")}
                className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-4 bg-indigo-600 rounded-xl text-white font-medium hover:bg-indigo-700 transition-colors"
            >
                <Plus size={20} />
                Add New Vehicle
            </button>
        </div>
    );
}
