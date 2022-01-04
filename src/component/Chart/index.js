import React from "react";
import Chart from "react-apexcharts";

function TChart(props) {
  var options = {
    chart: {
      toolbar: {
        show: false
      },
      foreColor: '#fff',
      zoom: {
        enabled: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    tooltip : {
      enabled: true,
      followCursor: true,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      name: "transaction number",
      categories: Array.from(Array(100).keys()),
    },
   colors: ['#fff'],
  }
      
  var series = [
    {
      name: "Transaction time",
      data: JSON.parse(localStorage.transactionData)
    }
  ]

  console.log(props.state);
  return <Chart type="line" options={options} series={series} height="800" style={{backgroundColor: '#282C34', width:'100%', height:'100%', display:'flex'}} />;
};

export default TChart