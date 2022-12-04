## ONWUKA ROSARIO (W)
## DIFFERENCES BETWEEN LET, VAR AND CONST

The let, var and const keywords are used for variable declaration in javascript. There are 2 sets of differences in the three of them. We will briefly go through each.

## 1. SCOPE:  
Variables declared with var and const are scoped to the immediate function body.

Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared.Variables declared with the var keyword are subject to hoisting. If we declare a variable (but do not initialize it) at the end of the function, the JavaScript runtime will move it to the top of its scope and, therefore, there will be no complaint by the runtime if we use that variable before being declared.

Variables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block.The let keyword should be used in situations where you want to declare a variable that should be restricted to the block in which it is restricted. Also, variables declared with the let keyword cannot be updated or re-declared. Here is an example of how to use let to declare variables in JavaScript

The scoping principles of const are the same as that of the let keyword. Like let, the variables declared with the const keyword will also have scope restricted to the block in which they are declared.

## 2. REASSIGNMENT: 
Variables declared with the var keyword can be re-declared or updated in the same scope. The variables declared with the let keyword cannot be re-declared.The const keyword follows the same rules as the let keyword. The only difference with const is that const is used to define only constant values in JavaScript programs.const declares a variable with a constant value.
Use the const keyword if the variable that you are declaring should not be allowed to be reassigned in the future.




