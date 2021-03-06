# DepartmentStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

SALES TAXES

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.

The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid.  
 
Write an application that accepts inputs like below and print out put the receipt details for these shopping baskets.  The input & output can be in any format you want: JSON, CSV,etc but do not hard code the input or output.  

INPUT:  
Input 1:  
1 book at 12.49  
1 music CD at 14.99  
1 chocolate bar at 0.85  

Input 2:  
1 imported box of chocolates at 10.00  
1 imported bottle of perfume at 47.50  

Input 3:  
1 imported bottle of perfume at 27.99  
1 bottle of perfume at 18.99  
1 packet of headache pills at 9.75  
1 imported box of chocolates at 11.25  

EXPECTED OUTPUT:  
Output 1:  
1 book : 12.49  
1 music CD: 16.49  
1 chocolate bar: 0.85  
Sales Taxes: 1.50  
Total: 29.83  

Output 2:  
1 imported box of chocolates: 10.50  
1 imported bottle of perfume: 54.65  
Sales Taxes: 7.65  
Total: 65.15  

Output 3:
1 imported bottle of perfume: 32.19  
1 bottle of perfume: 20.89  
1 packet of headache pills: 9.75  
1 imported box of chocolates: 11.85  
Sales Taxes: 6.70  
Total: 74.68  

## How to use the webapp and proofing

Simply start your local server (instructions below).

- You can add products and determine if it should be exempted or not
- You can remove products
- You can hover over the product to check if it was exempted or not

Add all the input values from the test cases above. You will get the correct output result.


Output 1

![Output_1](https://user-images.githubusercontent.com/10455912/81032136-74b20c00-8e43-11ea-9b19-1838a175f9d0.png)


Output 2

![Output_2](https://user-images.githubusercontent.com/10455912/81032122-6a900d80-8e43-11ea-9315-6208c7bc6968.png)


Output 3

![Output_3](https://user-images.githubusercontent.com/10455912/81031891-c0b08100-8e42-11ea-997c-a9443f70f7f1.png)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes and Resources

This project was with Bulma CSS Framework. The link below will provide documentation and style guides:  
https://bulma.io/

To install Bulma:  
npm install bulma

This project's main layout is based on:  
https://github.com/Devstackr/budget-app-angular
