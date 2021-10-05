// Creating mixed array
const mixedArray = ['PIZZA', 10, true, 25, false,'Wings'];
//Testing reject method
const noString = [1,2,true,false];

//create arrow function that takes mixedarray
let lowerCaseWords = (Array) => {
    //EMpty array to hold lowercase values
    const elements = []

    // function to find only strings out of main array
    let strings = (Array) =>{
        if(typeof(Array) === 'string')
        return Array;   
    }
    // Call fucntion to find only strings and store it to sringValue
    let stringsValue = Array.filter(strings)

    //promise to see if there is any strings in given array
    let p1 = new Promise(function(resolve,reject){


        if(stringsValue.length > 0)
        {
            //Loop trough possible strings and store lowercase value into empty element array
            for(var i = 0; i <stringsValue.length; i++)
            {
                elements[i]=stringsValue[i].toLowerCase();
            }    
            resolve(elements)
        }
        else
        {
            resolve("No String Value in Given Array")
        }
    })
    //if array has Strings pass their lowercase value, else resolves as No string value in given array
    p1.then(success =>{
        console.log(success)
    }, error => console.log(error))
}
//print method using given array
lowerCaseWords(mixedArray);
lowerCaseWords(noString);
