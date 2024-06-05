                                                                        // Ternary operators (alternate if else statement)

// let age = 18;
// let check = age >= 12 ? "Allowed" : "not allowed" ;
// console.log(check);

// if(age >= 20){
//     console.log("Allowed...");
// }
// else{
//     console.log("not allowed..")
// }

                                                                          // Short Circuit
//in javascript
// && end gate
// || or gate

//  let marks = 45;

// let check = 
// marks >= 80 && marks <= 100 ? "A+1 grade":
// marks >= 70 && marks <= 79 ? "A grade":
// marks >= 61 && marks <= 69?"B grade":
// marks >= 51 && marks <= 59?"C grade":
// marks >= 33 && marks <= 50?"D grade":
// "App failed hogaye";

// console.log(check);

// if (marks >= 80 && marks <= 100){
    //     console.log("A+1 grade")
    // }
// if (marks >= 70 && marks <= 79){
    //     console.log("A grade")
    // }
// if (marks >= 61 && marks <= 69){
    //     console.log("B grade")
    // }
    // if (marks >= 51 && marks <= 59){
        //     console.log("C grade")
        // }
        // if (marks >= 33 && marks <= 50){
            //     console.log("D grade")
            // }
            // else{
//     console.log("App failed hogaye")
// }


                                                                                // True & False value

// let a = 1;
// let a = " ";
// let a = true;
// let a = 0 ;
// let a = undefined;
// let a = null;
// let a = "";
// let a = false;
// console.log(a)





                                                                                    //Destructing of Array
// Simple array
// let arr = ["Karachi","Lahore","islamabad","Peshawar","Quetta"];
// console.log(arr)

// Destructure array
// let [city1 , city2 , city3 , city4 , city5] = ["Karachi","Lahore","islamabad","Peshawar","Quetta"];
// console.log( [city1 , city2 , city3 , city4 , city5])



                                                                                    //Destructing of Object
// Simple Object
// let obj = {
//     name:"Abdullah",
//     class:"2nd year",
//     Rollno:67612
// }
// console.log(obj)

// Destructure Object
// let {name,edu,Rollno} = {
//     name:"Abdullah",
//     edu:"2nd year",
//     Rollno:67612
// }
// let obj =  {name,edu,Rollno}
// console.log(obj);



let obj = {
    name:"Abdullah",
    class:"2nd year",
    Rollno:67612
}
for (var key in obj){
    console.log(Values.obj[key])
}