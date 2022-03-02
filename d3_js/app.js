// overwrite the text to HTML tag
// d3.select("p")
// 	.text("Hello World!");


// to add HTML tag with text
// d3.select("body")
// 	.append("p")
// 	.text("Hi, what's up!")
// 	.style("color", "red");


// add an svg tag
// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", "500")
// 				.attr("height", "500");


// add a circle
// var circle = canvas.append("circle")
// 					.attr("cx", "250")
// 					.attr("cy", "250")
// 					.attr("r", "50")
// 					.attr("fill", "red");

// add a rectangle
// var rectangle = canvas.append("rect")
// 						.attr("width", "100")
// 						.attr("height", "50")
// 						.attr("fill", "pink");

// add a line
// var line = canvas.append("line")
// 					.attr("x1", "0")
// 					.attr("y1", "100")
// 					.attr("x2", "400")
// 					.attr("y2", "400")
// 					.attr("stroke", "green")
// 					.attr("stroke-width", "10");


// bar chart
// var dataArray = [20, 40, 50];

// var bar_graph = canvas.selectAll("rect")
// 						.data(dataArray)
// 						.enter()
// 						.append("rect")
// 						.attr("width", function(d) { return d * 10; })
// 						.attr("height", "50")
// 						.attr("y", function(d, i) { return i * 100; });


// bar chart + scales
// var dataArray = [20, 40, 50, 60];
// var width = 500;
// var height = 500;

// var widthScale = d3.scaleLinear()
// 					.domain([0, d3.max(dataArray)])
// 					.range([0, width]);

// var colorScale = d3.scaleLinear()
// 					.domain([0, d3.max(dataArray)])
// 					.range(["red", "blue"]);

// add an svg tag
// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", width)
// 				.attr("height", height);

// var bar_graph = canvas.selectAll("rect")
// 						.data(dataArray)
// 						.enter()
// 						.append("rect")
// 						.attr("width", function(d) { return widthScale(d); })
// 						.attr("height", "50")
// 						.attr("y", function(d, i) { return i * 100; })
// 						.attr("fill", function(d) { return colorScale(d); });


// groups and axis
// var dataArray = [20, 40, 50, 60];
// var width = 500;
// var height = 500;

// var widthScale = d3.scaleLinear()
// 					.domain([0, d3.max(dataArray)])
// 					.range([0, width]);

// var colorScale = d3.scaleLinear()
// 					.domain([0, d3.max(dataArray)])
// 					.range(["red", "blue"]);
					
// var axis = d3.axisBottom()
// 				.ticks(5)
// 				.scale(widthScale);

// add an svg tag
// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", width)
// 				.attr("height", height)
// 				.append("g")
// 				.attr("transform", "translate(20, 0)");

// var bar_graph = canvas.selectAll("rect")
// 						.data(dataArray)
// 						.enter()
// 						.append("rect")
// 						.attr("width", function(d) { return widthScale(d); })
// 						.attr("height", "50")
// 						.attr("y", function(d, i) { return i * 100; })
// 						.attr("fill", function(d) { return colorScale(d); });

// canvas.append("g")
// 		.attr("transform", "translate(0, 400)")
// 		.call(axis);


// enter (DOM elements < data elements)
// exit (DOM elements > data elements)
// update (DOM elements = data elements)

// enter
// var data = [10, 20];

// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 500)
// 				.attr("height", 500);

// var circle = canvas.append("circle")
// 					.attr("cx", 50)
// 					.attr("cy", 100)
// 					.attr("r", 25);

// var circles = canvas.selectAll("circle")
// 					.data(data)
// 					.attr("fill", "red")
// 					.enter()
// 					.append("circle")
// 					.attr("cx", 50)
// 					.attr("cy", 50)
// 					.attr("r", 25)
// 					.attr("fill", "green");

// update
// var data = [10];

// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 500)
// 				.attr("height", 500);

// var circle = canvas.append("circle")
// 					.attr("cx", 50)
// 					.attr("cy", 100)
// 					.attr("r", 25);

// var circles = canvas.selectAll("circle")
// 					.data(data)
// 					.attr("fill", "red")
// 					.enter()
// 					.append("circle")
// 					.attr("cx", 50)
// 					.attr("cy", 50)
// 					.attr("r", 25)
// 					.attr("fill", "green");

// exit
// var data = [10];

// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 500)
// 				.attr("height", 500);

// var circle1 = canvas.append("circle")
// 					.attr("cx", 50)
// 					.attr("cy", 100)
// 					.attr("r", 25);

// var circle2 = canvas.append("circle")
// 					.attr("cx", 50)
// 					.attr("cy", 200)
// 					.attr("r", 25);

// var circles = canvas.selectAll("circle")
// 					.data(data)
// 					.attr("fill", "green")
// 					.exit()
// 					.attr("fill", "blue");


// transitions
// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 500)
// 				.attr("height", 500);

// var circle = canvas.append("circle")
// 					.attr("cx", 50)
// 					.attr("cy", 50)
// 					.attr("r", 25);

// circle.transition()
// 		.duration(1500)
// 		.delay(1000)
// 		.attr("cx", "150")
// 		.on("start", function() { 
// 			d3.select(this)
// 				.attr("fill", "purple"); 
// 		})
// 		.transition()
// 		.attr("cy", "100")
// 		.transition()
// 		.attr("cx", "50")
// 		.on("end", function() { 
// 			d3.select(this)
// 				.attr("fill", "red"); 
// 		});


// loading external data
// d3.json("mydata.json", function(data) {
// 	var canvas = d3.select("body")
// 					.append("svg")
// 					.attr("width", 500)
// 					.attr("height", 500);

// 	canvas.selectAll("rect")
// 			.data(data)
// 			.enter()
// 				.append("rect")
// 				.attr("width", function(d) { return d.age * 10; })
// 				.attr("height", 48)
// 				.attr("y", function(d, i) { return i * 50; })
// 				.attr("fill", "blue");

// 	canvas.selectAll("rect")
// 			.data(data)
// 			.enter()
// 				.append("text")
// 				.text(function(d) { return d.name; })
// 				.attr("y", function(d, i) { return i * 50 + 24; })
// 				.attr("fill", "white")
// })

// d3.csv("mydata.csv", function(data) {
// 	var canvas = d3.select("body")
// 					.append("svg")
// 					.attr("width", 500)
// 					.attr("height", 500);

// 	canvas.selectAll("rect")
// 			.data(data)
// 			.enter()
// 				.append("rect")
// 				.attr("width", function(d) { return d.age * 10; })
// 				.attr("height", 48)
// 				.attr("y", function(d, i) { return i * 50; })
// 				.attr("fill", "blue");

// 	canvas.selectAll("rect")
// 			.data(data)
// 			.enter()
// 				.append("text")
// 				.text(function(d) { return d.name; })
// 				.attr("y", function(d, i) { return i * 50 + 24; })
// 				.attr("fill", "white")
// })


// paths
// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 500)
// 				.attr("height", 500);

// var data = [
// 				{x: 10, y: 20},
// 				{x: 40, y: 60},
// 				{x: 50, y: 70}
// ];

// var line = d3.line()
// 				.x(function(d) { return d.x; })
// 				.y(function(d) { return d.y; });

// var group = canvas.append("g")
// 					.attr("transform", "translate(100, 100)");

// group.selectAll("path")
// 		.data([data])
// 		.enter()
// 		.append("path")
// 		.attr("d", line)
// 		.attr("fill", "none")
// 		.attr("stroke", "black")
// 		.attr("stroke-width", "10");


// arcs
// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 500)
// 				.attr("height", 500);

// var group = canvas.append("g")
// 					.attr("transform", "translate(100, 100)");

// var r = 100;
// var p = Math.PI * 2;

// var arcs = d3.arc()
// 				.innerRadius(r - 20)
// 				.outerRadius(r)
// 				.startAngle(0)
// 				.endAngle(p);

// group.append("path")
// 		.attr("d", arcs);


// // donut graph
// var data = [10, 50, 80];
// var r = 300;

// var color = d3.scaleOrdinal()
// 				.range(["red", "blue", "orange"])

// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 1500)
// 				.attr("height", 1500);

// var group = canvas.append("g")
// 					.attr("transform", "translate(300, 300)");

// var arc = d3.arc()
// 				.innerRadius(200)
// 				.outerRadius(r);

// var pie = d3.pie()
// 			.value((d) => {return d;});

// var arcs = group.selectAll(".arc")
// 				.data(pie(data))
// 				.enter()
// 				.append("g")
// 				.attr("class", "arc");

// arcs.append("path")
// 	.attr("d", arc)
// 	.attr("fill", (d) => { return color(d.data); });

// arcs.append("text")
// 	.attr("transform", (d) => { 
// 		return "translate(" + arc.centroid(d) + ")"; 
// 	})
// 	.text((d) => { return d.data; })
// 	.attr("text-anchor", "miiddle")
// 	.attr("font-size", "1.5em");


// pie graph
// var data = [10, 50, 80];
// var r = 300;

// var color = d3.scaleOrdinal()
// 				.range(["red", "blue", "orange"])

// var canvas = d3.select("body")
// 				.append("svg")
// 				.attr("width", 1500)
// 				.attr("height", 1500);

// var group = canvas.append("g")
// 					.attr("transform", "translate(300, 300)");

// var arc = d3.arc()
// 				.innerRadius(0)
// 				.outerRadius(r);

// var pie = d3.pie()
// 			.value((d) => {return d;});

// var arcs = group.selectAll(".arc")
// 				.data(pie(data))
// 				.enter()
// 				.append("g")
// 				.attr("class", "arc");

// arcs.append("path")
// 	.attr("d", arc)
// 	.attr("fill", (d) => { return color(d.data); });

// arcs.append("text")
// 	.attr("transform", (d) => { 
// 		return "translate(" + arc.centroid(d) + ")"; 
// 	})
// 	.text((d) => { return d.data; })
// 	.attr("text-anchor", "miiddle")
// 	.attr("font-size", "1.5em");


