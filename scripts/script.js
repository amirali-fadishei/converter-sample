
//////////بخش تبدیل واحد///////////

// تبدیل طول

//متغیر مورد نیاز
var input1 = document.getElementById('input1');
var result1 = document.getElementById('result1');
var inputType1 = document.getElementById('inputType1');
var resultType1 = document.getElementById('resultType1');
var resultType1Value, inputType1Value;

//با فشار دادن کلید محاسبات انجام شود
input1.addEventListener("keyup", myResult);
inputType1.addEventListener("change", myResult);
resultType1.addEventListener("change", myResult);

inputType1Value = inputType1.value;
resultType1Value = resultType1.value;

function myResult() {
    inputType1Value = inputType1.value;
    resultType1Value = resultType1.value;

    ///تبدیل واحد ها

    if (inputType1Value === "meter" && resultType1Value === "kilometer") {
        result1.value = Number(input1.value) * 0.001;
    } else if (inputType1Value === "meter" && resultType1Value === "centimeter") {
        result1.value = Number(input1.value) * 100;
    } else if (inputType1Value === "meter" && resultType1Value === "meter") {
        result1.value = input1.value;
    }

    if (inputType1Value === "kilometer" && resultType1Value === "meter") {
        result1.value = Number(input1.value) * 1000;
    } else if (inputType1Value === "kilometer" && resultType1Value === "centimeter") {
        result1.value = Number(input1.value) * 100000;
    } else if (inputType1Value === "kilometer" && resultType1Value === "kilometer") {
        result1.value = input1.value;
    }

    if (inputType1Value === "centimeter" && resultType1Value === "meter") {
        result1.value = Number(input1.value) * 0.01;
    } else if (inputType1Value === "centimeter" && resultType1Value === "kilometer") {
        result1.value = Number(input1.value) * 0.00001;
    } else if (inputType1Value === "centimeter" && resultType1Value === "centimeter") {
        result1.value = input1.value;
    }
}
// تبدیل جرم

//متغیرهای مور نیاز
var input2 = document.getElementById('input2');
var result2 = document.getElementById('result2');
var inputType2 = document.getElementById('inputType2');
var resultType2 = document.getElementById('resultType2');
var resultType2Value, inputType2Value;

input2.addEventListener("keyup", myResult2);
inputType2.addEventListener("change", myResult2);
resultType2.addEventListener("change", myResult2);

inputType2Value = inputType2.value;
resultType2Value = resultType2.value;

function myResult2() {

    inputType2Value = inputType2.value;
    resultType2Value = resultType2.value;

    if (inputType2Value === "gram" && resultType2Value === "kilogram") {
        result2.value = Number(input2.value) * 0.001;
    } else if (inputType2Value === "gram" && resultType2Value === "ton") {
        result2.value = Number(input2.value) * 0.000001;
    } else if (inputType2Value === "gram" && resultType2Value === "gram") {
        result2.value = input2.value;
    }

    if (inputType2Value === "kilogram" && resultType2Value === "gram") {
        result2.value = Number(input2.value) * 1000;
    } else if (inputType2Value === "kilogram" && resultType2Value === "ton") {
        result2.value = Number(input2.value) * 0.001;
    } else if (inputType2Value === "kilogram" && resultType2Value === "kilogram") {
        result2.value = input2.value;
    }

    if (inputType2Value === "ton" && resultType2Value === "gram") {
        result2.value = Number(input2.value) * 1000000;
    } else if (inputType2Value === "ton" && resultType2Value === "kilogram") {
        result2.value = Number(input2.value) * 1000;
    } else if (inputType2Value === "ton" && resultType2Value === "ton") {
        result2.value = input2.value;
    }
}
// تبدیل زمان
var input3 = document.getElementById('input3');
var result3 = document.getElementById('result3');
var inputType3 = document.getElementById('inputType3');
var resultType3 = document.getElementById('resultType3');
var resultType3Value, inputType3Value;

input3.addEventListener("keyup", myResult3);
inputType3.addEventListener("change", myResult3);
resultType3.addEventListener("change", myResult3);

inputType3Value = inputType3.value;
resultType3Value = resultType3.value;

function myResult3() {

    inputType3Value = inputType3.value;
    resultType3Value = resultType3.value;

    if (inputType3Value === "second" && resultType3Value === "minute") {
        result3.value = Number(input3.value) / 60;
    } else if (inputType3Value === "second" && resultType3Value === "hour") {
        result3.value = Number(input3.value) / 3600;
    } else if (inputType3Value === "second" && resultType3Value === "second") {
        result3.value = input3.value;
    }

    if (inputType3Value === "minute" && resultType3Value === "second") {
        result3.value = Number(input3.value) * 60;
    } else if (inputType3Value === "minute" && resultType3Value === "hour") {
        result3.value = Number(input3.value) / 60;
    } else if (inputType3Value === "minute" && resultType3Value === "minute") {
        result3.value = input3.value;
    }

    if (inputType3Value === "hour" && resultType3Value === "second") {
        result3.value = Number(input3.value) * 3600;
    } else if (inputType3Value === "hour" && resultType3Value === "minute") {
        result3.value = Number(input3.value) * 60;
    } else if (inputType3Value === "hour" && resultType3Value === "hour") {
        result3.value = input3.value;
    }
}

//////////بخش ریاضی و مبنا///////////

// میانگین اعداد

//گرفتن اعداد و متغیرها

var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var num3 = document.getElementById('number3');
var sumbtn = document.getElementById('sumbtn');
var resultsum = document.getElementById('resultsum');


sumbtn.addEventListener("click", function () {

    var num1Value = Number(num1.value);
    var num2Value = Number(num2.value);
    var num3Value = Number(num3.value);

    //جمع مقادیر سه عدد و پیدا کردن میانگین
    var sumValue = (num1Value + num2Value + num3Value) / 3;
    resultsum.innerHTML = sumValue;
})
// درصد آزمون

//گرفتن اعداد و متغیرها
var mark1 = document.getElementById('mark1');
var mark2 = document.getElementById('mark2');
var mark3 = document.getElementById('mark3');
var markbtn = document.getElementById('markbtn');
var marksum = document.getElementById('marksum');


markbtn.addEventListener("click", function () {

    var mark1Value = Number(mark1.value);
    var mark2Value = Number(mark2.value);
    var mark3Value = Number(mark3.value);

    //به دست آوردن تعداد کل سوالات
    var count = (mark1Value + mark2Value + mark3Value);
    // تعداد درست ضرب در 3 منهای تعداد غلط ها تقسیم بر کل سوالات ضرب در 100 => درصد آزمون
    var markfinal = (Math.round(((((mark1Value * 3) - mark2Value) / (count * 3)) * 100) * 10)) / 10;
    marksum.innerHTML = markfinal;
})

//واحد پول 

const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

//استفاده از  api - json دلیل زیادی واحدها
fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

//چک کردن مقادیر اینپوت و محاسبه
btn.addEventListener("click", () => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = num.value;

    if (currency1 != currency2) {
        convert(currency1, currency2, value);
    } else {
        //ارور در صورت یکی بودن یکاها
        alert("واحد دیگری را انتخاب کنید !");
    }
});

function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
        `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
        .then((val) => val.json())
        .then((val) => {
            console.log(Object.values(val.rates)[0]);
            ans.value = Object.values(val.rates)[0];
        });
}

///پایان کد