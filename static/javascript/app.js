// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Function for buiilding the table
function buildTable(data) {
    //first we need to clear the present data 
    tbody.html("");
    //add a function to loop through each object in data and append table rows
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        //Loop through each object in the array
        Object.values(dataRow).forEach((val) => {
            //Append a row to the HTML Table
            let cell = row.append("td");
            //Add each value from the object into a cell
            cell.text(val);
            }
        );
    });
};

//set up a function to filter the datas in response to button clicks
function handleClick() {
    //create variables to hold dat data, both filtered and unfiltered
    let date = d3.select("#datetime").property("value");
    //set a default filter and save it to a new variable
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);