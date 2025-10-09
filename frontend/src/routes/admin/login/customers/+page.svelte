<script>
let {data} =$props()
import { goto } from "$app/navigation";
import { DateTime as dt } from "luxon";
let choices = $state(data.customers.sort((a, b) => new Date(a.date) - new Date(b.date))) //sort by date
let uniqueDates = [...new Set(choices.map(element=>dt.fromISO(element.date).toFormat('dd MMMM yyyy')))]
let selectedChoice = $state(uniqueDates[0])
let filteredMenu = $state(choices.filter(element=>dt.fromISO(element.date).toFormat('dd MMMM yyyy')===selectedChoice))
let warningText=$state(false)
let message = $state("")
let buttons =$state("")
let storedDOM=$state("")

let changeActivation=$state(false)
let formSubmission=$state("")

 const filterMenu = (date) => {
  selectedChoice = date
  filteredMenu = choices.filter(element=>dt.fromISO(element.date).toFormat('dd MMMM yyyy')===selectedChoice)
}

const buttonsReset=()=>{
  buttons=["Make changes","Complete it","Delete it","Cancel"]
  message="What would you like to do with this appointment?"
}

buttonsReset()

const messageDisplay=(command)=>{
  if (command ==="Make changes"){
    message="What would you like to change"
    changeActivation=true
    formSubmission={...storedDOM}
    buttons=["Confirm changes","Cancel"]
  }
  if(command==="Complete it"){
    message="Are you sure you would like to complete? The purchase amount will be reflected to the boss"
    buttons=["Confirm complete","Cancel"]
  }
  if(command==="Delete it"){
    message="Are you sure you would like to delete it? Nobody will be able to get it back"
    buttons=["Confirm delete","Cancel"]
  }
  if(command==="Cancel"){
    warningText=false
    buttonsReset()
    changeActivation=false
  }
}

// const editInfo=(elementInfo)=>{
//   warningText=true //display warning Text box
//   storedDOM=elementInfo //store the virtual DOM here
// } 

const action =async(actionCommand)=>{
    if(actionCommand==="Confirm delete"){
      warningText=""
      buttonsReset()
      const response = await fetch(`/api/appointment/${storedDOM._id}`, {
      method: 'DELETE'});
      const deletedItem = await response.json()
      window.location.reload(); 
    }
    if(actionCommand==="Confirm changes"){
    const response = await fetch(`/api/appointment/${formSubmission._id}`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(formSubmission)
    });
    const what = await response.json()
    console.log(what)
      window.location.reload(); 
    }
}
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
      onclick={(event)=>{storedDOM=element,warningText=true}}>
        <div class="mb-1 text-lg font-bold">{element.name}</div>
        <div class="mb-2 text-sm">{element.time}</div>
          <ol class="list-decimal list-inside text-green-400">
          {#each element.treatments as miniElement}
            <li>{miniElement.english_name}</li>
          {/each}
        </ol>
        <div class="flex-1 break-words">Comment: {element.extraComments}</div>
        <div class="text-right text-md font-bold">Total price roughly: ${element.price.toFixed(2)}</div>
      </div>
    {/each}
  </div>
</div>

    
{#if warningText}
<div
  class="flex flex-col items-center justify-center absolute
         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         bg-[#7d1b1f] rounded-2xl text-white font-semibold p-4 border-2 border-white
         max-w-[90vw] min-w-[350px] md:min-w-[500px]
         max-h-[80vh] overflow-auto text-center transition-all duration-300 ease-in-out"
>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="font-bold text-white text-lg break-words">{message}</div>
  </div>


{#if changeActivation}
<label for="time" class="mb-2">Your name</label>
<input type="text" id="time" class="text-center text-black" bind:value={formSubmission.name}/>

<label for="treatments" class="mb-2">Appointment Time</label>
<input type="text" id="treatments" class="text-center text-black" bind:value={formSubmission.time}/>

<label for="treatments" class="mb-2">Treatments</label>
{#each formSubmission.treatments as element}
<input type="text" id="treatments" class="text-center text-black" bind:value={element.english_name}/>
{/each}

<label for="extraComments" class="mb-2">Comments</label>
<input type="text" id="extraComments" class="text-center text-black" bind:value={formSubmission.extraComments}/>

<label for="extraComments" class="mb-2">Price, do not place "$"</label>
<input type="text" id="extraComments" class="text-center text-black" bind:value={formSubmission.price}/>
{/if}

  <div class="flex flex-col gap-2 mt-3 py-2 w-full">
    {#each buttons as element}
      <button
        type="button"
        onclick={(e) => {messageDisplay(e.target.textContent),action(e.target.textContent)}}
        class="bg-red-400 hover:bg-green-400 w-full rounded-xl py-2">
        {element}
      </button>
    {/each}
  </div>
</div>
{/if}
