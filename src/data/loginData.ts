

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


export const hoteldata: hotelDatas[] = [
  {
    date: "2025-11-01",
    propertyId: "HTL001",
    name: "Palm Grove Resort",
    email: "contact@palmgrove.com",
    airport: "Cochin International Airport",
    serviceType: "Airport Pickup",
    totalBooking: 25,
    grandTotal: 125000,
    tax: 6250,
    netRevenue: 118750,
    commission: 7500,
    netToPay: 111250,
  },
  {
    date: "2025-11-02",
    propertyId: "HTL002",
    name: "Blue Lagoon Hotel",
    email: "info@bluelagoon.com",
    airport: "Trivandrum Airport",
    serviceType: "Drop + Pickup",
    totalBooking: 40,
    grandTotal: 200000,
    tax: 10000,
    netRevenue: 190000,
    commission: 12000,
    netToPay: 178000,
  },
  {
    date: "2025-11-03",
    propertyId: "HTL003",
    name: "Seaside Retreat",
    email: "hello@seasideretreat.com",
    airport: "Bangalore Airport",
    serviceType: "Airport Drop",
    totalBooking: 15,
    grandTotal: 75000,
    tax: 3750,
    netRevenue: 71250,
    commission: 5000,
    netToPay: 66250,
  },
  {
    date: "2025-11-04",
    propertyId: "HTL004",
    name: "Mountain View Inn",
    email: "stay@mountainview.com",
    airport: "Delhi Airport",
    serviceType: "Pickup",
    totalBooking: 30,
    grandTotal: 150000,
    tax: 7500,
    netRevenue: 142500,
    commission: 9000,
    netToPay: 133500,
  },
  {
    date: "2025-11-05",
    propertyId: "HTL005",
    name: "Golden Sands Resort",
    email: "book@goldensands.com",
    airport: "Goa Airport",
    serviceType: "Drop",
    totalBooking: 20,
    grandTotal: 100000,
    tax: 5000,
    netRevenue: 95000,
    commission: 6000,
    netToPay: 89000,
  },
  {
    date: "2025-11-06",
    propertyId: "HTL006",
    name: "The Heritage Palace",
    email: "info@heritagepalace.com",
    airport: "Hyderabad Airport",
    serviceType: "Pickup",
    totalBooking: 12,
    grandTotal: 60000,
    tax: 3000,
    netRevenue: 57000,
    commission: 4500,
    netToPay: 52500,
  },
  {
    date: "2025-11-07",
    propertyId: "HTL007",
    name: "UrbanStay Suites",
    email: "support@urbanstay.com",
    airport: "Mumbai Airport",
    serviceType: "Pickup + Drop",
    totalBooking: 50,
    grandTotal: 250000,
    tax: 12500,
    netRevenue: 237500,
    commission: 15000,
    netToPay: 222500,
  },
];
