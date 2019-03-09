var ctx = document.getElementById("myChart_ret").getContext('2d');



var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Abia ", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Benue","Borno", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Taraba", "Yobe", "Zamfara"],
        datasets: [{
            label: "Returned Products for all states",
            borderColor: "#00d2d3",
            pointBorderColor: "#00d2d3",
            pointBackgroundColor: "#00d2d3",
            pointHoverBackgroundColor: "#00d2d3",
            pointHoverBorderColor: "#00d2d3",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [ 100,50,100,50,100,50,100,100,75,100,100,100,75,0,100,100,100,100,100,25,100,100,75,75,100,100,50,75,75,0],
        }]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
}],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
},
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "normal",
                    fontSize: 10,
                }
            }]
        }
    }
});