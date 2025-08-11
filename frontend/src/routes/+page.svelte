<script>
  // import {treatmentDisplay} from "$lib/treatmentDisplay"
  //   const problems ={
  //   Fatigue_or_Insomnia:["Herbal Medication","Acupuncture"],
  //   Hormonal_Imbalances:["Herbal Medication","Acupuncture"],
  //   Menstrual_Irregularities:["Herbal Medication","Acupuncture"],
  //   Cold_And_Flu:["Herbal Medication","Acupuncture"],
  //   Chronic_Pain_or_Inflammation:["Herbal Medication","Acupuncture"],
  //   }
  import {goto} from "$app/navigation"
  import {treatmentDisplay,problemDisplay} from "$lib/treatmentDisplay"
  let open = $state(false)
  let descriptionUpdate=$state("")
  let textUpdate=$state("")
  const toggleOpen =(event,description,text)=>{event.stopPropagation();open=true;
    descriptionUpdate=description
    textUpdate=text
  }
  const toggleClose =()=>{event.stopPropagation();open=false}
//   import { onMount} from 'svelte';
//   onMount(() => {
//   window.addEventListener('click', toggleClose);
//   return () => {
//   window.removeEventListener('click', toggleClose);
// };});
console.log(import.meta.env.VITE_BACK_END_SERVER_URL);
import {onMount} from "svelte"
import {fade} from "svelte/transition"
let carousel=["picture1.jpg","picture2.jpg","picture3.jpg","picture4.jpg"]
let currentIndex=$state(0)
  // Automatically cycle every 10 seconds
  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % carousel.length;
    }, 10000); // 10000ms = 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  });
</script>
<div class="relative w-full h-64 md:h-100 xl:h-180">
   {#key carousel[currentIndex]} <img src={`/carousel/${carousel[currentIndex]}`} alt="Tui na" class="w-full h-full object-cover absolute" transition:fade={{ duration: 1000 }} key={carousel[currentIndex]}/>{/key}
  <button class="absolute top-[80%] left-[50%] rounded-2xl text-white bg-red-800
    shadow translate-x-[-50%] translate-y-[-50%] hover:bg-red-400" onclick={()=>{goto("./booking")}}>
   Book Appointment 
  </button>
</div>
<div class="flex-center text-white bg-red-800 font-semibold">Treatment Solution For:</div>
<!--display flex card on treatment-->
<div class="flex flex-row flex-wrap justify-center items-center">
{#each treatmentDisplay as {image,text,description}}
<div class="relative group w-40 h-40 flex justify-center items-center text-center m-2 hover:cursor-pointer" onclick={(event)=>{toggleOpen(event,description,text)}}>
<img src = {image} alt ="digestion" class=" rounded-2xl absolute w-full h-full " />
<div class="absolute w-full h-full bg-black/50 rounded-2xl group-hover:bg-black/20"></div>
<div class=" text-white font-semibold absolute">{text}</div>
</div>
{/each}
</div>
<!--display flex card on problems-->
<div class="flex-center text-white bg-red-800 font-semibold">Problems we tackle For:</div>
<div class="flex flex-row flex-wrap justify-center items-center">
{#each problemDisplay as {image,text,description}}
<div class="relative group w-40 h-40 flex justify-center items-center text-center m-2 hover:cursor-pointer" onclick={(event)=>{toggleOpen(event,description,text)}}>
<img src = {image} alt ="digestion" class=" rounded-2xl absolute w-full h-full"/>
<div class="absolute w-full h-full bg-black/50 rounded-2xl group-hover:bg-black/20"></div>
<div class=" text-white font-semibold absolute">{text}</div>
</div>
{/each}
</div>
<!-- navigation Bar for description -->
<div class={`opacity-90 transition-[left] duration-500 ease-in-out bg-gradient-to-br from-[#7d1b1f] to-red-800 h-1/3 w-1/2 z-1 flex-center
 text-md font-semibold text-white fixed md:text-3xl ${open ? 'left-0' : '-left-full'} top-[50%] absolute`}>
 <div class="mx-2">
  <div class="w-6 h-6 mt-5 absolute cursor-pointer right-2 top-2" onclick={toggleClose}>
  <span class="absolute inset-0 w-full h-1 bg-amber-400 rotate-45 origin-center"></span>
  <span class="absolute inset-0 w-full h-1 bg-amber-400 -rotate-45 origin-center"></span>
</div>
<strong>{textUpdate}</strong><br/><br/>
{descriptionUpdate}
</div>
</div>
