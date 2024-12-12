function daystoxmas(){
    const today= new Date();
    const xmas=new Date(today.getFullYear(),11,25);
    const diff=xmas-today;
    const daysleft=Math.ceil(diff/(1000*60*60*24));
    return daysleft;
}
const daysleft=daystoxmas();
console.log(daysleft+"days left for xmas");