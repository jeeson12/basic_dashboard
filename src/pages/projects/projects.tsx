import { dashboardData, type projectscreen } from '../../data/loginData'


const widget = dashboardData.screens.find(
  (screen):screen is projectscreen => screen.name === "Projects"
);

const Projects = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="p-15 text-4xl">Projects</div>
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
            {widget?.projects.map((widget, index) => (
              <tr className="text-center">
                
                <td key={index}className="p-3">{widget.projectId}</td>
                <td key={index}>{widget.name} </td>
                <td key={index}>{widget.lead}</td>
                <td key={index}>{widget.deadline}</td>
                <td key={index}>{widget.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
  )
}

export default Projects
