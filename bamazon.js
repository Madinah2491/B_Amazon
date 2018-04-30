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

  console.log('connected as id ' + connection.threadId);
});

function displayProducts(){
    connection.query("SELECT * from products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    startPrompt()
      });
};

function startPrompt(){
    inquirer.prompt([

        {
          type: "input",
          name: "productId",
          message: "Which product would you like to purchase?"
        },{
            type: "input",
            name: "quantity",
            message: "How many?"
          }
      ]).then(function(answers) {
        console.log(answers)

        connection.query("SELECT * from products WHERE id=" + answers.productId, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            if (result[0].stock_quantity > answers.quantity){
                console.log("Okay thank you for your order")
            } else {console.log("Oh no it looks like we don't have enough in stock for this purchase.")}
          });
      })
}
displayProducts();