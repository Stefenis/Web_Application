function ddlselect()
{
    var d=document.getElementById("ddselect").value;
    
    document.getElementById("display").innerHTML="You selected :"+d;
}
function Click(){
    if(document.getElementById("ddselect").value=='Add'){

        var val1 =parseFloat( document.getElementById("input1").value);
        var val2 =parseFloat( document.getElementById("input2").value);
        var val3 = parseFloat( document.getElementById("input3").value);

        var ans= val1+val2+val3;
        document.getElementById("Txt").innerHTML= ans;
    }
     if(document.getElementById("ddselect").value=='Sub'){
        var val4=document.getElementById("input1").value;
        var val5 =document.getElementById("input2").value;
        var val6=document.getElementById("input3").value;

        var ans2=val4-val5-val6;
        document.getElementById("Txt").innerHTML= ans2;

    }
     if(document.getElementById("ddselect").value=='Mul'){
        var val7=document.getElementById("input1").value;
        var val8 =document.getElementById("input2").value;
        var val9=document.getElementById("input3").value;

        var ans3=val7*val8*val9;
        document.getElementById("Txt").innerHTML= ans3;

    }
     if(document.getElementById("ddselect").value=='Div'){
        
        var val10=document.getElementById("input1").value;
        var val11 =document.getElementById("input2").value;
         
        if(val11==0 || val10==0){
            alert("You can not divide by Zero ");
            
           
        }else{
        var ans4=val10/val11;
        document.getElementById("Txt").innerHTML= ans4;
    }
    }

}
function Del(){
    document.getElementById("Txt").innerHTML ="0";
    document.getElementById("input1").value=0;
    document.getElementById("input2").value=0;
    document.getElementById("input3").value=0;
    document.getElementById("input4").value=0;
}