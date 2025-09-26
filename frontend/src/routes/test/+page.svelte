<script>
  let box; // this will hold the reference to the div

  function highlight() {
    // Access the DOM element directly
    box.style.backgroundColor = "lightgreen";
    box.textContent = "I was clicked!";
  }

  function reset() {
    box.style.backgroundColor = "white";
    box.textContent = "Click me!";
  }
</script>
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div
  bind:this={box} 
  class="p-4 border cursor-pointer"
  on:click={highlight}
  on:dblclick={reset}
>
  Click me!
</div>
