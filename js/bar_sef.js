var ctx = document.getElementById("myChart_sef").getContext('2d');



var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Abia ", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Benue","Borno", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Taraba", "Yobe", "Zamfara"],
        datasets: [{
            label: "Self Inspection for all states",
            borderColor: "#2e86de",
            pointBorderColor: "#2e86de",
            pointBackgroundColor: "#2e86de",
            pointHoverBackgroundColor: "#2e86de",
            pointHoverBorderColor: "#2e86de",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: [ 75,50,75,50,50,50,100,50,0,100,100,75,75,0,75,75,75,75,25,0,100,75,75,50,100,100,75,100,50,0],
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