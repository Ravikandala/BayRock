$("document").ready(function() {
var party = new Date("July 1, 2022 00:00:00").getTime();
var interval = setInterval(function(){
        var present = new Date().getTime();
        var diff = party - present;
        if(diff > 0){
          var days = leadingZeros(Math.floor(diff/(1000*60*60*24)));
          var hours = leadingZeros(Math.floor((diff%(1000*60*60*24))/(1000*60*60)));
          var minutes = leadingZeros(Math.floor((diff%(1000*60*60))/(1000*60)));
          var seconds = leadingZeros(Math.floor((diff%(1000*60))/(1000)));
          document.getElementById("nCountdown").innerHTML =
                 days +" Days " + hours +" Hours " + minutes + " Minutes and " + seconds + " Seconds";
        }
        else if(diff == 0) {
          document.getElementById('nCountdown').innerHTML = "The Party is Live";
        }
        else {
          clearInterval(interval);
          document.getElementById('nCountdown').innerHTML = "The Party is Over";
        }
},1000);

   function leadingZeros(num){
     var string = "" + num;
     while(string.length<2){
       string = "0" + string;
     }
     return string;
   }

});
    function onClick(){
       var email = document.getElementById('email').value;
       var validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       if(!validate.test(email)){
         $("#register-text").addClass("text-invalid");
         $("#register-text").text("Please enter a valid email address!");
         return false;
       }
       else{
          $("#register-text").removeClass("text-invalid");
         $("#register-text").addClass("text-valid");
         $("#register-text").text("Registered Successfully.Thanks for Registration!");
         document.getElementById("email").value = "";
       }


    }
