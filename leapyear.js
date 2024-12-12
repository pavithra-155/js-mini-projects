const leapyear=year =>{
    return new Date(year,1,29).getMonth() ===1;
}
console.log(leapyear(2020));
