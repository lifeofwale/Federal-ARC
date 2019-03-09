var ctx = document.getElementById("myChart_qua").getContext('2d');



var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Abia ", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Benue","Borno", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Taraba", "Yobe", "Zamfara"],
        datasets: [{
            label: "Quality Control for all states",
            borderColor: "#34495e",
            pointBorderColor: "#34495e",
            pointBackgroundColor: "#34495e",
            pointHoverBackgroundColor: "#34495e",
            pointHoverBorderColor: "#34495e",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [15,39,70,48,48,36,55,85,58,73,48,61,58,30,88,39,67,48,52,36,73,52,48,30,52,52,45,52,21,36],
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