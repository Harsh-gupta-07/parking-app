"use client";

import { useState } from "react";
import { User, Phone, Mail, Save } from "lucide-react";

export default function SettingsProfile({ setActiveView }) {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "John Doe",
        phone: "+91 98765 43210",
        email: "johndoe@example.com",
    });
    const [editedProfile, setEditedProfile] = useState({ ...profile });

    const handleEdit = () => {
        setIsEditing(true);
        setEditedProfile({ ...profile });
    };

    const handleSave = () => {
        setProfile({ ...editedProfile });
        setIsEditing(false);
        console.log("Saving profile:", editedProfile);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedProfile({ ...profile });
    };

    return (
        <div className="px-6 mt-6">
            <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-semibold">
                        {profile.name.charAt(0).toUpperCase()}
                    </span>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="space-y-5">
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                            <User size={16} />
                            Full Name
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedProfile.name}
                                onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="px-4 py-3 bg-slate-50 rounded-xl text-slate-900">{profile.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                            <Phone size={16} />
                            Phone Number
                        </label>
                        {isEditing ? (
                            <input
                                type="tel"
                                value={editedProfile.phone}
                                onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="px-4 py-3 bg-slate-50 rounded-xl text-slate-900">{profile.phone}</p>
                        )}
                    </div>

                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                            <Mail size={16} />
                            Email Address
                        </label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={editedProfile.email}
                                onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="px-4 py-3 bg-slate-50 rounded-xl text-slate-900">{profile.email}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    {isEditing ? (
                        <div className="flex gap-3">
                            <button
                                onClick={handleCancel}
                                className="flex-1 py-3 px-4 bg-slate-100 rounded-xl text-slate-700 font-medium hover:bg-slate-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 rounded-xl text-white font-medium hover:bg-indigo-700 transition-colors"
                            >
                                <Save size={18} /> Save
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleEdit}
                            className="w-full py-3 px-4 bg-indigo-600 rounded-xl text-white font-medium hover:bg-indigo-700 transition-colors"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}