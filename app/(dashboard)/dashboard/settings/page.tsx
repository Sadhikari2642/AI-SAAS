import { DashboardPlaceholder } from "@/components/dashboard/dashboard-placeholder";

export const metadata = {
  title: "Settings"
};

export default function Settings() {
  return (
    <DashboardPlaceholder
      title="Settings"
      description="Manage workspace name, members, and security policies."
    />
  );
}

