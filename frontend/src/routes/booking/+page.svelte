<script>
  import { goto } from '$app/navigation';
  let senior = false
  import {service,treatmentTitle} from "./logic"
  import SelectionBar from "$lib/selectionBar.svelte"
  import SelectionBarTreatment from "$lib/selectionBarTreatment.svelte";
  import {dateRange,timeRange,dateTitle,timeTitle,} from "$lib/dateRange"
  let name=$state("")
	let loyaltyCheck = $state(service.consultation[0])
  // let seniorCheck = $state(service.senior[0])
  let appointmentDate = $state("")
  let appointmentTime = $state("")
  let treatments=[];
  let standardTreatment=$state([]);
  let standardTreatmentSelected = $state({english_name: "", starting_price: "0"});
  let wellnessProgramme=$state([]);
  let wellnessProgrammeSelected = $state({english_name: "", starting_price: "0"});  
  let packagedTreatment=$state([]);
  let packagedTreatmentSelected = $state({english_name: "", starting_price: "0"});
  // import {treatment} from "$lib/treatment"
  import {onMount} from "svelte"
  onMount (async () => {
  const res = await fetch('http://localhost:3000/services');
  treatments = await res.json();
  standardTreatment=treatments.filter((element)=>{return element.category==="Standard Treatment"})
  wellnessProgramme=treatments.filter((element)=>{return element.category==="TCM Wellness Program"})
  packagedTreatment=treatments.filter((element)=>{return element.category==="Package Price"})
 });
  //-------------logic for standard treatment, wellness and packaged treatment-------------------

  let standardTreatmentEnglishName = $derived(standardTreatmentSelected.english_name);
  let standardTreatmentPrice = $derived (Number(standardTreatmentSelected.starting_price));

  let wellnessProgrammeEnglishName = $derived(wellnessProgrammeSelected.english_name);
  let wellnessProgrammePrice = $derived(Number(wellnessProgrammeSelected.starting_price));

  let packagedTreatmentEnglishName = $derived(packagedTreatmentSelected.english_name);
  let packagedTreatmentPrice = $derived(Number(packagedTreatmentSelected.starting_price)); 

 let price= $derived(loyaltyCheck.price+standardTreatmentPrice+wellnessProgrammePrice+packagedTreatmentPrice)
 let additionalRequest=$state("")

 let message = $derived(`This is ${name}, I would like to book a treatment at around $${price.toFixed(2)} on ${appointmentDate} at ${appointmentTime}.
 The treatment I am looking for is / are ${standardTreatmentEnglishName?standardTreatmentEnglishName:""}, ${wellnessProgrammeEnglishName?wellnessProgrammeEnglishName:""},${packagedTreatmentEnglishName?packagedTreatmentEnglishName:""},${additionalRequest?additionalRequest:""}
 `)

 let submissionLogic = $derived(
  {
  loyaltyPrice:Number(loyaltyCheck.price),
  name:name,
  date:appointmentDate,
  time:appointmentTime,
  treatments:[
  {english_name:standardTreatmentEnglishName},
  {english_name:wellnessProgrammeEnglishName},
  {english_name:packagedTreatmentEnglishName},
  ],
  extraComments:additionalRequest,
  price:Number(price),
  })
  let submissionString=$derived(JSON.stringify(submissionLogic))

  const handleSubmit=async(event)=> {
    event.preventDefault();
    if (!appointmentDate||!appointmentTime) {
    alert("Please select an appointment date or time before submitting.");
    return;
  }
  if(!standardTreatmentEnglishName&&!wellnessProgrammeEnglishName&&!packagedTreatmentEnglishName) {
    alert("Please select any treatment before submitting.");
    return;
  }
    // console.log(submissionString);
    const response = await fetch('http://localhost:3000/appointment/createAppointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: submissionString
    });

    const result = await response.json();
    const link = result.appointment._id
    await goto(`/booking/${link}`)
    window.open(`https://wa.me/6582881687?text=${message}`, "_blank");
  }
</script>

<div class="h-screen justify-center items-center flex">
<form method="POST" onsubmit= {handleSubmit} class= "bg-gradient-to-br from-[#7d1b1f] to-red-700
flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2  md:w-1/3 ">
<div class=" text-xl font-semibold text-[#E8C6A0]">Consultation</div>
<div class="flex flex-row space-x-10">
{#each service.consultation as element}
<label class="- hover:cursor-pointer">
	<input type="radio" bind:group={loyaltyCheck} value={element} class="mt-2"/>
	{element.english_name}
</label>
{/each}
</div>

<div>
      <label for="first_name" class="mb-2">Your name</label>
      <input type="text" id="first_name" placeholder="John" class="text-center" bind:value={name} required />
</div>
<SelectionBar options={dateRange} selected={dateTitle} bind:value={appointmentDate}/>
<SelectionBar options={timeRange} selected={timeTitle} bind:value={appointmentTime}/>
<div class="text-[#E8C6A0] font-semibold text-xl">Standard Treatment</div>
<SelectionBarTreatment options={standardTreatment} selected={"Select only if required"} bind:value={standardTreatmentSelected}/>
<div class="text-[#E8C6A0] font-semibold text-xl">TCM Wellness Program</div>
<SelectionBarTreatment options={wellnessProgramme} selected={"Select only if required"} bind:value={wellnessProgrammeSelected}/>
<div class="text-[#E8C6A0] font-semibold text-xl">Packaged Treatment</div>
<SelectionBarTreatment options={packagedTreatment} selected={"Select only if required"} bind:value={packagedTreatmentSelected}/>
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
<textarea bind:value = {additionalRequest} id="additional"placeholder="I would like a tui na with the massage together please" class=" bg-white rounded flex mb-2 border-2 border-transparent focus:border-emerald-900 focus:outline-none focus:border-2 focus-within:bg-amber-400 font-semibold h-20 w-50"></textarea>
<button type="submit" class=" bg-white hover:bg-green-400 px-10">Submit</button>
</form>
</div>
<style>
:global(.svelte-select) {
  --rmsc-primary: #d97706;
  --rmsc-primary-hover: #b45309;
}
</style>