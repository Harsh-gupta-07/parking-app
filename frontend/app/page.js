"use client";

import { useRole } from "./context/RoleContext";
import DashboardUser from "../components/DashboardUser";
import DashboardManager from "../components/DashboardManager";
import DashboardDriver from "../components/DashboardDriver";
import DashboardSuperAdmin from "../components/DashboardSuperAdmin";

export default function Home() {
  const { role } = useRole();

  return (
    <main className="min-h-full">
      {role === "user" && <DashboardUser />}
      {role === "manager" && <DashboardManager />}
      {role === "driver" && <DashboardDriver />}
      {role === "super_admin" && <DashboardSuperAdmin />}
    </main>
  );
}
