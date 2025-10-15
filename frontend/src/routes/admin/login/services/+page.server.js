export const load = async({fetch})=>{
try{  
const res = await fetch('/api/service');
const services = await res.json();
// console.log(services)
return {services}
}  
catch(error){
    console.error('Error fetching appointments:', error);
}
}