import React from "react";
import moment from "moment";
import { logEntry } from "./Api";
import ScrollToTop from "./ScrollToTop";
export default function Show() {
  const [data, setData] = React.useState([]);

  const getEntries = async () => {
    const logEntries = await logEntry();
    //console.log(logEntries);
    setData(logEntries);
  };

  React.useEffect(() => {
    getEntries();
  }, []);

  const dataList = data.reduce((acc, data) => {
    acc[data._id] = {
      createdAt: moment(data.createdAt),
      name: data.name,
      author: data.author,
      description: data.description
    };
    return acc;
  }, {});
  const sortedByStartDate = Object.keys(dataList);

  sortedByStartDate.sort(
    (a, b) => dataList[b].createdAt - dataList[a].createdAt
  );

  return (
    <div>
      {sortedByStartDate.map((task, index) => {
        return (
          <React.Fragment key={index}>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">
                      Topic: {dataList[task].name}
                    </span>
                    <span className="card-title" style={{ fontSize: "20px" }}>
                      Author: {dataList[task].author}
                    </span>
                    <p>{dataList[task].description}</p>
                  </div>
                  <div className="card-action">
                    Published at: {dataList[task].createdAt.calendar()}
                  </div>
                </div>
              </div>
            </div>
            <ScrollToTop />
          </React.Fragment>
        );
      })}
    </div>
  );
}
