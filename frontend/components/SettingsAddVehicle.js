"use client";

import { Car } from 'lucide-react';
import React, { useState, useEffect } from 'react'

export default function SettingsAddVehicle({ setActiveView, editVehicle = null }) {
    const [vehicleName, setVehicleName] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");

    const isEditing = editVehicle !== null;

    useEffect(() => {
        if (editVehicle) {
            setVehicleName(editVehicle.name || "");
            setVehicleNumber(editVehicle.plate || "");
        }
    }, [editVehicle]);

    const handleSubmit = () => {
        if (isEditing) {
            console.log("Updating vehicle:", { id: editVehicle.id, name: vehicleName, plate: vehicleNumber });
        } else {
            console.log("Adding vehicle:", { name: vehicleName, plate: vehicleNumber });
        }
        setVehicleName("");
        setVehicleNumber("");
        setActiveView("vehicles");
    };

    return (
        <div className="px-6 mt-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                        <Car size={32} className="text-indigo-600" />
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Vehicle Name
                        </label>
                        <input
                            type="text"
                            value={vehicleName}
                            onChange={(e) => setVehicleName(e.target.value)}
                            placeholder="e.g. Toyota Camry"
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Vehicle Number
                        </label>
                        <input
                            type="text"
                            value={vehicleNumber}
                            onChange={(e) => setVehicleNumber(e.target.value)}
                            placeholder="e.g. MH 12 AB 1234"
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => setActiveView("vehicles")}
                        className="flex-1 py-3 px-4 bg-slate-100 rounded-xl text-slate-700 font-medium hover:bg-slate-200 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex-1 py-3 px-4 bg-indigo-600 rounded-xl text-white font-medium hover:bg-indigo-700 transition-colors"
                    >
                        {isEditing ? "Save Changes" : "Add Vehicle"}
                    </button>
                </div>
            </div>
        </div>
    )
}
