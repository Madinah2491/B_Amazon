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
    connection.query("SELECT id, product_name, price, stock_quantity from products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
}
var viewInventory = function(){
    connection.query("SELECT * from products WHERE stock_quantity <5", function(err, result, fields){
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

// * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

// * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.


// var addInventory = function(){
//     connection.query("INSERT INTO products (product_name, stock_quantity) VALUES ('answers.addInventory', 'answers.addStockQuantity')", function(err, result, fields){
//         connection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// }

// function manager(){
//     inquirer.prompt({
//         name:"saleItems",
//         type:"rawlist",
//         message:"View items for sale",
//         choices:["yes", "no, view low inventory", "other"]
//     }).then(function(answer){
//         if (answer.saleItems=="yes"){
//             viewProducts();
//         }else { 
//             viewInventory();}
//         // }else {
//         //     inventory();
//         // }
//     })
// });    

// // function inventory(){
// //     inquirer.prompt({
// //         name:"moreInventory",
// //         type:"multi",
// //         message:"Would you like to restock inventory?",
// //         choices:["yes", "no, add new product"]
// //     }).then(function(answer){
// //         if (answer.moreInventory == "yes"){
// //             addInventory();
// //         }else {
// //             new
// //         }
// //     })
// // }
// manager();    

// // * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

// // * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
