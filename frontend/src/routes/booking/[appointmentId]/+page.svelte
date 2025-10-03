<script>
import { goto } from "$app/navigation";
import {page} from "$app/state"
import { DateTime as dt } from "luxon";
// const appointmentId=page.params.appointmentId
// let data=$state("")
let arrayOfTreatments=$state([])
let {data}=$props()
if(data.appointment.standardTreatment){
arrayOfTreatments.push(data.appointment.standardTreatment)}
if(data.appointment.packagedTreatment){
arrayOfTreatments.push(data.appointment.packagedTreatment)
}
if(data.appointment.wellnessProgramme){
arrayOfTreatments.push(data.appointment.wellnessProgramme)}   
</script>
{#if data}
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-[#7d1b1f] p-6 shadow-lg rounded-2xl space-y-5">
      <div class="text-2xl font-semibold text-white">Hi {data.appointment.name},</div>

      <div class="text-xl text-white font-semibold">
        You have an upcoming appointment on 
        <span class="font-semibold text-green-400">{dt.fromISO(data.appointment.date).toFormat('dd MMMM yyyy')}</span> 
        at 
        <span class="font-semibold text-green-400">{data.appointment.time}</span>.
      </div>

      <div>
        <h3 class="text-xl font-semibold text-white mb-2">Treatments booked:</h3>
        <ol class="list-decimal list-inside text-green-400">
          {#each arrayOfTreatments as element}
            <li>{element}</li>
          {/each}
        </ol>
      </div>
      {#if data.appointment.extraComments}
    <div class="font-semibold text-xl text-white">You have also requested...</div>
    <div class="font-semibold text-white">{data.appointment.extraComments}</div>
    {/if}
      <!-- <div class="text-xl text-white font-semibold">
        Estimated price: 
        <span class="font-semibold text-green-400">${appointment.appointment.price.toFixed(2)}</span>
      </div> -->
        <button class="text-black flex-center bg-green-400 hover:bg-green-800"onclick={goto("/")}>Return to main site</button>
    </div>
  </div>
{:else}
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <p class="text-gray-500 text-lg animate-pulse">Loading your appointment...</p>
  </div>
{/if}
