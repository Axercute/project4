<script>
  export let menu = [];
  export let selectedChoice = null;
  export let handleNavigation = () => {};
    console.log('Menu:', menu);
  console.log('Selected Choice:', selectedChoice);
</script>

<div class="flex flex-wrap justify-center mt-3 gap-3">
  {#each menu as category}
    <div
      class={`px-4 py-2 font-semibold bg-red-400 border border-black text-white
              ${selectedChoice === category ? 'bg-red-800' : 'text-red-800'}`}
      on:click={() => handleNavigation(category)}
    >
      {category.display}
    </div>
  {/each}
</div>