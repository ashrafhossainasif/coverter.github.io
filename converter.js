function convert(){
    let currency1=document.getElementById("currencies");
    let value1=currency1.options[currency1.selectedIndex].value;
    let input=document.getElementById("input");
    let currency2=document.getElementById("currencies2");
    let value2=currency2.options[currency2.selectedIndex].value;
    var base;
    var mul;
    let output=document.getElementById("output");
    if(value1=="taka"){
        base=1.0;
    }
    else if(value1=="usd"){
        base=84.0;
    }
    else{
        console.log(value1);
        base=1.15;
    }
    if(value2=="taka"){
        mul=1.0;
    }
    else if(value2=="usd"){
        mul=84.0;
    }
    else{
        console.log(value2);
        mul=1.15;
    }
    let result=(input.value/mul)*base;
    output.value=result; 
}
