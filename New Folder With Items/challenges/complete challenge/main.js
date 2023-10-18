//we select the output element
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
// const submit_btn = document.querySelector("submit-btn");
//input element
let isvalid = false;
const input_year = document.querySelector(".year");
const input_month = document.querySelector(".month");
const input_day = document.querySelector(".day");
const submit_btn =document.querySelector(".submit-btn");
//error element
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
submit_btn.addEventListener('click',calculateDate)
input_day.addEventListener('input', e => {
    if (+input_day.value > 31){
        error_day.textContent = 'must be a valid date';
    isvalid = false;
    return;
} else {
    isvalid = true;
    error_day.textContent = "";
}
    if (+input_day.value == 0) {
    isvalid = false;
    error_day.textContent = "this field is required";
    isvalid = false;
    return;
}else {
     error_day.textContent = "";
}
});

input_month.addEventListener('input', e => {
    if (+input_month.value > 12){
        error_month.textContent = 'must be a valid date';
    isvalid = false;
    return;
} else {
    isvalid = true;
    error_month.textContent = "";
}
    if (+input_month.value == 0) {
    isvalid = false;
    error_month.textContent = "this field is required";
    isvalid = false;
    return;
}else {
     error_month.textContent = "";
}
});
input_year.addEventListener('input', e => {
    if (+input_year.value > 2023){
        error_year.textContent = 'must be a valid date';
    isvalid = false;
    return;
} else {
    isvalid = true;
    error_year.textContent = "";
}
    if (+input_year.value == 0) {
    isvalid = false;
    error_year.textContent = "this field is required";
    isvalid = false;
    return;
}else {
     error_year.textContent = "";
}
});
function calculateDate(){
    if(isvalid){
        let birthday= `${input_month.value}/${input_day.value}//${input_year.value}`;
        console.log(birthday)
        let birthdayobj=new Date(birthday);
        let ageDiffmill =Date.now() - birthdayobj;
        let ageDate = new Date(ageDiffmill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay()- 1;
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    }else{
        alert("error");
    }
}
console.log("error")


