This project was done mainly with Tailwind CSS and Svelte. There was ESLint + prettier here but we did not implement due to proving not everything is in AI. 

The project key contributors are:  
 **John** (Svelte + Tailwind + express CRUD)  
 **Jamie** (Express CRUD + Jwt token + DAO management)  
 **Shao Quan** (Assisting in key improvements and coaching feedbacks, SEO engine for Google)  
 **Vinny** (GitHub Repo teamwork feedback)  

[Project progress diaries][link]  

[link]: https://trello.com/b/8bSbzQ9N/my-trello-board  

[Slideshow][link] 

[link]: https://docs.google.com/presentation/d/1DF_b4xx65-zqvTIPilIyIGQShBZ0MsNhsn9QKHkr7QU/edit?slide=id.g37177ddaee6_0_205#slide=id.g37177ddaee6_0_205

**Mission**
* Revamp the old website developed in wordpress
* Convert old HTML logic into framework
* Turn into a full fetch App available in mobile, Ipad and PC
* Make the App available in Chinese and English language  
* Make the staff dashboard customizable by the staffs
* Assist shop owner to gather customers with SEO engine   
* Help them with a billboard they have purchased to install some attractive videos and pictures    

**Progress and achievements**
* UI is up to par with Tailwind assistance *(50%)*
* Svelte conquered *(100%)*
* Tailwind assisted *(70%)* (BE dashboard yet to complete)
* BE dashboard logic is up to par *(100%)*
* Unknown status (SQ agreed yet to know)
* Unknown status (SQ gave feedback with their previous UI collab)

Old Web
![alt text](static/README/oldWeb.png)
New Web Web view  
![alt text](static/README/newWebWeb.png)  
New Web Ipad view  
![alt text](static/README/newWebIpad.png)  
New web phone view    
![alt text](static/README/newWebPhone.png)

**Framework and Library assistance**
* Svelte 
* Tailwind
* Express
* Mongo DB and Mongoose
* i18next (soon)
* Some Vanilla

**App functions for customer based**
* Fading screens 
* Treatment solution and problem toggling
* Booking Appointments with selection ease
* Pricing view
* Contact us chatting and map viewing

**App functions for staff based**
* Appointment filtered on today
* Service management CRUD
* Appointment management CRUD

Svelte code sharing (Navigation page in admin and customer logic)

*How it begin? starts with js VDOM in lib*
```javascript
//Storage of virtual DOM in lib
import { writable } from 'svelte/store';

export let loginStatus = writable(false);
```

* My apologies, README doesn't support Svelte so code explaination won't be highlighted in Svelte  
*Importing VDOM from lib*
```svelte
<script>
    //+layout.svelte 
  import Navbar from './navbar.svelte';
  import { loginStatus } from "$lib/loginStatus";

  let finalNav = $state("");

  $effect(() => {
    if ($loginStatus === false) {
      finalNav = navBarInfo;
      console.log("it is false now");
    } else {
      finalNav = adminBarInfo;
      console.log("it is true now");
    }
  });
</script>
```
Passing the logic of navBarInfo or adminBarInfo to NavBar.svelte

```svelte
<script>
import {goto} from "$app/navigation"
import {loginStatus} from "$lib/loginStatus"
let {navBarInfo}=$props() 
</script>
 <div class="hidden md:flex space-x-10 text-white font-semibold text-xl">
    {#if $loginStatus===false}
    {#each navBarInfo as { display, path }}
      <div
        class="cursor-pointer hover:text-amber-300"
        onclick={() => goto(`/${path}`)}
      >
        {display}
      </div>
    {/each}
    {:else}
    {#each navBarInfo as { display, path }}
      <div
        class="cursor-pointer hover:text-amber-300"
        onclick={() => goto(`/dashboard/${path}`)}
      >
        {display}
      </div>
    {/each}
    {/if}
  </div>
    </div>
```

**Key takeaways - AI**
* Don’t believe the rumors that AI will takeover web developers. It won’t! Don’t believe? Download Python and check the AI builders
* GBT still giving me Svelte 4 logic when we are in Svelte 5, most logics cannot rely on GBT. BE is even more impossible, too many files and errors have to be manually found. 

**Patreons**
* Rich Haaris (Bro did his very best in making our generation easier in web dev)
* Jamie (Without her, I don’t think the BE can be done so smoothly especially the JWT logic and the database in general)
* SQ (A lot of motivation in bringing the team spirit up and giving us opportunity to work with his actual clients-pss… hope it’s up to your standards)
* Vinny (Helped with the GitHub collab)

**Final take**
* Don’t be afraid to try new things, if you don’t agree with something, try another thing. Keep trying until you find what is the best UX
* If the current environment affects your coding journey, move somewhere greener. Touch grass.
* Share your coding process with someone it will motivate you to do more
