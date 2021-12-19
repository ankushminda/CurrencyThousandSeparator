function thousandSeparator() {
    const x = document.getElementById("number").value;
    console.log(x);
    validateForm(x); //validating form before processing.
    const y = Intl.NumberFormat('en-IN').format(x);
    const z = Intl.NumberFormat('en-US').format(x);
    document.getElementById("conversionIN").innerHTML = "₹ "+y;
    document.getElementById("conversionUS").innerHTML = "$ "+z;
    document.getElementById("button").style.display = "block";
}


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