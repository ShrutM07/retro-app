function addToBill() {
    var selectedPrice = document.getElementById("price").value;
    var selectedDish = document.getElementById("dish").value;
    var selectedTable = document.getElementById("table").value;

    var order = {
        price: selectedPrice,
        dish: selectedDish,
        table: selectedTable
    };

    // Add the order to the server's database using Post request
    axios.post("https://crudcrud.com/api/13f9391d524c43be8fda4ee040e947c5/restroApp", order)
        .then((response) => {
            console.log(response);
            displayOrder(order);
        })
        .catch((err) => {
            console.error(err);
        });
}
  //Retrive the data from server using Get request
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/13f9391d524c43be8fda4ee040e947c5/restroApp")
    .then((response)=> {
        console.log(response)

        for(var i=0; i<response.data.length; i++){
            displayOrder(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error)
    })
})
//To display order
function displayOrder(order) {
    var orderDetails = document.createElement("div");
    orderDetails.innerHTML = "<p><b><h2>" + order.table + "</h2></b></p>" +
                             "Price:" + order.price + "Dish:" + order.dish;
    document.body.appendChild(orderDetails);

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete order";
    deleteButton.addEventListener("click", function() {
        deleteOrder(order._id); // Assuming _id is the unique identifier of the order
        orderDetails.remove(); // Remove the order details from the screen when deleted
    });
    
    // Append delete button to order details
    orderDetails.appendChild(deleteButton);

    document.body.appendChild(orderDetails);
}

function deleteOrder(orderId) {
    // Send a Delete request to the server's API endpoint with the order ID
    axios.delete("https://crudcrud.com/api/13f9391d524c43be8fda4ee040e947c5/restroApp/" + orderId)
        .then((response) => {
            console.log("Order deleted successfully:", response);
        })
        .catch((error) => {
            console.error("Error deleting order:", error);
        });
}


