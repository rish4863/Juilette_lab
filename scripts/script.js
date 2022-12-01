// java code for getting output
$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#sendName").click(function () {
     

  $("#greetingOutput").text("Hello " + $("#fname").val() +" "+ $("#lname").val() +" Your email address  and your birthdate are: "+ $ ("#emailaddress").val()+  " "+ $("#dateofbirth").val()  + " Today's date and time is: "+ $("#datetime").val() + " "+$("#location").val() +
" "+ $("#company").val()); 



     $("#noSpaces").blur(function () {
      let inputVal = $(this).val();
      let strSpace = " ";
      let spaceCount = inputVal.split(" ").length - 1;

     console.log(spaceCount);
      if (spaceCount === 0) {
        $(this).next().text("all good");
      } else if (spaceCount > 0) {
        $(this).next().text("no spaces allowed in User Name");
      }
    });  
    });

  $("#btn").on("click", () => {
    console.log("here");
    let selectedSize;
    console.log("val" + selectedSize);
    if ($("input:radio[name='registration']").is(":checked")) {
      selectedSize = $("input[name='registration']:checked").val();
      // show the output:
    }

// using the dependent input in relation to level and the radio button 

 str1 = "hotel";
 str2= "conference";
 str3="hotel and conference";
 str4 = selectedSize;
if (str1 == str4) {
  greeting = "You are registerd for the hotel!";
  document.getElementById("demo").innerText = greeting;
} else  if (str2== str4) {
  greeting = "You are registerd for the conference!";
  document.getElementById("demo").innerText = greeting;
} else if (str3==str4){ 
 greeting = "You are registerd for the hotel and the conference!"
  document.getElementById("demo").innerText = greeting;
}

  });
});
