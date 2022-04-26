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
        // let priceAbove = 52;
        if (weight > 0 && weight < 200) {
            displayPrice = 99;
        } else if (weight < 500 && weight >= 200) {
            displayPrice = 199;
            discountPrice = 99;
        } else if (weight < 1000 && weight >= 500) {
            displayPrice = 359;
            discountPrice = 179;
        } else if (weight < 2000 && weight >= 1000) {
            displayPrice = 459;
            discountPrice = 229;
        } else if (weight < 3000 && weight >= 2000) {
            displayPrice = 599;
            discountPrice = 179;
        } else if (weight < 4000 && weight >= 3000) {
            displayPrice = 739;
        } else if (weight < 5000 && weight >= 4000) {
            displayPrice = 879;
        } else if (weight < 6000 && weight >= 5000) {
            displayPrice = 1019;
        } else if (weight < 7000 && weight >= 6000) {
            displayPrice = 1159;
        } else if (weight < 8000 && weight >= 7000) {
            displayPrice = 1299;
        } else if (weight < 9000 && weight >= 8000) {
            displayPrice = 1439;
        } else if (weight < 10000 && weight >= 9000) {
            displayPrice = 1599;
        } else if (weight < 11000 && weight >= 10000) {
            displayPrice = 1739;
        } else if (weight < 12000 && weight >= 11000) {
            displayPrice = 1879;
        } else if (weight < 13000 && weight >= 12000) {
            displayPrice = 2019;
        } else if (weight < 14000 && weight >= 13000) {
            displayPrice = 2159;
        } else if (weight < 15000 && weight >= 14000) {
            displayPrice = 2299;
        } else if (weight > 15000) {
            displayPrice = " For the best deal contact on  9650708046 or support@shigr.com";

        }


        document.getElementById("myDIV").style.display = "block";
        document.getElementById("cardONE").style.display = "none";
        let hamara_msgg = document.getElementById("hamara-msgg");
        let hamara1_msgg = document.getElementById("hamara1-msgg");
        hamara1_msgg.style.color = "red"
        // hamara_msgg.style.fontSize = "30px"
        if(typeof displayPrice !== "string"){
            hamara_msgg.innerHTML = "₹ " + displayPrice;
            hamara1_msgg.innerHTML = "₹ " + Math.round((displayPrice / 100) * 50).toFixed(2);
            hamara_msgg.classList.add("pre_price_strike");
            hamara_msgg.classList.remove("new_deal_contact");
            $("#hamara1-msgg").show();
            $('[for="exampleInputEmail1"]').show();
        }else{
            hamara_msgg.classList.remove("pre_price_strike");
            hamara_msgg.classList.add("new_deal_contact");
            hamara_msgg.innerHTML = displayPrice;
            $("#hamara1-msgg").hide();
            $('[for="exampleInputEmail1"]').hide();

        }
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
            displayPrice = 1999;
        } else if (weight < 500 && weight >= 200) {
            displayPrice = 2999;
        } else if (weight < 1000 && weight >= 500) {
            displayPrice = 3999
        } else if (weight < 1500 && weight >= 1000) {
            displayPrice = 4999;
        } else if (weight < 2000 && weight >= 1500) {
            displayPrice = 5999;
        } else if (weight < 3000 && weight >= 2000) {
            displayPrice = 6999;
        } else if (weight < 4000 && weight >= 3000) {
            displayPrice = 7999;
        } else if (weight < 5000 && weight >= 4000) {
            displayPrice = 8999;
        } else if (weight < 6000 && weight >= 5000) {
            displayPrice = 10399;
        } else if (weight < 7000 && weight >= 6000) {
            displayPrice = 11599;
        } else if (weight < 8000 && weight >= 7000) {
            displayPrice = 12799;
        } else if (weight < 9000 && weight >= 8000) {
            displayPrice = 13999;
        } else if (weight < 10000 && weight >= 9000) {
            displayPrice = 15199;
        } else if (weight < 11000 && weight >= 10000) {
            displayPrice = 16399;
        } else if (weight < 12000 && weight >= 11000) {
            displayPrice = 17599;
        } else if (weight < 13000 && weight >= 12000) {
            displayPrice = 18799;
        } else if (weight < 14000 && weight >= 13000) {
            displayPrice = 19999;
        } else if (weight <= 15000 && weight >= 14000) {
            displayPrice = 21199;
        } else if (weight > 15000) {
            displayPrice =
                " For the best deal contact on  9650708046 or support@shigr.com";
        }

        document.getElementById("myDIVV").style.display = "block";
        document.getElementById("cardTWO").style.display = "none";
        let hamara_msgg1 = document.getElementById("hamara-msg1");
        let hamara2_msgg = document.getElementById("hamara2-msgg");
        hamara2_msgg.style.color = "red"
        // // hamara_msgg1.style.fontSize = "30px"
        // hamara_msgg1.innerHTML = "₹ " + displayPrice;
        // hamara2_msgg.innerHTML = "₹ " + Math.round((displayPrice / 100) * 50).toFixed(2);
       

          // hamara_msgg1.style.fontSize = "30px"
        if(typeof displayPrice !== "string"){
            hamara_msgg1.innerHTML = "₹ " + displayPrice;
            hamara2_msgg.innerHTML = "₹ " + Math.round((displayPrice / 100) * 50).toFixed(2);
            hamara_msgg1.classList.add("pre_price_strike");
            hamara_msgg1.classList.remove("new_deal_contact");
            $("#hamara2-msgg").show();
            $('[for="exampleInputEmail1"]').show();
        }else{
            hamara_msgg1.classList.remove("pre_price_strike");
            hamara_msgg1.classList.add("new_deal_contact");
            hamara_msgg1.innerHTML = displayPrice;
            $('[for="exampleInputEmail1"]').hide();
            $("#hamara2-msgg").hide();

        }

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