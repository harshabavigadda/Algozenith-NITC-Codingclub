import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare as arrow } from "@fortawesome/free-solid-svg-icons";
import { faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import url from "../url.js";

function Opportunities() {
  const [opportunitiesdata, setOpportunitiesData] = useState([]);

  useEffect(() => {
    axios
      .get(url+"/opportunities")
      .then((response) => {
        setOpportunitiesData(response.data.reverse());
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="mt-2 mx-6 grid grid-cols-1 md:mt-4 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {opportunitiesdata.map((item, index) => (
          <div key={index} className="bg-violet-100/50  rounded-xl ">
            <div className="flex ml-4">
              <img
                src={
                  item.logo ||
                  "https://icons.veryicon.com/png/o/business/oa-attendance-icon/company-27.png"
                }
                className="mt-3 h-12 w-15"
              />
              <div className="mt-3 ml-5">
                <p className="mb-1 font-medium text-lg">
                  <b>{item.companyname}</b>
                </p>
                <p className="bg-blue-500 rounded-xl text-white  text-sm text-center px-2">
                  {item.jobtype === "fulltime" || item.jobtype === "FTE"
                    ? "Fulltime"
                    : item.jobtype === "internship" || item.jobtype === "intern"
                    ? "Internship"
                    : "NA"}
                </p>
              </div>
            </div>
            <hr className="m-3 border-slate-300"></hr>
            <div className="mt-0 ml-4 ">
              <h2 className="text-base">
                <b>{item.jobrole}</b>
              </h2>
              <div>
                <div className="flex text-base">
                  <FontAwesomeIcon icon={faLocationDot} className="mt-1 mr-4" />
                  <p>{item.location}</p>
                </div>
                <div className="flex text-base">
                  <FontAwesomeIcon
                    icon={faBuildingUser}
                    className="mr-2 mt-1"
                  />
                  <p>
                    {item.jobtype === "fulltime" || item.jobtype === "FTE"
                      ? "Fulltime"
                      : item.jobtype === "internship" ||
                        item.jobtype === "intern"
                      ? "Internship"
                      : "NA"}
                  </p>
                </div>
                <div className="flex text-base">
                  <FontAwesomeIcon icon={faSackDollar} className="mt-1 mr-3" />
                  <p>{item.salary}</p>
                </div>
                <div className="flex flex-wrap text-base">
                  <p>
                    <b>Batch:</b>
                  </p>
                  {item.batch.split(",").length > 4 ? (
                    <div className="ml-1 bg-gray-400 px-2 hover:bg-slate-700 text-white text-sm rounded-xl">
                      {item.batch.split(",")[0]} -{" "}
                      {item.batch.split(",")[item.batch.split(",").length - 1]}
                    </div>
                  ) : (
                    item.batch.split(",").map((element, index) => (
                      <div
                        key={index}
                        className="ml-1 bg-gray-400 px-2 hover:bg-slate-700 text-sm text-white rounded-xl"
                      >
                        {element}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <a
                href={item.apply}
                className="mx-5 shadow-lg mb-5 bg-green-600 hover:bg-green-700 text-white text-base py-1 px-3 rounded-lg"
              >
                Apply{" "}
                {<FontAwesomeIcon icon={arrow} className="h-2.5 mb-0.5 ml-1" />}
              </a>
            </div>
            {}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;
