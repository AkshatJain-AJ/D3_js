const canvas = d3.select(".canvas");

// add an svg element
// const svg = canvas.append("svg")
// 					.attr("width", "500")
// 					.attr("height", "250");

// svg - circle
// svg.append("circle")
// 	.attr("cx", "100")
// 	.attr("cy", "100")
// 	.attr("r", "50")
// 	.attr("fill", "blue");

// svg - rectangle
// svg.append("rect")
// 	.attr("width", "100")
// 	.attr("height", "100")
// 	.attr("x", "120")
// 	.attr("y", "0")
// 	.attr("fill", "green")
// 	.attr("rx", "15")
// 	.attr("ry", "15");

// svg - line
// svg.append("line")
// 	.attr("x1", "129")
// 	.attr("x2", "45")
// 	.attr("y1", "100")
// 	.attr("y2", "46")
// 	.attr("stroke", "pink");

// svg - text
// svg.append("text")
// 	.text("Hello!")
// 	.attr("x", "110")
// 	.attr("y", "80")
// 	.attr("fill", "gray")
// 	.attr("font-size", "23")
// 	.attr("text-anchor", "start")
// 	.attr("stroke", "green");

// svg.append("text")
// 	.text("There!")
// 	.attr("x", "110")
// 	.attr("y", "30")
// 	.attr("fill", "gray")
// 	.attr("font-size", "12")
// 	.attr("text-anchor", "middle");

// svg.append("text")
// 	.text("James!")
// 	.attr("x", "110")
// 	.attr("y", "50")
// 	.attr("fill", "gray")
// 	.attr("font-size", "12")
// 	.attr("text-anchor", "end");


var dataArray = [
	{
		width: 25,
		height: 4,
		fill: "pink"
	},
	{
		width: 25,
		height: 14,
		fill: "purple"
	},
	{
		width: 25,
		height: 44,
		fill: "orange"
	},
	{
		width: 25,
		height: 124,
		fill: "green"
	},
	{
		width: 25,
		height: 12,
		fill: "grey"
	},
	{
		width: 25,
		height: 32,
		fill: "red"
	}
];

// add an svg element
const svg = canvas.append("svg")
					.attr("width", "600")
					.attr("height", "600");

// bar graph
const rect = svg.selectAll("rect")

rect.data(dataArray)
	.enter()
	.append("rect")
	.attr("fill", (d) => d.fill)
	.attr("width", "24")
	.attr("height", function (d) { return d.height * 2; })
	.attr("x", function (d, i) { return i * 25; })
	.attr("y", function (d, i) { return 100 - (d.height * 2); });


// json data - api
d3.json('https://jsonplaceholder.typicode.com/todos/1')
	.then(data => {
		console.log(data);
		// code here to actually draw elements on screen
	})

// json data - file
// d3.json('text.json')
// 	.then(data => {
// 		console.log(data);
// 		// code here to actually draw elements on screen
// 	})