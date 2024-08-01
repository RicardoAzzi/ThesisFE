import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    ArrowDown,
    Route,
    Fuel,
    Heading2,
    Wrench,
    AlignJustify,
    TrendingUp,
    UsersRound,
    UserRoundSearch
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: any;
    submenus: Submenu[];
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  
  export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/dashboard",
            label: "Overview",
            active: pathname.includes("/dashboard"),
            icon: LayoutGrid,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Classroom",
        menus: [
          {
            href: "/dashboard/group-list",
            label: "Group List",
            active: pathname.includes("/dashboard/group-list"),
            icon: AlignJustify,
            submenus: []
          },
          {
            href: "/dashboard/group-details",
            label: "Group Details",
            active: pathname.includes("dashboard/group-details"),
            icon: UsersRound,
            submenus: []
          },
          // {
          //   href: "/dashboard/performance-metrics",
          //   label: "Performance Metrics",
          //   active: pathname.includes("/dashboard/performance-metrics"),
          //   icon: TrendingUp,
          //   submenus: []
          // },
          {
            href: "/dashboard/student-details",
            label: "Student Details",
            active: pathname.includes("/dashboard/student-details"),
            icon: UserRoundSearch,
            submenus: []
          }
          
        ]
      },
      // {
      //   groupLabel: "Maintenance",
      //   menus: [
      //     {
      //       href: "/dashboard/maintenance-schedule",
      //       label: "Maintenance Schedule",
      //       active: pathname.includes("/dashboard/maintenance-schedule"),
      //       icon: Wrench,
      //       submenus: []
      //     },
      //     {
      //       href: "/dashboard/hydrogen-stations",
      //       label: "Hydrogen Stations",
      //       active: pathname.includes("/dashboard/hydrogen-stations"),
      //       icon: Heading2,
      //       submenus: []
      //     },
      //     {
      //       href: "/dashboard/fuel-history",
      //       label: "Fuel History",
      //       active: pathname.includes("/dashboard/fuel-history"),
      //       icon: Fuel,
      //       submenus: []
      //     },
      //     {
      //       href: "/dashboard/route-management",
      //       label: "Route Management",
      //       active: pathname.includes("/dashboard/route-management"),
      //       icon: Route,
      //       submenus: []
      //     }
          
      //   ]
      // },
      // {
      //   groupLabel: "Settings",
      //   menus: [
      //     {
      //       href: "/dashboard/user-settings",
      //       label: "User settings",
      //       active: pathname.includes("/dashboard/user-settings"),
      //       icon: Users,
      //       submenus: []
      //     },
      //     {
      //       href: "/dashboard/system-settings",
      //       label: "System Settings",
      //       active: pathname.includes("/dashboard/system-settings"),
      //       icon: Settings,
      //       submenus: []
      //     }
      //   ]
      // }
    ];
  }