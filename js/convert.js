// Al Curry - February 2017
// Javascript functions for Lactation Calculator
// isolate age calculation - call it from first submit/convert(0) - can age be global
// make convert function work on 0 - 4 "loc" values
//
var age;
var totalml = 0; 
var totaloz = 0;
var totalmlh = 0; 
var totalozh = 0;
var dt = new Date();
console.log(dt.toLocaleDateString());
console.log(dt.toLocaleTimeString());
document.getElementById("date").value = dt.toLocaleDateString()

function getAge() {
 // datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
     var today = new Date();
        //utput = document.getElementById( 'output' ),
     var dateString = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear().toString().substr(2,2);
     console.log(dateString);
     year = document.getElementById("year").value; 
     month = document.getElementById("month").value; 
     day = document.getElementById("day").value; 

     var fullYear = "20" + year;
     var birthday = new Date(fullYear,month-1,day);
     var age = calcDiff('d', birthday, today);
     console.log('Age in days is ' + age);
     return age;
}

function calcDiff(datepart, fromdate, todate) {  
  datepart = datepart.toLowerCase();  
  var diff = todate - fromdate; 
  var divideBy = { w:604800000, 
                   d:86400000, 
                   h:3600000, 
                   n:60000, 
                   s:1000 };  
  
  return Math.floor( diff/divideBy[datepart]);
}

function convert(loc)
{
   //alert ("Yo");
   //console.log("convertG");
   var grams = document.getElementById("grams" + loc).value;
   console.log(grams);
   if (grams == "") {
   	   console.log("grams is blank");
   	   pounds = document.getElementById("lbs" + loc).value;
   	   ounces = document.getElementById("oz" + loc).value;
   	   grams = (pounds * 453.592) + (ounces * 28.3495);
   	   document.getElementById("grams" + loc).value = grams.toFixed();
   } else {
	   //alert("in convert gram  + g: " + grams);
	   var pounds = Math.floor(grams / 453.592);
	   var remaining_grams = grams - (pounds * 453.592);
       var ounces = remaining_grams / 28.3495;
	   //alert("pounds: " + pounds + " ounces: " + ounces.toFixed(1));
	   console.log(pounds);
	   console.log(ounces);
     var dOz = ounces.toFixed(1);
     if (dOz == 16.0) {
        pounds += 1;
        dOz = "";
     }
	   document.getElementById("lbs" + loc).value = pounds; 
	   document.getElementById("oz" + loc).value = dOz;
    }

    var percent = 0;
    if (loc == 1) {
        var grams0 = document.getElementById("grams0").value;
        if (grams > grams0) {
            document.getElementById("weightmsg").value = "Baby has surpassed birthweight.";
        } else {
            if (grams < grams0) {
                percent = (1 - ( grams / grams0 )) * 100;
                            console.log(percent)
            }
            console.log(percent)
            if (percent < 0.09) {
               document.getElementById("weightmsg").value = "0% weight loss.";
            } else {
               document.getElementById("weightmsg").value = percent.toFixed(1) + "% weight loss.";
            }
        }
        var msg = document.getElementById("weightmsg").value;
        document.getElementById("weightmsgh").value = msg;
    }

     age = getAge();
     console.log("age is " + age);

     document.getElementById("age").value = age;
     document.getElementById("ageh").value = age;
   return true;
}

function transfer( loc )
{
   //alert ("Yo");
   console.log("LOC = " + loc);
   pos2 = loc + 2;
   if (1 == 1) {
     pos = loc + 1; 
     console.log("POS = " + pos);
	   var grams = document.getElementById("grams" + pos).value;
	   var pounds = document.getElementById("lbs" + pos).value;
     var ounces = document.getElementById("oz" + pos).value;
	   if (grams == "" || pounds == "") {
	   	  convert(pos2);
        grams = document.getElementById("grams" + pos).value;
	   }

   }
    console.log("loc=" + loc + " pos =" + pos + " pos2=" + pos2);
   console.log(grams);
   var grams1 = document.getElementById("grams" + pos2).value;
   console.log(grams1);
   if (grams1 == "") {
   	   console.log("grams1 is blank");
   	   pounds = document.getElementById("lbs" + pos2).value;
   	   ounces = document.getElementById("oz" + pos2).value;
   	   grams1 = (pounds * 453.592) + (ounces * 28.3495);
   	   document.getElementById("grams" + pos2).value = grams1.toFixed();
   } else {

      pounds = Math.floor(grams1 / 453.592);
      var remaining_grams = grams1 - (pounds * 453.592);
      ounces = remaining_grams / 28.3495;

	   console.log(pounds);
	   console.log(ounces);
	   document.getElementById("lbs" + pos2).value = pounds;
	   document.getElementById("oz" + pos2).value = ounces.toFixed(1);
    }
   console.log("grams1:" + grams1 + " grams: " + grams);
   var mlt = grams1 - grams;
   document.getElementById("mlt" + loc).value = mlt.toFixed();
   var ozt = mlt * 0.035274;
   document.getElementById("ozt" + loc).value = ozt.toFixed(1);

   console.log("end of transfer, age = ",age);
   totalml = totalml + mlt;
   totaloz = totaloz + ozt;
   totalmlh = totalmlh + mlt;
   totalozh = totalozh + ozt;
   console.log("mlt = " + mlt + " totalml = " + totalml);
   document.getElementById("totaloz").value = totaloz.toFixed(1);
   document.getElementById("totalml").value = totalml.toFixed();   
   document.getElementById("totalozh").value = totaloz.toFixed(1);
   document.getElementById("totalmlh").value = totalml.toFixed(); 
   return true;
}

function clearAll()
{
     //clearFields(-1);
	   clearFields(0);
     clearFields(1);
	   clearFields(2);
     clearFields(3);
	   clearTFields(1);
     clearFields(4);
     clearTFields(2);
     clearFields(5);
     clearTFields(3);
     clearFields(6);
     clearTFields(4);
    
     clearFields(-1);
}
function clearFields( loc )
{
	   //alert("clear");
     if (loc == -1) {
       document.getElementById("bname").value = "";
       document.getElementById("month").value = "";
       document.getElementById("day").value = "";
       document.getElementById("year").value = "";
       document.getElementById("age").value = "";
       document.getElementById("totaloz").value = "";
       document.getElementById("totalml").value = "";
       document.getElementById("totalozh").value = "";
       document.getElementById("totalmlh").value = "";
       totalml = 0; 
       totaloz = 0;
     } else {
   	   document.getElementById("grams" + loc).value = "";
	     document.getElementById("lbs" + loc).value = "";
	     document.getElementById("oz" + loc).value = "";
  	 }	
     if (loc == 1) {
       document.getElementById("weightmsg").value = "";
     }
     if (loc >2 && loc <= 6) {
         clearTFields(loc-2);
     }
}
function clearTFields(loc)
{
   	  
      var oz = document.getElementById("ozt" + loc).value;
      totaloz = totaloz - oz
      var ml = document.getElementById("mlt" + loc).value;
      totalml = totalml - ml;
      console.log(" loc = " + loc + "oz = " + oz + " ml = " + ml);
      console.log("total oz " + totaloz);
      console.log("total ml " + totalml)
      document.getElementById("totaloz").value = totaloz.toFixed(1);
      document.getElementById("totalml").value = totalml.toFixed(0); 
      document.getElementById("totalozh").value = totaloz.toFixed(1);
      document.getElementById("totalmlh").value = totalml.toFixed(0); 
      document.getElementById("ozt" + loc).value = "";
      document.getElementById("mlt" + loc).value = "";

     
}

function getFields() {

    console.log("in getfields");
    alert("in getfield");
    var bname = document.getElementById("bname").value;
    console.log("bname is " + bname);
    alert("bname is " + bname);
    return bname;
}
/*
 function sendEmail() {
    console.log("begin send");
    var link = 'mailto:alcurry98@ygmail
    .com?subject=Message from '+ "&body='Test'";
    window.location.href = link;
    console.log("send completed")

}
*/