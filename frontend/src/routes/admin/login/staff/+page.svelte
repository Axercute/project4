<script>
let {data}=$props()
console.log(data)
let warningText=$state(false)
let reveal = $state(false)
let message = $state("")
let buttons =$state("")
let storedDOM=$state("")
let formSubmission=$state("")
let changeActivation=$state(false)

const buttonsReset=()=>{
  buttons=[
  reveal?"Unreveal pins":"Reveal pins",
  "Make changes",
  "Fire staff",
  "Create new staff",
  "Cancel"]
  message="What would you like to do with this treatment?"
}

buttonsReset()

const messageDisplay=(command)=>{
  if (command ==="Make changes"){
    message="What would you like to change"
    changeActivation=true
    formSubmission={...storedDOM}
    buttons=["Confirm changes","Cancel"]
  }
  if (command ==="Reveal pins"){
    message="Are you sure you want to reveal them? This will show all login details"
    buttons=["Confirm reveal","Cancel"]
  }
  if (command ==="Unreveal pins"){
    message="Do you want to unreveal the pins?"
    buttons=["Confirm unreveal","Cancel"]
  }
  if(command==="Fire staff"){
    message="Are you sure you would like to delete it? Nobody will be able to get it back"
    buttons=["Confirm delete","Cancel"]
  }
  if (command==="Create new staff"){
    message="Please enter their staff name and pin"
    changeActivation=true
    formSubmission=Object.fromEntries(Object.entries(storedDOM).map(
      ([key, value]) => [key]
    )) //Getting only keys for treatments, but except for category
    buttons=["Confirm create new staff","Cancel"]
  }
  if(command==="Cancel"){
    warningText=false
    buttonsReset()
    changeActivation=false
  }
}

const action =async(actionCommand)=>{
    if(actionCommand==="Confirm delete"){
      warningText=""
      buttonsReset()
      const response = await fetch(`/api/staff/${storedDOM._id}`, {
      method: 'DELETE'});
      const deletedItem = await response.json()
      window.location.reload(); 
    }
    if(actionCommand==="Confirm reveal"||actionCommand==="Confirm unreveal"){
      reveal=!reveal
      warningText=""
      buttonsReset()
    }
    if(actionCommand==="Confirm changes"){
    const response = await fetch(`/api/staff/${formSubmission._id}`, {
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

    if(actionCommand==="Confirm create new staff"){
    console.log(formSubmission.pin)
    const response = await fetch(`/api/staff`, {
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


<div class="flex-center">

<div class="rounded-2xl flex flex-col m-2 font-semibold bg-webpink border border-white 
text-white justify-center overflow-hidden w-full md:w-150 xl:w-250 bg-[#7d1b1f]">

<div class="flex flex-col justify-center p-2">
<div class="font-bold text-2xl">Staff Management</div>
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div class="w-full flex justify-center px-4">  
  <div class="w-full max-w-4xl flex flex-col gap-4 mt-5">
    {#each data.staffs as element}
      <div class="flex justify-between bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow hover:bg-red-500 hover:cursor-pointer" 
      onclick={(event)=>{storedDOM=element,warningText=true}}>
        <div class="text-lg font-bold">{element.staffName}</div>
        {#if reveal}
        <div class="text-lg font-bold">{element.pin}</div>
        {:else}
        <div class="text-lg font-bold">******</div>
        {/if}
      </div>
    {/each}
  </div>
</div>
</div>
</div>
</div>


{#if warningText}
<div
  class="flex flex-col items-center justify-center fixed
         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         bg-[#7d1b1f] rounded-2xl text-white font-semibold p-4 border-2 border-white
         max-w-[90vw] min-w-[350px] md:min-w-[500px]
         max-h-[80vh] overflow-auto text-center transition-all duration-300 ease-in-out"
>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="font-bold text-white text-lg break-words">{message}</div>
  </div>


{#if changeActivation}
<label for="time" class="mb-2">Staff Name</label>
<input type="text" id="time" class="text-center text-black" bind:value={formSubmission.staffName}/>

<label for="time" class="mb-2">Pin</label>
<input type="text" id="time" class="text-center text-black" bind:value={formSubmission.pin}/>
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
