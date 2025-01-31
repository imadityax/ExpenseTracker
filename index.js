// Chart.js Example: Payments per Day (Sunday - Saturday)
const ctx = document.getElementById('canvas3d').getContext('2d');

const paymentData = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
        label: 'Payments',
        data: [500, 600, 450, 700, 800, 650, 750],
        backgroundColor: 'rgba(10, 102, 194, 0.7)',
        borderColor: '#0A66C2',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(10, 102, 194, 1)',
        hoverBorderColor: '#16437E'
    }]
};

const config = {
    type: 'bar',
    data: paymentData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    weight: 'bold',
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    },
};

const chart = new Chart(ctx, config);

