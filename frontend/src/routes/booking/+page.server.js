
export const load = async({fetch})=>{
try{  
const res = await fetch('/api/service');
const treatments = await res.json();
const consultation=treatments.filter((element)=>{return element.category==="Consultation"})
const standardTreatment=treatments.filter((element)=>{return element.category==="Standard Treatment"})
const wellnessProgramme=treatments.filter((element)=>{return element.category==="TCM Wellness Program"})
const packagedTreatment=treatments.filter((element)=>{return element.category==="Package Price"})
return {consultation,standardTreatment,wellnessProgramme,packagedTreatment}
}  
catch(error){
    console.error('Error fetching appointments:', error);
}
}