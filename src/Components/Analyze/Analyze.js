import React, { useState, useEffect } from "react";
import ReactApexChart from 'react-apexcharts'
import './Analyze.css';

import axios from 'axios';


function Analyze({ isUserSaved, userIdAuth0, userData }) {

  const setUserName = () => {
    const userName = userData.name;
    return userName;
  };

  const [uptodateCarbon, setUptodateCarbon] = useState([]);
  const [callUseEffect, setCallUseEffect] = useState(false);

  useEffect(() => {
    if (userIdAuth0 && isUserSaved === true) {
      const carbonValues = {};
      const sDate = new Date().toISOString().slice(0, 10);
      const graphInfoUpdate = (info) => {
        const finishtDate = new Date().toISOString().slice(0, 10);
        const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10);
        const data = info.filter(info => (new Date(info.trackingDate).toISOString().slice(0, 10) <= finishtDate && new Date(info.trackingDate).toISOString().slice(0, 10) >= startDate));

        data.forEach(e => {
          const itemCarbon = e.trackingItemName;
          if (carbonValues[itemCarbon] === undefined) {
            carbonValues[itemCarbon] = e.emission;
          } else {
            carbonValues[itemCarbon] += e.emission;
          }
        });
        setUptodateCarbon(carbonValues);
      }
      //Initiate a get request to API endpoint

      axios.get(process.env.REACT_APP_AWS+`user/${userIdAuth0}/forDate/${sDate}/trackingcarbonformonth`)
        //If successful, update the carbonInfoForMonth state
        .then(
          response => {
            graphInfoUpdate(response.data);
            setCallUseEffect(false);
          })
        //If error, log out the error
        .catch(error => console.log(error));
    }
  }, [userIdAuth0, isUserSaved, callUseEffect]);


  const series =
    [{
      name: 'Diet',
      data: [44, 55, 41, 37, 22]
    }, {
      name: 'Transport',
      data: [53, 32, 33, 52, 13]
    }, {
      name: 'Services',
      data: [12, 17, 11, 9, 15]
    }, {
      name: 'Travel',
      data: [9, 7, 5, 8, 6]
    }, {
      name: 'Housing',
      data: [25, 12, 19, 32]
    }];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    legend: {
      show: false
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Lidia', 'Natalie', 'Jake', 'Beckie', 'James'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },

  };

  const series2 = Object.getOwnPropertyNames(uptodateCarbon).map(i => { return Math.round(uptodateCarbon[i]); });
  const travel = Math.round((uptodateCarbon["plane"] || 0) + (uptodateCarbon["bus"] || 0) + (uptodateCarbon["car"] || 0) + (uptodateCarbon["Car"] || 0) + (uptodateCarbon["train"] || 0));
  const energy = Math.round(uptodateCarbon["House"]) || 0;
  const diet = Math.round(uptodateCarbon["Diet"]) || 0;

  const options2 = {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
    labels: Object.getOwnPropertyNames(uptodateCarbon),

  };

  return (
    <div className="analyze-container d-flex flex-row">
      {/* Profile */}
      <div className="profile-container d-none d-lg-block font-lg text-center">
        <div className="avatar"> <img className="avatar-img" src="/images/profile-large.jpg" alt="Avatar" /></div>
        {userData && <p className="text-center"><strong>{setUserName()}</strong></p>}
        <div className="d-flex flex-row justify-content-center">
          <div className="stats">
            <h6>Travel</h6>
            <h6><strong>{travel}</strong></h6>
          </div>
          <div className="stats">
            <h6>Energy</h6>
            <h6><strong>{energy}</strong></h6>
          </div>
          <div className="stats">
            <h6>Diet</h6>
            <h6><strong> {diet}</strong></h6>
          </div>
        </div>
        <div className="text-center text-wrap"><h6>Your carbon footprint is getting lower! That's the way to go!</h6></div>
      </div>
      {/* Graphs */}
      <div className="graphs-container">
        <h3 className="text-center font-weight-bold"> Your Carbon Footprint distribution</h3>
        <div >
          <ReactApexChart options={options2} series={series2} type="polarArea" height={550} />
        </div>
      </div>
      {/* Leaderboards */}
      <div className="leaders-container d-none d-lg-block font-lg text-center">
        <h3 className="text-center font-weight-bold"> Top 5 reducers</h3>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>


        <h3 className="text-center font-weight-bold"> Challenges</h3>
        <h5>January Reduce Challenge</h5>
        <h5>Team IDBS 2021 Carbon Footprint Challenge</h5>

      </div>
    </div>
  );
}

export default Analyze;
