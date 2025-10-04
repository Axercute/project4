<script>
import { signIn } from '$lib/authService';
import { goto } from '$app/navigation';
import { onMount } from 'svelte';
let message = $state("");
let formSubmission = $state({
    staffName:"",
    pin:["", "", "", "", "",""]
});
  let inputs = [];
  function handleInput(e, index) {
    const value = e.target.value.replace(/\D/, "");
    formSubmission.pin[index] = value;

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  }

  // Handle backspace: move to previous input if empty
  function handleBackspace(e, index) {
    if (e.key === "Backspace" && !formSubmission.pin[index] && index > 0) {
      inputs[index - 1].focus();
    }
  }

  // Focus first input on mount
  onMount(() => {
    inputs[0]?.focus();
  });





const handleSubmit = async () => {
// try {
//     const formData = {email, password};
//     const user = await signIn(formData); 
//     message = 'Successfully logged in';
//     goto('/dashboard');
//     } catch (err) {
//     message = err.message;
//     }
console.log(formSubmission)
};
</script>

<div class="h-screen justify-center items-center flex">
<form onsubmit= {handleSubmit} class= "bg-gradient-to-br from-[#7d1b1f] to-red-700
flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2  md:w-1/3 ">
<div class="text-white m-2 font-semibold text-center">Enter your staff name and pin</div>
 <div>
<label for ="staffName" class="text-white">Staff Name:</label>
<input id = "staffName"
type="name"
bind:value={formSubmission.staffName}
required
/>
</div>

<label for ="pin" class="text-white">Pin:</label>
    <div class="flex gap-2">
      {#each formSubmission.pin as _, i}
        <input
          type="password"
          maxlength="1"
          inputmode="numeric"
          placeholder="•"
          bind:this={inputs[i]}
          bind:value={formSubmission.pin[i]}
          oninput={(e) => handleInput(e, i)}
          onkeydown={(e) => handleBackspace(e, i)}
          class="w-7 h-7 text-3xl text-center rounded-lg border"
          required
        />
      {/each}
    </div>

<div>
<button class="text-black bg-white hover:bg-green-400" type = "submit">Sign In</button>
</div>
</form>
</div>



