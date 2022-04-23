function nationalFormSubmit() {
  let form = document.getElementById("nationalForm");
  let msg = document.getElementById("nationalMessage");

  // let category = form.cat.value;
  // let pincode = form.pincode.value
  let pincode = document.getElementById("pincode-2").value; // aaded new line
  let weight = document.getElementById("weight-2").value; // aaded new line

  if (pincode == null || pincode == "") {
    alert("Pincode can't be blank");
    return false;
  } else if (weight == null || weight == "") {
    alert("Weight can't be blank");
    return false;
  } else {
    let displayPrice = 0;
    if (weight > 0 && weight < 200) {
      displayPrice = weight * 0.5;
    } else if (weight < 500 && weight >= 200) {
      displayPrice = (weight * 199) / 500;
    } else if (weight < 1000 && weight >= 500) {
      displayPrice = (weight * 359) / 1000;
    } else if (weight < 2000 && weight >= 1000) {
      displayPrice = (weight * 459) / 2000;
    } else if (weight < 3000 && weight >= 2000) {
      displayPrice = (weight * 599) / 3000;
    } else if (weight < 4000 && weight >= 3000) {
      displayPrice = (weight * 739) / 4000;
    } else if (weight < 5000 && weight >= 4000) {
      displayPrice = (weight * 879) / 5000;
    } else if (weight < 6000 && weight >= 5000) {
      displayPrice = (weight * 1019) / 6000;
    } else if (weight < 7000 && weight >= 6000) {
      displayPrice = (weight * 1159) / 7000;
    } else if (weight < 8000 && weight >= 7000) {
      displayPrice = (weight * 1299) / 8000;
    } else if (weight < 9000 && weight >= 8000) {
      displayPrice = (weight * 1439) / 9000;
    } else if (weight < 10000 && weight >= 9000) {
      displayPrice = (weight * 1599) / 10000;
    } else if (weight < 11000 && weight >= 10000) {
      displayPrice = (weight * 1739) / 11000;
    } else if (weight < 12000 && weight >= 11000) {
      displayPrice = (weight * 1879) / 12000;
    } else if (weight < 13000 && weight >= 12000) {
      displayPrice = (weight * 2019) / 13000;
    } else if (weight < 14000 && weight >= 13000) {
      displayPrice = (weight * 2159) / 14000;
    } else if (weight < 15000 && weight >= 14000) {
      displayPrice = (weight * 2299) / 15000;
    } else if (weight > 15000) {
      displayPrice =
        " For the best deal contact on  9650708046 or support@shigr.com";
    }

    document.getElementById("myDIV").style.display = "block";
    document.getElementById("cardONE").style.display = "none";
    let hamara_msgg = document.getElementById("hamara-msgg");
    hamara_msgg.innerHTML = "₹ " + displayPrice.toFixed(2);
    return true;
  }
}

function closeNational() {
  document.getElementById("cardONE").style.display = "block";
  document.getElementById("myDIV").style.display = "none";
  document.getElementById("nationalForm").reset();
}



function internationalFormSubmit() {
  let form = document.getElementById("internationalForm");
  let msg = document.getElementById("internationalMessage");

  let pincode = document.getElementById("pincode-1").value; // aaded new line
  let weight = document.getElementById("weight-1").value;

  if (pincode == null || pincode == "") {
    alert("Pincode can't be blank");
    return false;
  } else if (weight == null || weight == "") {
    alert("Weight can't be blank");
    return false;
  } else {
    let displayPrice = 0;
    if (weight > 0 && weight < 200) {
      displayPrice = weight * 10;
    } else if (weight < 500 && weight >= 200) {
      displayPrice = weight * 6;
    } else if (weight < 1000 && weight >= 500) {
      displayPrice = weight * 4;
    } else if (weight < 1500 && weight >= 1000) {
      displayPrice = weight * 3.33;
    } else if (weight < 2000 && weight >= 1500) {
      displayPrice = weight * 3;
    } else if (weight < 3000 && weight >= 2000) {
      displayPrice = weight * 2.33;
    } else if (weight < 4000 && weight >= 3000) {
      displayPrice = weight * 2;
    } else if (weight < 5000 && weight >= 4000) {
      displayPrice = weight * 1.8;
    } else if (weight < 6000 && weight >= 5000) {
      displayPrice = weight * 1.73;
    } else if (weight < 7000 && weight >= 6000) {
      displayPrice = weight * 1.657;
    } else if (weight < 8000 && weight >= 7000) {
      displayPrice = weight * 1.599875;
    } else if (weight < 9000 && weight >= 8000) {
      displayPrice = (weight * 13999) / 9000;
    } else if (weight < 10000 && weight >= 9000) {
      displayPrice = (weight * 15199) / 10000;
    } else if (weight < 11000 && weight >= 10000) {
      displayPrice = (weight * 16399) / 11000;
    } else if (weight < 12000 && weight >= 11000) {
      displayPrice = (weight * 17599) / 12000;
    } else if (weight < 13000 && weight >= 12000) {
      displayPrice = (weight * 18799) / 13000;
    } else if (weight < 14000 && weight >= 13000) {
      displayPrice = (weight * 19999) / 14000;
    } else if (weight <= 15000 && weight >= 14000) {
      displayPrice = (weight * 21199) / 15000;
    } else if (weight > 15000) {
      displayPrice =
        " For the best deal contact on  9650708046 or support@shigr.com";
    }
   
    document.getElementById("myDIVV").style.display = "block";
    document.getElementById("cardTWO").style.display = "none";
    let hamara_msgg = document.getElementById("hamara-msg1");
    hamara_msgg.innerHTML = "₹ " + displayPrice.toFixed(2);
    return true;

  }
}

function myFunction() {
  var x = document.getElementById("myDIV");
  // var y = document.getElementById("cardONE");
  x.style.display = "none";
  // y.style.display="block"

  if (x.style.display === "none") {
    x.style.display = "block";
    // y.style.display="none"
  } else {
    x.style.display = "none";
    // y.style.display="block"
  }
}

function myyFunction() {
  var x = document.getElementById("myDIVV");
  // var y = document.getElementById("cardTWO");
  x.style.display = "none";

  if (x.style.display === "none") {
    x.style.display = "block";
    // y.style.display="none"
  } else {
    x.style.display = "none";
    // y.style.display="block"
  }
}

function closeINational() {
  document.getElementById("cardTWO").style.display = "block";
  document.getElementById("myDIVV").style.display = "none";
  document.getElementById("internationalForm").reset();
}

// document.getElementById("get-quote-first").addEventListener("click", myFunction);
// document.getElementById("get-quote-second").addEventListener("click", myyFunction);
