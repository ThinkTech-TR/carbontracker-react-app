import React, { useState, useEffect} from "react";
import ReactApexChart from 'react-apexcharts'
import './Analyze.css';

import axios from 'axios';


function Analyze({userIdAuth0}) {


      const series =
            [{
                name: 'Diet',
                data: [44, 55, 41, 37, 22, 43, 21]
              }, {
                name: 'Transport',
                data: [53, 32, 33, 52, 13, 43, 32]
              }, {
                name: 'Services',
                data: [12, 17, 11, 9, 15, 11, 20]
              }, {
                name: 'Travel',
                data: [9, 7, 5, 8, 6, 9, 4]
              }, {
                name: 'Housing',
                data: [25, 12, 19, 32, 25, 24, 10]
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
                  categories: ['Lidia', 'Natalie', 'Jake', 'Beckie', 'Heather', 'James', 'Ellie'],
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
                
                }
              };

      const series2 = [14, 23, 21, 17, 15, 10, 12, 17, 21];
      const options2 = {
                  chart: {
                      type: 'polarArea',
                      width: 40,
                  },
                  stroke: {
                      colors: ['#fff']
                  },
                  fill: {
                      opacity: 0.8
                  },
                  
              };

   
    return (
        <div className="analyze-container d-flex flex-row">
        {/* Profile */}
            <div className="profile-container d-none d-lg-block font-lg text-center">
                <div className="avatar"> <img className="avatar-img" src="/images/profile-large.jpg" alt="Avatar" /></div>
                <p className="text-center"><strong>Mark Carby</strong></p>
                <div className="d-flex flex-row justify-content-center">
                    <div className="stats">
                        <h6>Travel </h6>
                        <h6><strong>Up 45%</strong></h6>
                    </div>
                    <div className="stats">
                        <h6>Energy</h6>
                        <h6><strong>Up 50%</strong></h6>
                    </div>
                    <div className="stats">
                        <h6>Diet</h6>
                        <h6><strong>Down 10%</strong></h6>
                    </div>
                </div>
                <div className="text-center text-wrap"><h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</h6></div>
            </div>
        {/* Graphs */}
            <div className="graphs-container">
            <h3 className="text-center font-weight-bold"> Your Carbon Footprint distribution</h3>
            <div >
            <ReactApexChart options={options2} series={series2} type="polarArea" />
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
