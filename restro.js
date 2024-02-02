function addToBill() {
    // Get selected values
    var selectedPrice = document.getElementById("text").value;
    var selectedDish = document.getElementById("dish").value;
    var selectedTable = document.getElementById("table").value;

    // Retrieve existing orders from local storage
    //var orders = JSON.parse(localStorage.getItem("orders")) || { table1: [], table2: [], table3: [] };

    // Add the new order to the specific section based on the selected table
    orders[selectedTable.toLowerCase()].push({ dish: selectedDish, price: selectedPrice });

    axios.post("https://crudcrud.com/api/682c7aee1209448287f050b7ac819b6b/Restaurant App")
    .then((response) =>{
        showNewUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })

    // Update the local storage with the modified orders
    //localStorage.setItem("orders", JSON.stringify(orders));

    // Display the order in the specific section based on the selected table
    var orderList;
    if (selectedTable === "table1") {
        orderList = document.getElementById("orderListTable1");
    } else if (selectedTable === "table2") {
        orderList = document.getElementById("orderListTable2");
    } else if (selectedTable === "table3") {
        orderList = document.getElementById("orderListTable3");
    }

    var listItem = document.createElement("li");
    listItem.textContent = `${selectedDish} - ${selectedPrice}`;
    orderList.appendChild(listItem);

}