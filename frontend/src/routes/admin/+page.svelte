<script>
import { signIn } from '$lib/authService';
import { goto } from '$app/navigation';
import {loginStatus} from "$lib/loginStatus"
let email = $state("");
let password = $state("");
let message = $state("");
loginStatus.set(false)
const handleSubmit = async () => {
try {
    const formData = {email, password};
    const user = await signIn(formData); 
    message = 'Successfully logged in';
    loginStatus.set(true)
    console.log($loginStatus)
    goto('/dashboard');
    } catch (err) {
    message = err.message;
    }
};
</script>
<div class="h-screen justify-center items-center flex">
<form onsubmit= {handleSubmit} class= "bg-gradient-to-br from-[#7d1b1f] to-red-700
flex-center flex-col w-[75%] rounded-2xl outline-2 outline-white shadow-2xl shadow-cyan-800 p-2  md:w-1/3 ">
<div class="text-white m-2 font-semibold text-center">Pleae enter your admin login details below</div>
 <div>
<label for ="email" class="text-white">Email:</label>
<input id = "email"
type="email"
bind:value={email}
required
/>

</div>

 <div>
<label for ="password" class="text-white">Password:</label>
<input id ="password"
type="password"
bind:value={password}
required 
/>
</div> 

<div>
<button class="text-black bg-white hover:bg-green-400"type = "submit">Sign In</button>
</div>
</form>
</div>



