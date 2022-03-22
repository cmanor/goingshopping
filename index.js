let list = ["pop tarts", "ramen", "noodles", "chips", "salsa", "coffee"];
list.push("fruit loops");
list.splice(5,1, "fair trade coffee");
list.splice(3,2, "rice", "beans");
let cart =[]
function cartTransferLast(list)
{
    let thing = list.pop();
    cart.push(thing);
}
function cartTransferFirst(list)
{
    let thing2 = list.shift();
    cart.push(thing2);
}
cartTransferLast(list);
cartTransferFirst(list);
while(list.length >0)
{
    cartTransferLast(list);
}
cart.sort();
cart.reverse();
console.log(list);
console.log(cart);
console.log(cart.toString());