console.log("Writing code using Conditional Statements ,Switch-Case ,Ternary ");

let m = Number(prompt("Enter your marks"));
switch (true)
 {
    case m<=95 && m>=85:
        console.log("Marks are " +m+ " and grade is A+");
    break;
    case m<=85 && m>=65:
        console.log("Marks are " +m+ " and grade is A");
    break;
    case m<=65 && m>=55:
        console.log("Marks are " +m+ " and grade is B");
    break;
    case m<=55 && m>=45:
        console.log("Marks are " +m+ " and grade is C");
    break;
    case m<=45 && m>=35:
        console.log(`Marks are ${m} and grade is D`);
    break;
    default :
         console.log("Marks are " +m+ " and you are FAIL");
     break;
}

// Using Ternary Operator
let result=(m<=95 && m>=85)?`Marks are  ${m} and grade is A+`:
           (m<=85 && m>=65)?`Marks are ${m} and grade is A`:
           (m<=65 && m>=55)?`Marks are  ${m} and grade is C`:
           (m<=55 && m>=45)?`Marks are  ${m} and grade is D`:
           (m<=45 && m>=35)?`Marks are  ${m} and grade is E`:
           `Marks are  ${m} and grade is FAIL`;
console.log(result);



