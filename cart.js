///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => acc + cur.price, 0)


console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let calcFinalPrice = (cartTotal, couponValue, tax) => {
    let finalValue = 0
    cartTotal += (cartTotal * tax)
    finalValue = cartTotal - couponValue
    return finalValue
}

console.log(calcFinalPrice(44, 5, .07))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   For my CardioTraining cart page My customer object needs several properties:
        name -> will need a name to log into our database for any future followup and email/sms marketing sendout. DataType = string
        email -> will send download files to this email so that the user can use our cardio training once payment has been fufilled. DataType = string
        phoneNumber -> will utilize to follow up with user to make sure they are sticking to their plan. DataType = integer/number
        weight -> program intensity will change depending on weight, height, and age. After submitting, our code will use logic to determine the best program for their bodytype. DataType = integer/number
        heightInInches -> program intensity will change depending on weight, height, and age. After submitting, our code will use logic to determine the best program for their bodytype. DataType = integer/number
        age -> program intensity will change depending on weight, height, and age. After submitting, our code will use logic to determine the best program for their bodytype. DataType = integer/number
        previousCardioExperience -> this will determine if the user needs orientation download files that will give more background on history,importance,requirements of cardiotraining. DataType = Boolean

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let cardioTrainingCustomerOne = {
    name: "David Bodine",
    email: "david.bodine@cardiorunner.com",
    phoneNumber: 5650005645,
    weight: 190,
    heightInInches: 75,
    age: 26,
    previousCardioExperience: true,

}

console.log(cardioTrainingCustomerOne)