console.log("We are going to take a value through the user and check weather the number is even or odd");
let num =Number(prompt("Enter any number"));
function evenodd()
{
    console.log(num);
    if (num % 2==0)
    {
        let res=prompt("User",'Entered number is '+ num+' and the number is even.');
        //let res =Number(console.log('Entered number is '+ num+' and the number is even.'));
         return res;
    }
    else
    {
        let res=prompt("User",'Entered number is '+ num+' and the number is odd.');

       //let res=Number(console.log('Entered number is '+ num+' and the number is odd.'));
       return res;
    }
}
let result=evenodd();
console.log(result);