<script>
let {data}=$props()
import { role } from "$lib/globalView.js";
import Cookies from "js-cookie"
role.set(data.user.role)

import {profilePicture} from "$lib/globalView"
const logout=()=> {
Cookies.remove("token")
Cookies.remove("role")
window.location.href = '/'
// profileId.set("")
}

let formShow = $state(false)
let profileInput = $state("")


const askImage=async()=>{
  try {
  if (profileInput.length>300){
    alert("Link is too long!")
    formShow=false
    profileInput=""
    return
  }
  const formSubmission = {prompt:profileInput,staffName:data.user.staffName}
  const response = await fetch(`/api/login/profileUpdate`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(formSubmission),
  });
  const result = await response.json();
  console.log("update pfp completed",result)
  formShow=false
  profileInput=""
  } 
  catch (err) {
  console.log(err);
  throw new Error(err.message);
  }
}

</script>
{#if formShow}
<form onsubmit={askImage}
  class="flex flex-col items-center justify-center absolute 
         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
         h-35 w-90 bg-red-800 z-20 rounded-2xl text-white font-semibold p-4 border-2 border-white">

  <div class="w-full text-center">
    <label for="profileChange" class="block mb-2">
      Input a link to change your profile picture
    </label>
    <input type="text" id="profileChange" placeholder="https://thafd.bing.com/th/id/OIP.wjmWAMUiIG0lX-0asSDmCwHaEK?w=181&h=102&c=7&r=0&o=7&dpr=3&pid=1.7&rm=3" autofocus
           class="text-center w-full text-black rounded" bind:value={profileInput}/>
  </div>

  <div class="flex w-full justify-between ">
  <button type="submit" 
          class="bg-red-400 hover:bg-green-400 px-6 rounded text-webdarkpurple">
    Submit
  </button>

    <button type="button" 
          class="bg-red-400 hover:bg-green-400 px-6 rounded text-webdarkpurple" onclick={formShow=false}>
    Cancel
  </button>
  </div>
    <a href="https://www.image2url.com/" target="blank" class="text-center text-red-200">Click here to convert your image to link</a>
</form>
{/if}

<div class="flex-center">

<div class="rounded-2xl flex flex-col m-2 font-semibold bg-webpink border border-white 
text-white justify-center overflow-hidden w-full md:w-150 xl:w-250 bg-[#7d1b1f]">

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions-->
<!-- This is for flex-row flow to align side by side on PFP -->
<div class="flex flex-row w-full">
<div class="flex flex-col w-1/2" onclick={formShow=true}>
<img src={data.user.profilePicture} alt="StaffPicture" class="h-50 cursor-pointer border-2 xl:h-120 border-black"/>
</div>
<div class="flex flex-col w-1/2 justify-center p-2">
<div class="font-bold">Staff Name: {data.user.staffName}</div>
<div class="font-bold">Role: {data.user.role}</div> 
<div class="font-bold">Last signed in: </div> 
<button class="bg-red-400 hover:bg-green-400" onclick={logout}>Log Out</button>
</div>
</div>
Staff meeting
</div>
</div>

