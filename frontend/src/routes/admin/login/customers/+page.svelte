<script>
let {data} =$props()
import { goto } from "$app/navigation";
import { DateTime as dt } from "luxon";
let choices = $state(data.customers.sort((a, b) => new Date(a.date) - new Date(b.date))) //sort by date
let uniqueDates = [...new Set(choices.map(element=>dt.fromISO(element.date).toFormat('dd MMMM yyyy')))]
let selectedChoice = $state(uniqueDates[0])
let filteredMenu = $state(choices.filter(element=>dt.fromISO(element.date).toFormat('dd MMMM yyyy')===selectedChoice))

 const filterMenu = (date) => {
  selectedChoice = date
  filteredMenu = choices.filter(element=>dt.fromISO(element.date).toFormat('dd MMMM yyyy')===selectedChoice)
}

// const enterParams=(appointmentId)=>{
//   goto(`/dashboard/appointment/${appointmentId}`)
// }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div class="flex flex-wrap justify-center mt-3">
  {#each uniqueDates as element}
    <div
      class={`px-4 py-2 font-semibold bg-red-400 border border-black text-white hover:cursor-pointer
      ${selectedChoice == element?'bg-red-800':'text-red-800'} hover:cursor-pointer hover:bg-red-500`}
      onclick={() => filterMenu(element)}>{element}</div>
  {/each}
</div>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div class="w-full flex justify-center px-4">  
  <div class="w-full max-w-4xl flex flex-col gap-4 mt-5">
    {#each filteredMenu as element}
      <div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow hover:bg-red-500 hover:cursor-pointer" 
      onclick={(event)=>{enterParams(element._id)}}>
        <div class="mb-1 text-lg font-bold">{element.name}</div>
        <div class="mb-2 text-sm">{element.time}</div>
        <div class="text-right text-md font-bold">Total price roughly: ${element.price.toFixed(2)}</div>
      </div>
    {/each}
  </div>
</div>

    
