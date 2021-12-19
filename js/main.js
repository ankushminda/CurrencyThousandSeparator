
// Function to separate the number in thousand format.
function thousandSeparator() {
    const x = document.getElementById("number").value;
    console.log(x);
    validateForm(x); //validating form before processing.
    const y = Intl.NumberFormat('en-IN').format(x);
    const z = Intl.NumberFormat('en-US').format(x);
    document.getElementById("conversionIN").innerHTML = "₹ "+y;
    document.getElementById("conversionUS").innerHTML = "$ "+z;
    document.getElementById('words').innerHTML = "In Words: "+inWords(x);
    document.getElementById("button").style.display = "block";
}


//Function to validate form input value if it's a valid number.
function validateForm(x) {
    // Get the value of the input field with id="numb"
    //let x = document.getElementById("number").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 0 ) {
      text = "Only Numbers Please !!";
      x = x.replace(/[^\d.-]/g, '');
      document.getElementById("number").value = x;
      exit()
    } else {
      
    }
    
}


//Function to convert a numeric value to words.
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'Maximum limit reached, only 9 digits allowed.';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

//Jquery Function for button Toggle
$(document).ready(function(){
  $("#button").click(function(){
      $("#conversionIN").slideToggle("100");
      $("#conversionUS").slideToggle("100");
  });
});