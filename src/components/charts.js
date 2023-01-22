import axios from "axios";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";

export const options = {
    series: [{
    name: 'increased',
    data: [{
        x: 1996,
        y: 322
      },
      {
        x: 1997,
        y: 324
      },
      {
        x: 1998,
        y: 329
      },
      {
        x: 1999,
        y: 342
      },
      {
        x: 2000,
        y: 348
      },
      {
        x: 2001,
        y: 334
      },
      {
        x: 2002,
        y: 325
      },
      {
        x: 2003,
        y: 316
      },
      {
        x: 2004,
        y: 318
      },
      {
        x: 2005,
        y: 330
      },
      {
        x: 2006,
        y: 355
      },
      {
        x: 2007,
        y: 366
      },
      {
        x: 2008,
        y: 337
      },
      {
        x: 2009,
        y: 352
      },
      {
        x: 2010,
        y: 377
      },
      {
        x: 2011,
        y: 383
      },
      {
        x: 2012,
        y: 344
      },
      {
        x: 2013,
        y: 366
      },
      {
        x: 2014,
        y: 389
      },
      {
        x: 2015,
        y: 334
      }
    ]
  }, {
    name: 'decreased',
    data: [
      {
        x: 1996,
        y: 162
      },
      {
        x: 1997,
        y: 90
      },
      {
        x: 1998,
        y: 50
      },
      {
        x: 1999,
        y: 77
      },
      {
        x: 2000,
        y: 35
      },
      {
        x: 2001,
        y: -45
      },
      {
        x: 2002,
        y: -88
      },
      {
        x: 2003,
        y: -120
      },
      {
        x: 2004,
        y: -156
      },
      {
        x: 2005,
        y: -123
      },
      {
        x: 2006,
        y: -88
      },
      {
        x: 2007,
        y: -66
      },
      {
        x: 2008,
        y: -45
      },
      {
        x: 2009,
        y: -29
      },
      {
        x: 2010,
        y: -45
      },
      {
        x: 2011,
        y: -88
      },
      {
        x: 2012,
        y: -132
      },
      {
        x: 2013,
        y: -146
      },
      {
        x: 2014,
        y: -169
      },
      {
        x: 2015,
        y: -184
      }
    ]
  }],
    chart: {
    type: 'area',
    height: 350
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  
  title: {
    // text: 'Area with Negative Values',
    align: 'left',
    style: {
      fontSize: '14px'
    }
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
  
    labels: {
      style: {
        colors: '#8e8da4',
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.5
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
    padding: {
      left: 20
    }
  }, colors: ["#43a047", "#ff0000"]
  };


  export const baroptions={
    series: [{
        name: 'Net Profit',
         data: [44, 30, 54, 76, 51, 68, 43, 60, 66]
      }],
      
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              type: "vertical",
              inverseColors: true,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              colorStops: [
                {
                  offset: 0,
                  color: "#e65100",
                  opacity:0.7
                },
                {
                  offset: 100,
                  color: "#0d47a1",
                  
                  opacity: 1,
                },],
            //   stops: [30, 90, 100]
            }
          },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      ,
      colors: ["#0d47a1"]
    
    };
  


export default function ApexChart(){

    //------------------line chart----------------------
     
    // const [options,setOptions]=useState({
    //       chart: {
    //         id: "basic-bar"
    //       }, colors: ["#f44336", "#247BA0"],
    //       xaxis: {
    //         categories: []
    //       },
    //             yaxis: [
    //               {
    //                 axisTicks: {
    //                   show: true,
    //                 },
    //                 axisBorder: {
    //                   show: true,
    //                   color: '#ff0000'
    //                 },
    //                 labels: {
    //                   style: {
    //                     colors: '#ff0000',
    //                   }
    //                 },
    //                 title: {
    //                   text: "Income (lakhs)",
    //                   style: {
    //                     color: '#ff0000',
    //                   }
    //                 },
    //                 tooltip: {
    //                   enabled: true
    //                 }
    //               },
    //               {
    //                 seriesName: 'Income',
    //                 opposite: true,
    //                 axisTicks: {
    //                   show: true,
    //                 },
    //                 axisBorder: {
    //                   show: true,
    //                   color: '#00E396'
    //                 },
    //                 labels: {
    //                   style: {
    //                     colors: '#00E396',
    //                   }
    //                 },
    //                 title: {
    //                   text: "Previous Income (lakhs)",
    //                   style: {
    //                     color: '#00E396',
    //                   }
    //                 },
    //               },
    //               {
    //                 seriesName: 'Age',
    //                 opposite: true,
    //                 axisTicks: {
    //                   show: true,
    //                 },
    //                 axisBorder: {
    //                   show: true,
    //                   color: '#FEB019'
    //                 },
    //                 labels: {
    //                   style: {
    //                     colors: '#FEB019',
    //                   },
    //                 },
    //                 stroke: {
    //                  curve: 'straight'
    //                 },
    //                 title: {
    //                   text: "Age",
    //                   style: {
    //                     color: '#FEB019',
    //                   }
    //                 }
    //               },
    //             ],
    //       stroke: {
    //         curve: 'straight'
    //       },
    //       title: {
    //         text: 'Fundamental Analysis of Employee',
    //         align: 'left'
    //       },
    //       subtitle: {
    //         text: 'Age/Salary Movements',
    //         align: 'left'
    //       }, colors: ["#ff0000", "#43a047","#247BA0"]
    //     })
  
    //     const [series,setSeries]=useState([
    //       {
    //         name: "prev_salary",
    //         type:'bar',
    //         data: [],
    //         color:"#ff0000"
    //       },
    //       {
    //         name: "emp_salary",
    //         type:'bar',
    //         data: [],
    //         color: "#247BA0"
    //       }
    //       // ,
    //       // {
    //       //   name: "emp_age",
    //       //   type:'bar',
    //       //   data: [],
    //       //   color: "#247BA0"
    //       // },
    //   ])

  
  
  //------------------------pie chart------------------------------
  
       
      
      
        
        
  
  //------------------------------getting values---------------------------------
  
      
        }          
