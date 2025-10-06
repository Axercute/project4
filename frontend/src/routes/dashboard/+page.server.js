export const load = async({fetch})=>{
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/admin');
      return;
    }
    try {
      const res = await fetch('/api/protection', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      data = await res.json();
      loginStatus.set(data.loginStatus)
      console.log(data.user.email)
    } catch (error) {
      loginStatus.set(false)
      console.error('Error fetching appointments:', error);
    }
  }


  
export const load = async({fetch})=>{
const token = localStorage.getItem('token');
if (!token) {
    goto('/admin');
    return;
}
const res = await fetch('/api/service');
const treatments = await res.json();
const consultation=treatments.filter((element)=>{return element.category==="Consultation"})
const standardTreatment=treatments.filter((element)=>{return element.category==="Standard Treatment"})
const wellnessProgramme=treatments.filter((element)=>{return element.category==="TCM Wellness Program"})
const packagedTreatment=treatments.filter((element)=>{return element.category==="Package Price"})
return {consultation,standardTreatment,wellnessProgramme,packagedTreatment}
}