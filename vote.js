function myfunction(){
    var age,voteable;
    age=number(console.log("age"));
    if(isNaN(age))
    {
        voteable="input is not a number";

    }
    else{
        voteable=(age<18)?"too young":"old enough";

    }
    console.log(voteable);
}
myfunction()
