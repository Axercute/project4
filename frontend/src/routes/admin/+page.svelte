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
const handleInput=(event, index)=> {
const value = event.target.value.replace(/\D/, "");
formSubmission.pin[index] = value;
if (value && index < inputs.length - 1) {
    inputs[index + 1].focus(); //focus on the current index
}
}

// Handle backspace: move to previous input if empty
const handleBackspace=(event, index)=> {
    if (event.key === "Backspace" && !formSubmission.pin[index] && index > 0) {
    inputs[index - 1].focus();
    }
}

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
    <div class="flex gap-1">
      {#each formSubmission.pin as _, index}
        <input
          type="password"
          maxlength="1"
          inputmode="numeric"
          placeholder="•"
          bind:this={inputs[index]}
          bind:value={formSubmission.pin[index]}
          oninput={(event) => handleInput(event, index)}
          onkeydown={(event) => handleBackspace(event, index)}
          class="w-7 h-7 text-3xl text-center rounded-lg border"
          required/>
      {/each}
    </div>

<div>
<button class="text-black bg-white hover:bg-green-400" type = "submit">Sign In</button>
</div>
</form>
</div>



