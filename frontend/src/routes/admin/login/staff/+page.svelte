<script>
    let workers=[{name:"john"},{name:"Jackson"}]
    let storedDOM=$state("")
</script>


<div class="flex-center">

<div class="rounded-2xl flex flex-col m-2 font-semibold bg-webpink border border-white 
text-white justify-center overflow-hidden w-full md:w-150 xl:w-250 bg-[#7d1b1f]">

<div class="flex flex-col justify-center p-2">
<div class="font-bold text-2xl">Worker Management</div>
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div class="w-full flex justify-center px-4">  
  <div class="w-full max-w-4xl flex flex-col gap-4 mt-5">
    {#each workers as element}
      <div class="bg-red-800 text-white text-md font-semibold rounded-xl p-4 shadow hover:bg-red-500 hover:cursor-pointer" 
      onclick={(event)=>{storedDOM=element}}>
        <div class="mb-1 text-lg font-bold">{element.name}</div>
      </div>
    {/each}
  </div>
</div>
</div>


</div>
</div>

