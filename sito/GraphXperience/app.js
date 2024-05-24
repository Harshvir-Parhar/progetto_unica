function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        colors.push(getRandomColor());
    }
    return colors;
}
function updateChart() {
    const chartTitle = document.getElementById('chartTitle').value;
    const chartType = document.getElementById('chartType').value;
    const labelsInput = document.getElementById('labelsInput').value;
    const dataInput = document.getElementById('dataInput').value;
    const valore = document.getElementById('valore').value;

    const myLabels = labelsInput.split(',').map(label => label.trim());
    const myData = dataInput.split(',').map(data => parseInt(data.trim(), 10));

    const myCanvas = document.getElementById("myCanvas").getContext('2d');
    if (window.myChart) {
        window.myChart.destroy();
    }

    const backgroundColors = generateRandomColors(myData.length);

    window.myChart = new Chart(myCanvas, {
        type: chartType,
        data: {
            labels: myLabels,
            datasets: [{
                label: valore,
                data: myData,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors,
                borderWidth: 1,
                hoverBorderWidth: 3,
                hoverBorderColor: '#fff',
                fill: true,
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: '#fff' 
                    }
                },
                y: {
                    ticks: {
                        color: '#fff' 
                    }
                }
            },
            title: {
                display: true,
                text: chartTitle,
                fontSize: 25 
            }
        }
        
    });
}
