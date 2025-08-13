

import { dashboardData } from "../../data/loginData";

const widget = dashboardData.screens.find(
  (screen) => screen.name === "Dashboard"
)?.widgets||[];

const Dashdata = () => {
  return (
    
    <div>
      <div className="p-15  text-4xl">Dashboard</div>

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-center flex-wrap gap-6 px-4">
        {widget.map(
          (widget, index) =>
            widget.type === "StatsCard" && (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-emerald-600 rounded-xl h-48 p-4 flex flex-col justify-between"
              >
                <div>{widget.icon}</div>
                <div className="text-2xl text-white">{widget.title}</div>
                <div className="text-4xl text-white font-bold">{widget.value}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Dashdata;
