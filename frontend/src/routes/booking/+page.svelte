<script>
import { goto } from '$app/navigation';
let senior = false
import SelectionBar from "$lib/selectionBar.svelte"
import Calendar from '$lib/calendar.svelte';
import { DateTime as dt } from 'luxon';
let treatments=[];
let warningText=$state(false)

//testing
let {data} =$props()
//-------------logic for standard treatment, wellness and packaged treatment-------------------
let formSubmission = $state({
loyaltyCheck:"",
name:"",
appointmentDate:dt.now(),
appointmentTime:dt.now().plus({hours:1}).toFormat("h a"),
standardTreatmentSelected:{starting_price:0},
wellnessProgrammeSelected:{starting_price:0},
packagedTreatmentSelected:{starting_price:0},
additionalRequest:"",
price:"",
})
formSubmission.loyaltyCheck = data.consultation.find(el => el.english_name === "First")
$effect(()=>{
  formSubmission.price=price
}
)
let price= $derived(Number(
formSubmission.loyaltyCheck.starting_price+
formSubmission.standardTreatmentSelected.starting_price+
formSubmission.wellnessProgrammeSelected.starting_price+
formSubmission.packagedTreatmentSelected.starting_price
))
let arrayOfTreatments=$state([])
let treatmentMessage=$state("")

let finalMessage = $state("")

const handleSubmit=async(event)=> {
  event.preventDefault();
  if(!formSubmission.standardTreatmentSelected.english_name&&!formSubmission.wellnessProgrammeSelected.english_name&&!formSubmission.packagedTreatmentSelected.english_name) {
  warningText=true
  return;
}

if(formSubmission.standardTreatmentSelected.english_name){
  arrayOfTreatments.push(formSubmission.standardTreatmentSelected.english_name)}
if(formSubmission.wellnessProgrammeSelected.english_name){
  arrayOfTreatments.push(formSubmission.wellnessProgrammeSelected.english_name)
}
if(formSubmission.packagedTreatmentSelected.english_name){
  arrayOfTreatments.push(formSubmission.packagedTreatmentSelected.english_name)
}
if(arrayOfTreatments.length===1){
  treatmentMessage=`The treatment I booked is ${arrayOfTreatments}.`
}
else{
  treatmentMessage=`The treatments I booked are ${arrayOfTreatments.join(",")}.`
}
finalMessage=`This is ${formSubmission.name}, I would like to book a treatment at around $${price.toFixed(2)} on ${formSubmission.appointmentDate.toFormat('dd MMMM yyyy')} at ${formSubmission.appointmentTime}.${treatmentMessage}.${formSubmission.additionalRequest}`

console.log(formSubmission)

// const response = await fetch('/api/appointment', {
//   method: 'POST',
//   headers: {
//   'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(formSubmission)
// });

// const result = await response.json();
// const link = result._id
// await goto(`/booking/${link}`)
// window.open(`https://wa.me/6582881687?text=${finalMessage}`, "_blank");
}

//Date logic from here onwards
const openTime = 10;
const closeTime = 21;
let today=dt.now()
let appointmentDate=formSubmission.appointmentDate

let timeRange=$state([])
for (let hour = appointmentDate.hour + 1 ; hour <= closeTime; hour++) {
  timeRange.push(
    appointmentDate.set({ hour, minute: 0 }).toFormat("h a"))
  }

let resetTimeRange = $state([])
for (let hour = openTime ; hour <= closeTime; hour++) {
  resetTimeRange.push(
    appointmentDate.set({ hour, minute: 0 }))
  }

  // console.log(resetTimeRange)







</script>

<div class="h-screen justify-center items-center flex">
<form method="POST" onsubmit= {handleSubmit} class= "bg-gradient-to-br from-[#7d1b1f] to-red-700
flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2  md:w-1/3 ">
<div class=" text-xl font-semibold text-[#E8C6A0]">Consultation</div>
{#if !data.consultation}
<div class="lds-dual-ring"></div>
{:else}
<div class="flex flex-row space-x-10">
{#each data.consultation as element}
<label class="- hover:cursor-pointer">
	<input type="radio" bind:group={formSubmission.loyaltyCheck} value={element} class="mt-2"/>
	{element.english_name}
</label>
{/each}
</div>
{/if}

<div>
      <label for="first_name" class="mb-2">Your name</label>
      <input type="text" id="first_name" placeholder="John" class="text-center" bind:value={formSubmission.name} required />
</div>
<Calendar bind:value={formSubmission.appointmentDate}/>
<!-- <SelectionBar options={dateRange} selected={dateTitle} bind:value={formSubmission.appointmentDate}/> -->
<SelectionBar options={resetTimeRange.map(e=>e.toFormat("h a"))} selected={formSubmission.appointmentTime} bind:value={formSubmission.appointmentTime}/>
<div class="text-[#E8C6A0] font-semibold text-xl">Standard Treatment</div>
<SelectionBar options={data.standardTreatment} selected={"Select only if required"} bind:value={formSubmission.standardTreatmentSelected}/>
<div class="text-[#E8C6A0] font-semibold text-xl">TCM Wellness Program</div>
<SelectionBar options={data.wellnessProgramme} selected={"Select only if required"} bind:value={formSubmission.wellnessProgrammeSelected}/>
<div class="text-[#E8C6A0] font-semibold text-xl">Packaged Treatment</div>
<SelectionBar options={data.packagedTreatment} selected={"Select only if required"} bind:value={formSubmission.packagedTreatmentSelected}/>
<div class="text-[#E8C6A0] font-semibold text-xl text-outline">Cost Estimated: ${price.toFixed(2)}</div>
<!-- <div class="flex flex-row space-x-5">
{#each service.senior as element}
<label class="- hover:cursor-pointer">
	<input type="radio" bind:group={seniorCheck} value={element} class="mt-2"/>
	{element.english_name} 
</label>
{/each}
</div> -->
<label for="additional">Additional request</label>
<textarea bind:value = {formSubmission.additionalRequest} id="additional"placeholder="I would like a female masseur" class=" bg-white rounded flex mb-2 border-2 border-transparent focus:border-emerald-900 focus:outline-none focus:border-2 focus-within:bg-amber-400 font-semibold h-20 w-50"></textarea>
<button type="submit" class=" bg-white hover:bg-green-400 px-10">Submit</button>
</form>
</div>




{#if warningText}
<div class="flex flex-col items-center justify-center absolute 
         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
         h-45 w-80 bg-[#7d1b1f] rounded-2xl text-white font-semibold p-4 border-2 border-white">
<div class="w-full text-center flex flex-col justify-center items-center">
    <div class="flex font-bold text-white text-lg">Please pick at least 1 treatment</div>
  </div>
<button type="button" onclick={()=>{warningText=""}} class="bg-red-400 hover:bg-green-400" >Noted</button>
</div>
{/if}

<style>
:global(.svelte-select) {
  --rmsc-primary: #d97706;
  --rmsc-primary-hover: #b45309;
}
</style>
