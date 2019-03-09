var ctx = document.getElementById("myChart_nw").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [ "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi",  "Zamfara"],
        datasets: [{
            // label: 'false',
            data: [40, 85, 60, 75, 52, 50, 40, 92, 39, 90, 75, 75, 65, 55, 70, 62, 61, 55, 70, 57, 77, 61, 63, 59, 52, 62, 51, 73, 53, 40],
            backgroundColor: [
               
                '#6592c6',
                '#d89a65',
                '#6592c6',
                '#6592c6',
                '#6592c6',
          
                '#cc6161'


            ],
            borderColor: [
                '#6592c6',
                '#d89a65',
                '#6592c6',
                '#6592c6',
                '#6592c6',
          
                '#cc6161'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
display: false
},
        scales: {
            yAxes: [{
                
                ticks: {
                    beginAtZero:true,
                    min: 0,
                   max: 100,
                   callback: function(value){return value+ "%"}
                    
                }
            }],xAxes: [{

                ticks: {
                    fontSize: 10,
                    
                },
gridLines: {
display: false,

},
}]
        }
    }
});