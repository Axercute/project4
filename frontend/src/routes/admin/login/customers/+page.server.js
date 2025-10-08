import { DateTime as dt } from "luxon";
export const load = async({fetch})=>{
try{  
const res = await fetch('/api/appointment');
const customers = await res.json();
console.log(customers[0].treatments[0])
// console.log(dt.fromISO(customers[0].date).toFormat('dd MMMM yyyy'))
return {customers}
}  
catch(error){
    console.error('Error fetching appointments:', error);
}
}