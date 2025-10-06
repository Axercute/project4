<script>
	import { goto } from "$app/navigation";
    import {page} from "$app/state"
    const appointmentId=page.params.appointmentId
    let appointment=$state("")
    import {onMount} from "svelte"
     onMount (async () => {
  const res = await fetch(`http://localhost:3000/appointment/${appointmentId}`);
  let data = await res.json()
  appointment=data
 });    
 const deleteAppointment=async()=>{
    const response = await fetch(`http://localhost:3000/appointment/deleteAppointment/${appointmentId}`, {
    method: 'DELETE',
    });
    goto("/dashboard/appointment")
 }
</script>
{#if appointment}
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-[#7d1b1f] p-6 shadow-lg rounded-2xl space-y-5">
      <div class="text-2xl font-semibold text-white">Your customer is {appointment.appointment.name},</div>

      <div class="text-xl text-white font-semibold">
        They have booked an upcoming appointment on 
        <span class="font-semibold text-green-400">{appointment.appointment.date}</span> 
        at 
        <span class="font-semibold text-green-400">{appointment.appointment.time}</span>.
      </div>

      <div>
        <h3 class="text-xl font-semibold text-white mb-2">Treatments booked:</h3>
        <ol class="list-decimal list-inside text-green-400">
          {#each appointment.appointment.treatments as element}
            <li>{element.english_name}, price is ${element.starting_price}</li>
          {/each}
        </ol>
      </div>
      <div class="font-semibold text-white">Their entry price is ${appointment.appointment.loyaltyPrice}</div>
      {#if appointment.appointment.extraComments}
    <div class="font-semibold text-xl text-white">They have also requested...</div>
    <div class="font-semibold text-white">{appointment.appointment.extraComments}</div>
    {/if}
      <div class="text-xl text-white font-semibold">
        Estimated price: 
        <span class="font-semibold text-green-400">${appointment.appointment.price.toFixed(2)}</span>
      </div>
      <button class="text-black flex-center bg-green-400 hover:bg-green-800"onclick={deleteAppointment}>Delete this appointment</button>
    <button class="text-black flex-center bg-green-400 hover:bg-green-800"onclick={goto("/dashboard/appointment")}>Return back to handling appointments</button> 
    </div>
  </div>
{:else}
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <p class="text-gray-500 text-lg animate-pulse">Loading your appointment...</p>
  </div>
{/if}
