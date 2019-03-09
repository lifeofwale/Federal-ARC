var ctx = document.getElementById("myChart_staff").getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Abia ", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Benue","Borno", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Taraba", "Yobe", "Zamfara"],
        datasets: [{
            label: "Warehouse staffing for all states",
            borderColor: "#2ecc71",
            pointBorderColor: "#2ecc71",
            pointBackgroundColor: "#2ecc71",
            pointHoverBackgroundColor: "#2ecc71",
            pointHoverBorderColor: "#2ecc71",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [32, 61, 55, 55, 58, 45, 42, 74, 16, 94, 68, 61, 45, 35, 71, 65, 74, 74, 42, 65, 77, 65, 58, 52, 61, 58, 61, 61, 48, 26],
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