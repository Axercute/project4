<script>
	import { goto } from "$app/navigation";
    import {page} from "$app/state"
    const appointmentId=page.params.appointmentId
    let appointment=$state("")
    import {onMount} from "svelte"
     onMount (async () => {
  const res = await fetch(`/api/appointment/${appointmentId}`);
  let data = await res.json()
  appointment=data
 });    
</script>
{#if appointment}
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-[#7d1b1f] p-6 shadow-lg rounded-2xl space-y-5">
      <div class="text-2xl font-semibold text-white">Hi {appointment.name},</div>

      <div class="text-xl text-white font-semibold">
        You have an upcoming appointment on 
        <span class="font-semibold text-green-400">{appointment.date}</span> 
        at 
        <span class="font-semibold text-green-400">{appointment.time}</span>.
      </div>

      <div>
        <h3 class="text-xl font-semibold text-white mb-2">Treatments booked:</h3>
        <ol class="list-decimal list-inside text-green-400">
          {#each appointment.treatments as element}
            <li>{element.english_name}</li>
          {/each}
        </ol>
      </div>
      {#if appointment.extraComments}
    <div class="font-semibold text-xl text-white">You have also requested...</div>
    <div class="font-semibold text-white">{appointment.extraComments}</div>
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
