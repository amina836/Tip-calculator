var myBill=document.getElementById("bill"),

     myServer=document.getElementById("service"),

     myPeople=document.getElementById("people"),

     myBtn=document.getElementById("btn"),

     myOut=document.getElementById("out");

     mySup=document.getElementById("sup");
     
     myBtn.onclick=function(){
      if ((myBill.value && myPeople.value) ===""||(myBill.value && myPeople.value) ==="0"||(myBill.value && myPeople.value)< 1){ //if function
        myOut.innerHTML ="you must input a number";
        mySup.style.display="none";
      }
      else{
       myOut.value=(myBill.value*myServer.value)/myPeople.value;
       mySup.style.display="inline-block";
    }
  }

     // all input is positive number only.
     function isInputNumber(evt){
      var ch =String.fromCharCode(evt.which);
      if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
      }
    }