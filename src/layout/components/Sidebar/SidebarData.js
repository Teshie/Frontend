import React from "react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import HelpIcon from "@mui/icons-material/Help";
export const SidebarData = [
  {
    title: "Financial Services",
    path: "/reports",
    icon: <HealthAndSafetyIcon />,
    cName: "nav-text",
  },
  {
    title: "Business Process",
    path: "#",
    icon: <BusinessIcon />,
    cName: "nav-text",
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subNav: [
      {
        title: "Credit Management",
        path: "/creditmanagement",
        icon: <ListIcon />,
        cName: "nav-text",
      },
      {
        title: "Online Banking",
        path: "/onlinebanking",
        icon: <ListIcon />,
        cName: "nav-text",
      },
      {
        title: "Customer Relationship Management",
        path: "/crm",
        icon: <ListIcon />,
        cName: "nav-text",
      },
      {
        title: "Billing Inquiries",
        path: "/billingenquery",
        icon: <ListIcon />,
        cName: "nav-text",
      },
    ],
  },

  {
    title: "Support",
    path: "/support",
    icon: <HelpIcon />,
    cName: "nav-text",
  },
];
