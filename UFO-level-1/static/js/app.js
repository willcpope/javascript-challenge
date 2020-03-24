// from data.js
var tableData = data;

function createTable(elements) {
    var tbody = d3.select("tbody");    
    tbody.html("");
    elements.forEach((ufo_data) => {
        var row = tbody.append("tr");
        Object.entries(ufo_data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    createTable(filteredData);

});

createTable(tableData);