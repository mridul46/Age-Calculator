function calculateAge() {
    var birthDate=document.getElementById("birthday").value;
    // Convert birthDate to a Date object
    var birthDateObj = new Date(birthDate);
    
    // Get current date
    var currentDate = new Date();
    
    // Calculate difference in milliseconds
    var timeDifference = currentDate.getTime() - birthDateObj.getTime();
    
    // Convert difference to years, months, and days
    var years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    var days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    
    // return { years: years, months: months, days: days };
   if(!birthDate){
      alert("Enter your date of birth");
   }
   else{
    document.getElementById("result").innerHTML="<p> years: "+years+"months: "+months+"days: "+days+"</p>"
   }
}
