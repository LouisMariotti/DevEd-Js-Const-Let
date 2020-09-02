/* To create a variable we use the keybord 'Let' then we need 
to give it a name here it's 'inbox' then we need to give it a value
here we have for example 100 emails*/

let inbox = 100; // semi columns are very important

// Another example

let user = "Ed"; /* we just want to say that we want to create a box 
which will contain our user and here our user value is 'Ed' */

// Now we can show what our variables contained

alert(inbox); // it will display what's inside our varibale, here it's '100'

// More example

let inbox1 = "Hello";
let inbox2 = " to myself";

let message = inbox1 + inbox2;

alert(message); // here the alert will say 'Hello to myself'

// with let we can also re-asign a value

let display = 100;
display = 200; 

alert(display); /* Here it will display 'display' variable and it will say 200
cuz we re-asigned a value to the display variable */

// We can display a variable in the console of our browser */

let test = "Bonjour";

console.log(test);

/* There is another type of declaring a variable which is const, it work 
the same way as let but there is difference... (big suspense) with const 
we cannot define a variable without giving a value to it. Also with const
we cannot change the value of the variable once we've declared it. Rather 
prefere at the beggining to use const either than let. */

/* There are some rules to respect when we're declaring variables, we cannot 
put a number as first caratere of our variable's name, there are also some
keywords that we cannot use. Its also recommand to use camelCase when we name
our variables */

// Javascript operators

// Basic operator

let operator = 10;

console.log(operator + 10); // it's gonna do 10 + 10

// There is a simplier way of doing this, see the example below

let simplier = 21;
simplier += 10;
console.log(simplier);

// We can do a lot of calculation by using sign such as +, -, *, **, /, %.

inbox ++; // We had 1 to whatever is on the inbox
inbox --; // Same but we remove 1
