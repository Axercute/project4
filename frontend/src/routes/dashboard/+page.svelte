<script>
import { goto } from '$app/navigation';
import { onMount } from 'svelte'
import {loginStatus} from "$lib/loginStatus"
loginStatus.set(false)

const logout=()=> {
localStorage.removeItem('token');
window.location.href = '/admin';
}
let data;
  //fetch today's appointments
  onMount(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/admin');
      return;
    }
    try {
      const res = await fetch('/api/protection', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      data = await res.json();
      loginStatus.set(data.loginStatus)
      console.log(data.user.email)
    } catch (error) {
      loginStatus.set(false)
      console.error('Error fetching appointments:', error);
    }
  });
</script>
<div>Welcome back {data?.user?.email}</div>
