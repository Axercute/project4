export const load = async({fetch})=>{
try{  
const res = await fetch('/api/staff');
const staffs = await res.json();
console.log(staffs)
return {staffs}
}  
catch(error){
    console.error('Error fetching appointments:', error);
}
}