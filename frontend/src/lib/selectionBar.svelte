<script>
  let { value,selected,options } = $props();
  let open = $state("")
  let container=$state("")
  import {onMount} from "svelte"
  // onMount(()=>{window.addEventListener("click",testing)
  // return () => {
  // window.removeEventListener('click',testing);
  // };
  // })
  const testing=(event)=>{
    console.log(container);
    // console.log("target clicked",event.target)
  }
</script>

<div bind:this={container} onclick={testing}>Awesome</div>

<div class="w-50 mx-auto relative">
  <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
  <div class={`w-full px-4 py-2 border rounded text-center hover:cursor-pointer ${open ? `bg-amber-400`: `bg-white`}`}
    onclick={() => (open = !open)}>{selected}</div>

    <div class="relative">
{#if open}
  <div class="absolute w-full z-50 bg-white mt-1 shadow">
    {#each options as element}
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) --> 
      <div class="px-4 py-1 text-center hover:bg-amber-400 cursor-pointer"
        onclick={() => {
          selected = element;
          value = element;
          open = false;
        }}
      >
        {element}
      </div>
    {/each}
  </div>
{/if}
      </div>
</div>
