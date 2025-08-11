<script>

import { goto } from '$app/navigation';
import { onMount } from 'svelte'
function logout() {
localStorage.removeItem('token');
window.location.href = '/admin';

}
export let data;

  const menu = [
    { display: 'Dashboard', path: 'dashboard' },
    { display: 'Service Management', path: 'service-management' },
    { display: 'Appointment Management', path: 'appointment-management' },
  ];
let selectedChoice = menu[0];
let appointments = [];

//handling navigation

  const handleNavigation = (category) => {
    selectedChoice = category; // Update selected category
    if (category.path === 'dashboard') {
    goto('/dashboard');
  } else if (category.path === '') {
    goto('/');
  }else if (category.path) {
    goto(`/dashboard/${category.path}`); // Navigate based on path inside dashboard
  }
  };
  //fetch today's appointments

  onMount(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/admin');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401) {
        window.location.href = '/admin';
        return;
      }

      if (!res.ok) {
        throw new Error('Failed to fetch appointments');
      }

      const data = await res.json();
      appointments = data.appointments || [];  // Set the appointments data
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  });


 
</script>

<main>

 <div class="flex justify-end items-center mt-3 mr-4">
    <div on:click={goto("/admin")} class="text-red-600 hover:text-red-800">Log Out</div>
  </div>
    {#if appointments.length > 0}
    <h2 class="text-center text-xl font-semibold my-4">Welcome, Here are Your Appointments Today</h2> 
    <div class="container mx-auto py-4 overflow-x-auto">
      <table class="min-w-full border-collapse border-l border-r border-black">
        <thead>
          <tr class="bg-gray-100 border-t border-black">
            <th class="border-b px-4 py-2">Name</th>
            <th class="border-b px-4 py-2">Date</th>
            <th class="border-b px-4 py-2">Time</th>
            <th class="border-b px-4 py-2">Treatments</th>
            <th class="border-b px-4 py-2">Price</th>
            <th class="border-b px-4 py-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {#each appointments as appointment}
            <tr class="bg-white hover:bg-gray-50">
              <td class="border-b px-4 py-2 text-center">{appointment.name}</td>
              <td class="border-b px-4 py-2 text-center">{appointment.date}</td>
              <td class="border-b px-4 py-2 text-center">{appointment.time}</td>
              {#each appointment.treatments as element}
            <li>{element.english_name}</li>
          {/each}
              <td class="border-b px-4 py-2 text-center">${appointment.price}</td>
              <td class="border-b px-4 py-2 text-center">{appointment.extraComments}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <p>No appointments today.</p>
  {/if}
</main>