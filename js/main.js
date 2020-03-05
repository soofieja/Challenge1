var ctx  = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
       labels: ["Monday", "Tuesday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "km traveled per day",
            backgroundColor: 'rgb(31,62,88)',
            borderColor: 'rgb(204,102,102)',
            data: [42.700, 41.980, 45.300, 42.711, 42.711, 43.067, 45.900],
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('chart2').getContext('2d');
	var myPieChart = new Chart(ctx,{
	    type: 'pie',
	    
	    data: {
	        labels: ["Russian pax", "Korean pax ", "Chinese pax","US pax"],
	        datasets: [{
	            label: "Passengers",
	            backgroundColor: [
	          	'rgb(186, 91, 227)',
	            'rgb(40,28,58)' ,
	            'rgb(91, 98, 227)' ,
	           	'rgb(82,183,159)' ,],

	            borderColor:  'rgb(204,102,102)',
	            data: [49, 11, 17,26],
	        }]
    },	

});

var ctx = document.getElementById('chart3').getContext('2d');
	var myBarChart = new Chart(ctx, {
	    type: 'bar',
	     
	      data: {
	        labels: ["Monday", "Tuesday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday"],
	        datasets: [{
	            label: "Minus temperature outside",
	            backgroundColor:'rgb(31,62,88)',
	            borderColor:  'rgb(204,102,102)',
	            data: [273, 266, 259, 264, 273, 269, 266],
	        }]
	    },
});