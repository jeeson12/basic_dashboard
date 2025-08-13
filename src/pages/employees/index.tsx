import { dashboardData, type employeescreen,  } from "../../data/loginData";

const widget = dashboardData.screens.find(
  (screen):screen is employeescreen => screen.name === "Employees"
);

const Employees = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="p-15 text-4xl">Employees</div>
      <div className="flex justify-center ">
        <table className="table-fixed w-[80vw] shadow-xl rounded-2xl overflow-hidden">
          <thead className="bg-emerald-600">
            <tr>
              {widget?.tableHeaders.map((widget, index) => (
                <th key={index} className="p-5">
                  {widget}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {widget?.employees.map((widget, index) => (
              <tr className="text-center"key={index}>
                <td  className="p-3">
                  {widget.id}
                </td>
                <td >{widget.name}</td>
                <td>{widget.department} </td>
                <td>{widget.role}</td>
                <td>{widget.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
