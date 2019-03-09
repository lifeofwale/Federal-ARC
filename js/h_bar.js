// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'horizontalBar',
    data: {
      labels: ["Abia", "Anambra", "Ebonyi", "Enugu"],
      datasets: [
        {
         
          backgroundColor: ["#6dd3de", "#6dd3de","#6dd3de","#6dd3de","#6dd3de"],
          data: [47,66,50,78]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        // text: ''
      },
      scales: {
        yAxes: [{
            ticks: {
                display: true
            },gridLines: {
                display: false,
                
                },
           }],
        xAxes: [{
                ticks: {
                    display: false
                },gridLines: {
                    display: false,
                    
                    },
               }]
             }
    }
});