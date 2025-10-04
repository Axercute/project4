export const load = async({fetch,params})=>{
const res = await fetch(`/api/appointment/${params.appointmentId}`);
const appointment = await res.json();
console.log(appointment)
return {appointment}
}