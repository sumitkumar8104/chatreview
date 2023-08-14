import React from "react";
import "./Task.css";
import Records from "./Data";
import Props from "./SecondData.json";

function Task() {
  return (
    <div className="container">
      <div className="main">
        <div className="tophead">
          <div className="topheadleft">
            <h4>WED</h4>
            <p>Jul</p>
          </div>
          <div className="topheadright">
            <p>30</p>
          </div>
        </div>

        <div className="task">
          <div className="taskleft">
            {Records.map((record) => {
              return (
                <>
                  <p>{record.date}</p>
                </>
              );
            })}
          </div>
          <div className="taskright">
            {/* task-data */}

            {Records.map((record) => {
              return (
                <>
                  <span className={record.imagebg}>
                    <img src={record.img} alt="" />
                  </span>
                  <span className={record.class}>{record.task}</span>

                  <div className="profile">
                    <img src={record.userimg} alt="" />
                    <span>{record.username}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="topheadsecond">
          <div className="topheadleftsecond">
            <h4>THU</h4>
            <p>Jul</p>
          </div>
          <div className="topheadrightsecond">
            <p>29</p>
          </div>
        </div>

        <div className="task">
          <div className="taskleft taskleftsecond">
            {Props.map((props) => {
              return (
                <>
                  <p>{props.date}</p>
                </>
              );
            })}
          </div>
          <div className="taskrightsecond">
            {/* task-data */}
            {Props.map((props) => {
              return (
                <>
                  <span className={props.imagebg}>
                    <img src={props.img} alt="" />
                  </span>
                  <span className="noactive">{props.task}</span>
                  <div className="profile">
                    <img src={props.userimg  } alt="" />
                    <span>{props.username}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
