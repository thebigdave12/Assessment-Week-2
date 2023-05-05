///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/
console.log('Problem 1:')

let pizza = {
    name: '3 Cheese Deep Dish',
    price: 22,
    category: 'Entree',
    popularity: 3,
    rating: 95,
    tags: ['Kid-friendly', 'Vegitarian', 'Serves 8'],
}

console.log(pizza)

console.log('---------')

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/
console.log('Problem 2a:')
console.log(pizza.popularity)

console.log('---------')

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log('Problem 2b:')
console.log(pizza.tags[1])

console.log('---------')


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

console.log('Problem 2c:')

let {price} = pizza

console.log(price)


console.log('---------')


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE

console.log('Problem 2d:')

let {category} = pizza

console.log(category)


console.log('---------')


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/


console.log('Problem 3:')


let foodArr = [{name: 'Chicken Wings', 'price': 15, category: 'Appetizer', popularity: 1, rating: 99, tags: ['Spicy', 'Messy', 'Caloric']}, 
{name: 'Shrimp Salad', 'price': 17, category: 'Appetizer', popularity: 7, rating: 77, tags: ['Seafood', 'Healthy', 'Simple']}, 
{name: 'Ribs', price: 28, category: 'Entree', popularity: 2, rating: 88, tags: ['Smoky', 'Savory', 'Meaty']}, 
{name: 'Pasta', price: 16, category: 'Entree', popularity: 10, rating: 60, tags: ['Simple', 'Carbs']}, 
{name: 'Curry Pizza', price: 18, category: 'Entree', popularity: 8, rating: 70, tags: ['Indian', 'Spicy', 'Vegitarian']}]

console.log(foodArr)
console.log('--------')

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

console.log('Problem 4:')

const filteredFood = foodArr.filter(element => element.tags.includes('Spicy'))

console.log(filteredFood)
console.log('--------')

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little more flexible than just filtering for one value. 
    We want to be able to filter for food that has above a certain rating, below a certain price, or any other combo.

    Write a function called `filterByProperty` that takes in three arguments: `property`, 'number`, and `type. 

    The property will be a string (rating, popularity, or price)

    The number will be the number that you want to compare against 

    The type should be 'above' or 'below' to indicate whether you want to get foods with values that are above or below the given number for the given property

    Inside the function, create a variable to hold a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

console.log('Problem 5:')

// not sure if I did this correctly as it is a lot of lines of code, but it functions so cest la vie 

const filterbyProperty = (property, number, type) => {
    let filteredArr = []
    if (property === 'price'){
    filteredArr = foodArr.filter((elem) => {
        if (type === 'above'){
            return elem.price > number
        }  else if (type === 'below'){
            return elem.price < number
        }
    })
} else if (property === 'popularity'){
    filteredArr = foodArr.filter((elem) => {
        if (type === 'above'){
            return elem.popularity > number
        }  else if (type === 'below'){
            return elem.popularity < number
        }
    })
} else if (property === 'rating'){
    filteredArr = foodArr.filter((elem) => {
        if (type === 'above'){
            return elem.rating > number
        }  else if (type === 'below'){
            return elem.rating < number
        }
    })
}


   return filteredArr
}





/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/
console.log(filterbyProperty('price', 5, 'above'))
console.log(filterbyProperty('price', 5, 'below'))

console.log(filterbyProperty('popularity', 5, 'above'))
console.log(filterbyProperty('popularity', 5, 'below'))

console.log(filterbyProperty('rating', 85, 'above'))
console.log(filterbyProperty('rating', 85, 'below'))