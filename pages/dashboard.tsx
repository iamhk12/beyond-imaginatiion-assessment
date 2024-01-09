import React, { useState, useEffect } from "react";
import Navbar from "@/_components/Navbar";
import SideNav from "@/_components/SideNav";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/key-performance-indicators");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    // Data is still loading
    return <p className="text-white text-3xl w-full text-center">Loading...</p>;
  }

  // Extract data for gender and employment charts (replace with your actual data structure)
  const genderData = {
    labels: ["Male %", "Female %"],
    datasets: [
      {
        data: [
          data.key_performance_indicators.gender.male.percentage,
          data.key_performance_indicators.gender.female.percentage,
        ],
        backgroundColor: ["#3498db", "#e74c3c"],
      },
    ],
  };

  const employmentData = {
    labels: ["Full Time %", "Part Time %", "Daily Wage %"],
    datasets: [
      {
        data: [
          data.key_performance_indicators.employment_type.full_time.percentage,
          data.key_performance_indicators.employment_type.part_time.percentage,
          data.key_performance_indicators.employment_type.daily_wage.percentage,
        ],
        backgroundColor: ["#2ecc71", "#f39c12", "#e74c3c"],
      },
    ],
  };

  return (
    <>
      <div className="backdrop-blur-2xl h-full w-full fixed overflow-hidden">
        <Navbar />
        <SideNav />
        <div className="md:absolute md:left-[300px] text-black w-full h-full flex justify-center bg-black">
          <div className=" absolute md:top-10 md:left-10 left-0  md:max-h-[80vh] max-h-full top-[60px] max-w-[100%]  min-w-[75%] bg-[#ffffff] overflow-y-auto md:pb-20 pb-36">
            <div className="text-black p-5 w-full flex flex-col gap-7">
              <h1 className="text-2xl font-semibold">
                Key Performance Indicators
              </h1>

              <div className="w-full flex flex-wrap">
                <div className="max-w-[500px]">
                  <h1>Gender Distribution</h1>
                  <Pie data={genderData} color="#ffffff" />
                </div>
                <div className="pt-8">
                  <div>
                    Total User :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.gender.male.count +
                        data.key_performance_indicators.gender.female.count}
                    </span>
                  </div>
                  <div>
                    Male :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.gender.male.count}
                    </span>
                  </div>
                  <div>
                    Female :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.gender.female.count}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w-full flex flex-wrap">
                <div className="max-w-[500px]">
                  <h1>Employment Type Distribution</h1>
                  <Pie data={employmentData} color="#ffffff" />
                </div>
                <div className="pt-8">
                  {/* <div>
                    Total User :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.gender.male.count +
                        data.key_performance_indicators.gender.female.count}
                    </span>
                  </div> */}
                  <div>
                    Total :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.employment_type.total_users}
                    </span>
                  </div>
                  <div>
                    Full Time :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.employment_type.full_time.count}
                    </span>
                  </div> %
                  <div>
                    Part Time :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.employment_type.part_time.count}
                    </span>
                  </div>
                  <div>
                    Daily wage :{" "}
                    <span className="font-medium">
                      {data.key_performance_indicators.employment_type.daily_wage.count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed w-full bottom-0 h-40 fixedTransparentGradient"></div>
          </div>
        </div>
      </div>
    </>
  );
}
