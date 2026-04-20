const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        prince: 2999
    },
     {
        itemName: "py course",
        prince: 999
    },
     {
        itemName: "mobile dev course",
        prince: 5999
    },
     {
        itemName: "data science course",
        prince: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.prince, 0)

console.log(priceToPay);

