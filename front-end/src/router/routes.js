import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

const XSSPayloadFireReports = () => import("@/pages/XSSPayloadFireReports.vue");
const XSSPayloads = () => import("@/pages/XSSPayloads.vue");
const Settings = () => import("@/pages/Settings.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/",
    children: [
      {
        path: "",
        name: "XSS Payload Fire Reports",
        component: XSSPayloadFireReports
      },
      {
        path: "/xsspayloads",
        name: "XSS Payloads",
        component: XSSPayloads
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings
      },
    ]
  }
];

export default routes;
