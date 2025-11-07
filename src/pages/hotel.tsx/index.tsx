import { hoteldataheader } from "../../data/loginData";
import { useEffect, useState } from "react";
import type { hoteldatas } from "../../data/loginData";
import instance from "../../services/axiosInstance";

const HotelData = () => {
  const [hotel, Sethotel] = useState<hoteldatas[]>([]);
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await instance.get<hotelDatas[]>(
          "/finance?start=2025-07-01&end=2025-08-09"
        );
        Sethotel(responce.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        SetLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex gap-5 justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        <div className="animate-pulse text-2xl">loading</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center ">
      <div className="p-15 text-4xl">Hotel</div>
      <div className="flex justify-center ">
        <div className="overflow-x-auto p-7">
          <table className="table-auto w-[80vw] min-w-max shadow-xl rounded-2xl overflow-hidden break-words  ">
            <thead className="bg-emerald-600">
              <tr>
                {hoteldataheader.map((widget, index) => (
                  <th key={index} className="p-5 ">
                    {widget}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {hotel.map((widget, index) => (
                <tr className="text-center " key={index}>
                  <td className="p-3">{widget.date}</td>
                  <td>{widget.propertyId} </td>
                  <td className="px-3">{widget.name}</td>
                  <td className="px-3">{widget.email}</td>
                  <td>{widget.airport}</td>
                  <td>{widget.serviceType}</td>
                  <td>{widget.totalBooking}</td>
                  <td>{widget.grandTotal}</td>
                  <td>{widget.tax}</td>
                  <td>{widget.netRevenue}</td>
                  <td>{widget.commission}</td>
                  <td>{widget.netToPay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HotelData;
