// from data.js
var tableData = data;

// YOUR CODE HERE!
//var tbody = d3.select('#ufo-table').select('tbody')

// Select tbody using d3. 
var tbody = d3.select("tbody");

// Print data to console to verify connection.
// console.log(tableData);

// Print individual row to console. 
// tableData.forEach(function(ufoData) {
//     console.log(ufoData);
//     var row = tbody.append("tr");
//   });

// append rows to tbody tag in index.html. 
    

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});
function noFilterTable(){
    data.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}
function updateTable(newTableFilter){
    tbody.html("");
    newTableFilter.forEach((record) => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

//Search Date function
var listenClick = d3.select("#filter-btn");
listenClick.on("click", function() {
    var date = d3.select("#datetime").property("value").toLowerCase();
    var city = d3.select("#City").property("value").toLowerCase();
    var state = d3.select("#State").property("value").toLowerCase();
    var country = d3.select("#Country").property("value").toLowerCase();
    var shape = d3.select('#Shape').property("value").toLowerCase();
    var duration = d3.select("#Duration").property("value");
    console.log(date);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);
    console.log(duration);
    var filteredData = data
    if (date == "" && city == "" && state == "" && country == "" && shape == "" && duration == "") {
        noFilterTable();
    };
    if (date != "") {
        filteredData = filteredData.filter(filterfn => filterfn.datetime === date);
    };
    if (city != "") {
        filteredData = filteredData.filter(filterfn => filterfn.city === city);
    };
    if (country != "") {
        filteredData = filteredData.filter(filterfn => filterfn.country === country);
    };
    if (shape != "") {
        filteredData = filteredData.filter(filterfn => filterfn.shape === shape);
    };
    if (duration != "") {
        filteredData = filteredData.filter(filterfn => filterfn.durationMinutes === duration);
    };
    updateTable(filteredData);
});
