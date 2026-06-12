// Menu array with food items
let menu = [
    "Pilau",
    "Ugali Fish",
    "Chicken",
    "Burger",
    "Pizza"
];

// Price mapping using switch statement
function getPrice(food) {
    switch(food) {
        case "Pilau":
            return 300;
        case "Ugali Fish":
            return 400;
        case "Chicken":
            return 600;
        case "Burger":
            return 500;
        case "Pizza":
            return 800;
        default:
            return 0;
    }
}

// Display menu items on page using for loop
function displayMenu() {
    const menuList = document.getElementById("menuList");
    menuList.innerHTML = "";
    
    for (let i = 0; i < menu.length; i++) {
        const listItem = document.createElement("li");
        const price = getPrice(menu[i]);
        listItem.textContent = `${menu[i]} - KES ${price}`;
        menuList.appendChild(listItem);
    }
}

// Populate dropdown with menu items
function populateDropdown() {
    const select = document.getElementById("foodSelect");
    
    for (let i = 0; i < menu.length; i++) {
        const option = document.createElement("option");
        option.value = menu[i];
        option.textContent = menu[i];
        select.appendChild(option);
    }
}

// Check delivery charges using if-else statement
function getDeliveryInfo(price) {
    if (price > 500) {
        return "Free Delivery";
    } else {
        return "Delivery Charge Apply";
    }
}

// Process order
function placeOrder() {
    const customerName = document.getElementById("customerName").value.trim();
    const foodSelected = document.getElementById("foodSelect").value;
    const resultDiv = document.getElementById("orderResult");
    
    // Validation
    if (!customerName) {
        alert("Please enter your name");
        return;
    }
    
    if (!foodSelected) {
        alert("Please select a food item");
        return;
    }
    
    // Get price and delivery info
    const price = getPrice(foodSelected);
    const deliveryInfo = getDeliveryInfo(price);
    
    // Display results
    document.getElementById("displayCustomer").textContent = customerName;
    document.getElementById("displayFood").textContent = foodSelected;
    document.getElementById("displayPrice").textContent = `KES ${price}`;
    document.getElementById("displayDelivery").textContent = deliveryInfo;
    
    resultDiv.classList.remove("hidden");
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Event listeners
document.getElementById("orderBtn").addEventListener("click", placeOrder);

// Allow Enter key to submit
document.getElementById("foodSelect").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        placeOrder();
    }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
    displayMenu();
    populateDropdown();
});
