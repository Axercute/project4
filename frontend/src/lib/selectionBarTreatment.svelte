<script>
  let { selected,options,value = $bindable() } = $props();
  let open = $state("")
  let container=$state("")
  import {onMount} from "svelte"
onMount(() => {
    const handleClickOutside = (event) => {
      if (container && !container.contains(event.target)) {
        open = false; // Close dropdown
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<div class="w-50 mx-auto relative">
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
  <div class={`w-full px-4 py-2 border rounded text-center hover:cursor-pointer ${open ? `bg-amber-400`: `bg-white`}`}
    onclick={() => (open = !open)} bind:this={container}>{selected}</div>

    <div class="relative">
{#if open}
  <div class="absolute w-full z-50 bg-white mt-1 shadow">
    {#each options as element}
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
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
