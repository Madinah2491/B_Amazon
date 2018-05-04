// * List a set of menu options:
var inquirer= require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Maddough2018!',
  database: "bamazondb"

});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});


var viewProducts= function(){
    connection.query("SELECT * from products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
}
var viewInventory = function(){
    connection.query("SELECT stock_quantity <5 from products", function(err, result, fields){
        if (err) throw err;
        console.log(result);
    })
}

function manager(){
    inquirer.prompt({
        name:"saleItems",//: displayProducts ,
        type:"rawlist",
        message:"View items for sale",
        choices:["yes", "no, view low inventory"]
    }).then(function(answer){
        if (answer.saleItems=="yes"){
            viewProducts();
        }else { 
            viewInventory();
        }
    })
};    
manager();    

//   * View Products for Sale
//   * View Low Inventory
  
//   * Add to Inventory
  
//   * Add New Product
// INSERT INTO products (product_name, department_name, price, stock_quantity)

// * If a manager selects `View Products for Sale`: the item IDs, names, prices, and quantities.

// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

// * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

// * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
