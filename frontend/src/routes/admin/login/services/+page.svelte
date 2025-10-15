<script>
  let {data} =$props()
  let choices = $state([...new Set(data.services.map(t=>t.category)
  .filter(c => c !== "Featured Treatment"&&c!=="Consultation"))])
  let selectedChoice=$state(choices[0])
  let priceMenu = $state(data.services.filter(t=>t.category ===selectedChoice))

 const filterMenu = (category) => {
  selectedChoice = category;
  priceMenu = data.services.filter(t=>t.category ===selectedChoice)}

let warningText=$state(false)
let message = $state("")
let buttons =$state("")
let storedDOM=$state("")
let formSubmission=$state("")
let changeActivation=$state(false)

const buttonsReset=()=>{
  buttons=["Make changes","Add new treatment","Delete it","Cancel"]
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
  if (command==="Add new treatment"){
    message="Please fill in the form on the treatment to add"
    changeActivation=true
    formSubmission=Object.fromEntries(Object.entries(storedDOM).map(
      ([key, value]) => [
    key,
    key === "category" ? value : ""
  ]
    )) //Getting only keys for treatments, but except for category
    buttons=["Confirm new treatment","Cancel"]
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

const action =async(actionCommand)=>{
    if(actionCommand==="Confirm delete"){
      warningText=""
      buttonsReset()
      const response = await fetch(`/api/service/${storedDOM._id}`, {
      method: 'DELETE'});
      const deletedItem = await response.json()
      window.location.reload(); 
    }
    if(actionCommand==="Confirm changes"){
    const response = await fetch(`/api/service/${formSubmission._id}`, {
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

    if(actionCommand==="Confirm new treatment"){
    const response = await fetch(`/api/service`, {
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

<div class="flex flex-wrap justify-center mt-3">
  {#each choices as element}
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div
  class={`px-4 py-2 font-semibold bg-red-400 border border-black text-white
          ${selectedChoice === element? 'bg-red-800' : 'text-red-800'} 
          hover:cursor-pointer hover:bg-red-500`} onclick={() => filterMenu(element)}>
          {element}</div>
{/each}
</div>
 
<div class="w-full flex justify-center px-4">  
  <div class="w-full max-w-4xl flex flex-col gap-4 mt-5">
    {#each priceMenu as element}
  <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
      <div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow hover:cursor-pointer hover:bg-red-500"
      onclick={(event)=>{storedDOM=element,warningText=true}}>
        <div class="mb-1 text-lg font-bold">{element.english_name}</div>
        <div class="mb-2 text-sm">{element.description}</div>
        <div class="text-right text-md font-bold">${element.starting_price}</div>
      </div>
    {/each}
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
<label for="time" class="mb-2">English Name</label>
<input type="text" id="time" class="text-center text-black" bind:value={formSubmission.english_name}/>

<label for="time" class="mb-2">Chinese Name</label>
<input type="text" id="time" class="text-center text-black" bind:value={formSubmission.chinese_name}/>

<!-- <label for="treatments" class="mb-2">Treatment description</label>
<input type="text" id="treatments" class="text-center text-black" bind:value={formSubmission.description}/> -->

<label for="description" class="mb-2">Treatment description</label>
<textarea bind:value = {formSubmission.description} id="description" class="text-black bg-white rounded flex mb-2 border-2 border-transparent focus:border-emerald-900 focus:outline-none focus:border-2 focus-within:bg-amber-400 font-semibold h-20 w-50"></textarea>

{#each choices as element}
<label class="- hover:cursor-pointer">
<input type="radio" bind:group={formSubmission.category} value={element} class="mt-2"/>
{element}
</label>
{/each}


<label for="extraComments" class="mb-2">Price, do not place "$"</label>
<input type="text" id="extraComments" class="text-center text-black" bind:value={formSubmission.starting_price}/>
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
