<script>
  export let value;
  let open = false;
  export let selected;
  export let options = [];
  import {onMount} from "svelte"
  // onMount(()=>{window.addEventListener("click",console.log("test"))
  // return () => {
  // window.removeEventListener('click',console.log("test"));
  // };
  // })
</script>

<div class="w-50 mx-auto relative">
  
  <div class={`w-full px-4 py-2 border rounded text-center hover:cursor-pointer ${open ? `bg-amber-400`: `bg-white`}`}
    onclick={() => (open = !open)}>{selected}</div>

    <div class="relative">
{#if open}
  <div class="absolute w-full z-50 bg-white mt-1 shadow">
    {#each options as element}
      <div class="px-4 py-1 text-center hover:bg-amber-400 cursor-pointer"
        onclick={() => {
          selected = element.english_name;
          value = element
          open = false;
        }}
      >
        {element.english_name}
      </div>
    {/each}
  </div>
{/if}
      </div>
</div>
