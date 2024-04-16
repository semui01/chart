 
  d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/coffee-flavors.csv', function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) {return row[key]})
}

  var data = [{
        type: "sunburst",
        maxdepth: 2,
        ids: unpack(rows, 'ids'),
        labels: unpack(rows, 'labels'),
        parents: unpack(rows, 'parents'),
        textposition: 'inside',
        insidetextorientation: 'radial'
  }]

  var layout = {margin: {l: 0, r: 0, b: 0, t:0}}

  Plotly.newPlot('myDiv', data, layout)
})

 
let exp = "Math.cos(x)";

// Generate values
const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 0.2) {
  yValues.push(eval(exp));
  xValues.push(x);
}

// Display using Plotly
const data1 = [{x:xValues, y:yValues, mode:"markers"}];
const layout1 = {title: "y = " + exp};
Plotly.newPlot("myPlot1", data1, layout1);
 

 
const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
const data = [{
  x:xArray,
  y:yArray,
  mode:"markers"
}];

// Define Layout
const layout = {
  xaxis: {range: [40, 160], title: "Square Meters"},
  yaxis: {range: [5, 16], title: "Price in Millions"},  
  title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);
 