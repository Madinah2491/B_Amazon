CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
id INT NOT NULL Auto_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR (50) NULL,
price decimal (50, 2),
stock_quantity INT (50)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Curl moiusture cream", "Hair Care", 15.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Denman brush", "Hair Care", 11.98, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Gel", "Hair Care", 3.98, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Cleansing Shampoo", "Hair Care", 8.98, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Nourishing Conditioner", "Hair Care", 13.15, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Fabuloso", "Cleaning", 4.99, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Clorox Bleach", "Cleaning", 5.97, 42);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Chloe's Pop's", "Frozen Desserts", 3.99, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Enlightened ice cream", "Frozen Desserts", 5.99, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Bird's Eye Broccoli Florets", "Frozen Vegetables", 3.49, 22);
