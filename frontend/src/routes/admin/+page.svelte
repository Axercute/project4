<script>
import Cookies from 'js-cookie';
import { goto } from '$app/navigation';
import { onMount } from 'svelte';
import { jwtDecode } from 'jwt-decode';
let message = $state("");
let formSubmission = $state({
    staffName:"",
    pin:["", "", "", "", "",""]
});

let inputs = $state([]) //purpose to serve as reactive DOM for index

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

const handleSubmit = async (e) => {
e.preventDefault()
formSubmission.pin=formSubmission.pin.join("")
console.log(formSubmission)
const response = await fetch(`/api/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formSubmission),
});
const data=await response.json()
console.log(data)
if (data.jwt) {
    Cookies.set('token', data.jwt, { expires: 1, path: '/' });
    const decoded = jwtDecode(data.jwt)
    await goto(`/admin/login`);
    return decoded
}
if(!data.jwt){
    alert("wrong info")
    goto("/")
    throw new Error('Invalid response from server');}
} 
</script>

<div class="h-screen justify-center items-center flex">
<form onsubmit= {handleSubmit} class= "bg-gradient-to-br from-[#7d1b1f] to-red-700
flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2  md:w-1/3 ">
<div class="text-white m-2 font-semibold text-center">Enter your staff name and pin</div>
 <div>
<label for ="staffName" class="text-white">Staff Name:</label>
<input id = "staffName" type="name" bind:value={formSubmission.staffName} required/>
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
          onfocus={() => formSubmission.pin[index] = ""}
          class="w-7 h-7 text-3xl text-center rounded-lg border"
          required/>
      {/each}
    </div>

<div>
<button class="text-black bg-white hover:bg-green-400" type = "submit">Sign In</button>
</div>
</form>
</div>



