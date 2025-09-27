<script>
  import { goto } from '$app/navigation';
  let senior = false
  import {service,treatmentTitle} from "./logic"
  import SelectionBar from "$lib/selectionBar.svelte"
  import SelectionBarTreatment from "$lib/selectionBarTreatment.svelte";
  import {dateRange,timeRange,dateTitle,timeTitle,} from "$lib/dateRange"
  let dates=$state("")
  // let seniorCheck = $state(service.senior[0])
  let consultation=$state("")
  let treatments=[];
  let standardTreatment=$state([]);
  let wellnessProgramme=$state([]);
  let packagedTreatment=$state([]);

  import {onMount} from "svelte"
  onMount (async () => {
  const res = await fetch('/api/service');
  treatments = await res.json();
  standardTreatment=treatments.filter((element)=>{return element.category==="Standard Treatment"})
  wellnessProgramme=treatments.filter((element)=>{return element.category==="TCM Wellness Program"})
  packagedTreatment=treatments.filter((element)=>{return element.category==="Package Price"})
  consultation=treatments.filter((element)=>{return element.category==="consultation"})
  // console.log(consultation)
  loyaltyCheck = consultation.find(el => el.english_name === "First")
 });
  //-------------logic for standard treatment, wellness and packaged treatment-------------------
  let formSubmission = $state({
  name:"",
  appointmentDate:"",
  appointmentTime:"",
  standardTreatmentSelected:{starting_price:0},
  wellnessProgrammeSelected:{starting_price:0},
  packagedTreatmentSelected:{starting_price:0},
  additionalRequest:"",
})

let loyaltyCheck = $state("")

 let price= $derived(Number(
  loyaltyCheck.starting_price+
  formSubmission.standardTreatmentSelected.starting_price+
  formSubmission.wellnessProgrammeSelected.starting_price+
  formSubmission.packagedTreatmentSelected.starting_price
 ))

let arrayOfTreatments=$state([])
let treatmentMessage=$state("")

 let finalMessage = $state("")

  const handleSubmit=async(event)=> {
    event.preventDefault();
  //   if (!appointmentDate||!appointmentTime) {
  //   alert("Please select an appointment date or time before submitting.");
  //   return;
  // }
  // if(!standardTreatmentId&&!wellnessProgrammeId&&!packagedTreatmentId) {
  //   alert("Please select any treatment before submitting.");
  //   return;
  // }
  console.log(formSubmission)
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
// console.log(`${formSubmission.name}`,`${price.toFixed(2)}`,treatmentMessage)
console.log(`This is ${formSubmission.name}, I would like to book a treatment at around $${price.toFixed(2)} on ${formSubmission.appointmentDate} at ${formSubmission.appointmentTime}.`,treatmentMessage,`${formSubmission.additionalRequest}`)
    // console.log(submissionString);
    // const response = await fetch('/api/appointment', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: submissionString
    // });
    
    // const result = await response.json();
    // const link = result._id
    // await goto(`/booking/${link}`)
    // window.open(`https://wa.me/6582881687?text=${message}`, "_blank");
  }
</script>

<div class="h-screen justify-center items-center flex">
<form method="POST" onsubmit= {handleSubmit} class= "bg-gradient-to-br from-[#7d1b1f] to-red-700
flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2  md:w-1/3 ">
<div class=" text-xl font-semibold text-[#E8C6A0]">Consultation</div>

{#if !consultation}
Loading
{:else}
<div class="flex flex-row space-x-10">
{#each consultation as element}
<label class="- hover:cursor-pointer">
	<input type="radio" bind:group={loyaltyCheck} value={element} class="mt-2"/>
	{element.english_name}
</label>
{/each}
</div>
{/if}

<div>
      <label for="first_name" class="mb-2">Your name</label>
      <input type="text" id="first_name" placeholder="John" class="text-center" bind:value={formSubmission.name} required />
</div>
<SelectionBar options={dateRange} selected={dateTitle} bind:value={formSubmission.appointmentDate}/>
<SelectionBar options={timeRange} selected={timeTitle} bind:value={formSubmission.appointmentTime}/>
<div class="text-[#E8C6A0] font-semibold text-xl">Standard Treatment</div>
<SelectionBar options={standardTreatment} selected={"Select only if required"} bind:value={formSubmission.standardTreatmentSelected}/>
<div class="text-[#E8C6A0] font-semibold text-xl">TCM Wellness Program</div>
<SelectionBar options={wellnessProgramme} selected={"Select only if required"} bind:value={formSubmission.wellnessProgrammeSelected}/>
<div class="text-[#E8C6A0] font-semibold text-xl">Packaged Treatment</div>
<SelectionBar options={packagedTreatment} selected={"Select only if required"} bind:value={formSubmission.packagedTreatmentSelected}/>
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
<textarea bind:value = {formSubmission.additionalRequest} id="additional"placeholder="I would like a tui na with the massage together please" class=" bg-white rounded flex mb-2 border-2 border-transparent focus:border-emerald-900 focus:outline-none focus:border-2 focus-within:bg-amber-400 font-semibold h-20 w-50"></textarea>
<button type="submit" class=" bg-white hover:bg-green-400 px-10">Submit</button>
</form>
</div>
<style>
:global(.svelte-select) {
  --rmsc-primary: #d97706;
  --rmsc-primary-hover: #b45309;
}
</style>