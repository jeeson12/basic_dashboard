export type LoginData = { username: string; password: string };
export const loginData: LoginData = {
  username: "jeeson",
  password: "1234",
};

export type Widget = {
  type: string;
  title: string;
  value: string|number;
  icon: string;
};


export type Employee = {
  id: number;
  name: string;
  department: string;
  role: string;
  status: string;
};


export type Project = {
  projectId: string;
  name: string;
  lead: string;
  deadline: string;
  status: string;
};


export type dashboardscreen = {
  name: "Dashboard";
  widgets: Widget[];
};

export type employeescreen = {
  name: "Employees";
  tableHeaders:string[]
  employees: Employee[];
};
export type projectscreen = {
  name: "Projects";
  tableHeaders:string[]
  projects: Project[];
};

export type screen = dashboardscreen | employeescreen | projectscreen;
export type screens = screen[];


export const dashboardData = {
  screens: [
    {
      name: "Dashboard",
      widgets: [
        {
          type: "StatsCard",
          title: "Total Employees",
          value: 132,
          icon: "users",
        },
        {
          type: "StatsCard",
          title: "Ongoing Projects",
          value: 12,
          icon: "briefcase",
        },
        {
          type: "StatsCard",
          title: "Monthly Attendance Rate",
          value: "92%",
          icon: "calendar",
        },
      ],
    },
    {
      name: "Employees",
      tableHeaders: ["ID", "Name", "Department", "Role", "Status"],
      employees: [
        {
          id: 1,
          name: "Alice Johnson",
          department: "Engineering",
          role: "Frontend Developer",
          status: "Active",
        },
        {
          id: 2,
          name: "Bob Smith",
          department: "Marketing",
          role: "SEO Specialist",
          status: "On Leave",
        },
        {
          id: 3,
          name: "Catherine Lee",
          department: "Engineering",
          role: "Backend Developer",
          status: "Active",
        },
        {
          id: 4,
          name: "Daniel Kim",
          department: "Product",
          role: "Product Manager",
          status: "Active",
        },
        {
          id: 5,
          name: "Ella Brown",
          department: "Design",
          role: "UI/UX Designer",
          status: "Active",
        },
        {
          id: 6,
          name: "Frank Harris",
          department: "Engineering",
          role: "DevOps Engineer",
          status: "Inactive",
        },
        {
          id: 7,
          name: "Grace Miller",
          department: "HR",
          role: "HR Executive",
          status: "Active",
        },
        {
          id: 8,
          name: "Harry Wilson",
          department: "Engineering",
          role: "QA Engineer",
          status: "Active",
        },
        {
          id: 9,
          name: "Irene Patel",
          department: "Finance",
          role: "Accountant",
          status: "Active",
        },
        {
          id: 10,
          name: "Jack Thompson",
          department: "Support",
          role: "Customer Support",
          status: "On Leave",
        },
      ],
    },
    {
      name: "Projects",
      tableHeaders: [
        "Project ID",
        "Project Name",
        "Team Lead",
        "Deadline",
        "Status",
      ],
      projects: [
        {
          projectId: "P001",
          name: "Website Redesign",
          lead: "Alice Johnson",
          deadline: "2025-08-15",
          status: "In Progress",
        },
        {
          projectId: "P002",
          name: "Mobile App",
          lead: "John Doe",
          deadline: "2025-09-01",
          status: "Planning",
        },
        {
          projectId: "P003",
          name: "Marketing Automation",
          lead: "Bob Smith",
          deadline: "2025-07-30",
          status: "Completed",
        },
        {
          projectId: "P004",
          name: "Cloud Migration",
          lead: "Frank Harris",
          deadline: "2025-10-05",
          status: "Delayed",
        },
        {
          projectId: "P005",
          name: "Employee Portal",
          lead: "Grace Miller",
          deadline: "2025-08-20",
          status: "In Progress",
        },
        {
          projectId: "P006",
          name: "Finance Tracker",
          lead: "Irene Patel",
          deadline: "2025-08-25",
          status: "Planning",
        },
        {
          projectId: "P007",
          name: "Recruitment Platform",
          lead: "Ella Brown",
          deadline: "2025-09-15",
          status: "In Progress",
        },
      ],
    },
  ],
};


export type hotelDatas={
  date: string;
  propertyId: string;
  name: string;
  email: string;
  airport: string;
  serviceType: string;
  totalBooking: number;
  grandTotal: number;
  tax: number;
  netRevenue: number;
  commission: number;
  netToPay: number;
}

export const hoteldataheader=[
  "date",
  "propertyId",
  "name",
  "email",
  "airport",
  "serviceType",
  "totalBooking",
  "grandTotal",
  "tax",
  "netRevenue",
  "commission",
  "netToPay"
]
