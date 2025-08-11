<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  let services = [];

let searchTitle = '';
let searchCategory = '';

  let isEditing = false;
  let currentService = null;
  let isAdding = false; // Track if we are adding a new service
  let newService = {
    english_name: '',
    chinese_name: '',
    category: '',
    description: '',
    starting_price: 0
  };

  function logout() {
localStorage.removeItem('token');
window.location.href = '/admin';

}

$: filteredServices = services.filter(service =>
  service.english_name.toLowerCase().includes(searchTitle.toLowerCase()) &&
  service.category.toLowerCase().includes(searchCategory.toLowerCase())
);

//on mount function that fetches the data
  onMount(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/admin');
      return;
    }

    const res = await fetch('http://localhost:3000/serviceManagement', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      window.location.href = '/admin';
      return;
    }

    if (!res.ok) {
      throw new Error('Failed to load services data');
    }

    services = await res.json();
    console.log('Fetched services data:', services);
  });

  //add service
const addService = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/admin';
    return;
  }

  const res = await fetch('http://localhost:3000/serviceManagement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newService),
  });

  if (res.ok) {
    const addedService = await res.json();
    services.push(addedService); // Add the new service to the list
    // services = [...services, addedService];
    isAdding = false;
    console.log('New service added successfully');
  } else {
    console.error('Failed to add service');
  }
};


  //function to edit services
  //start edit
   function editService(service) {
    currentService = { ...service }; // Clone the service to edit
    isEditing = true;
  }

  //cancel edit
    function cancelEdit() {
    isEditing = false;
    currentService = null;
  }

  //send it to BE
  async function updateService() {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/admin';
      return;
    }

    const res = await fetch(`http://localhost:3000/serviceManagement/${currentService._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(currentService),
    });
    if (res.ok) {
      // Update the local list with the updated service
      services = services.map(service =>
        service._id === currentService._id ? currentService : service
      );
      isEditing = false;
      console.log('Service updated successfully');
    } else {
      console.error('Failed to update service');
    }
  }


  // Function to delete service
  async function deleteService(serviceId) {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/admin';
      return;
    }

    // Send DELETE request to backend
    const res = await fetch(`http://localhost:3000/serviceManagement/${serviceId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
// Remove the service from the local list if deletion was successful
      services = services.filter(service => service._id !== serviceId);
      console.log('Service deleted successfully');
    } else {
      console.error('Failed to delete service');
    }
  }
</script>

 <div class="flex justify-end items-center mt-3 mr-4">
    <a href="#" on:click={logout} class="text-red-600 hover:text-red-800">Log Out</a>
  </div>

  <div class="flex justify-center my-4">
  <div class="flex flex-col space-y-2 w-full max-w-xs">
    <input
      type="text"
      placeholder="Search by English name"
      bind:value={searchTitle}
      class="border p-2 rounded"
    />
    <input
      type="text"
      placeholder="Search by category"
      bind:value={searchCategory}
      class="border p-2 rounded"
    />
  </div>
</div>
<div class="flex justify-center my-3">
 <button on:click={() => isAdding = true} class="px-4 py-2 text-white">Add New Service</button>
 </div>

 <!--mx auto = apply margins to left and righ, add 1rem of padding to the top-->
 <div class="container mx-auto py-4 overflow-x-auto">
  <table class="min-w-full border-collapse border-l border-r border-black">
    <thead>
      <tr class="bg-gray-100 border-t border-black">
         <th class="border-b px-4 py-2">Action</th>
         <th class="border-b px-4 py-2">English Name</th>
         <th class="border-b px-4 py-2">Chinese Name</th>
         <th class="border-b px-4 py-2">Category</th>
        <th class="border-b px-4 py-2">Description</th>
         <th class="border-b px-4 py-2">Starting Price</th>
        
      </tr>
    </thead>
    <tbody>
      {#each filteredServices as service}
         <tr class="bg-white hover:bg-gray-50">
           <td class="text-center space-y-2 border-b px-4 py-2">
           <button on:click={() => editService(service)}>Update</button>
           <button on:click={() => deleteService(service._id)}>Delete</button></td>
          <td class="border-b px-4 py-2 text-center">{service.english_name}</td>
          <td class="border-b px-4 py-2 text-center">{service.chinese_name}</td>
          <td class="border-b px-4 py-2 text-center">{service.category}</td>
          <td class="border-b px-4 py-2 text-center">{service.description}</td>
          <td class="border-b px-4 py-2 text-center">${service.starting_price}</td>

        </tr>
      {/each}
    </tbody>
  </table>
  </div>


<!--UPDATE -->
  {#if isEditing}
  <div class="modal">
    <div class="modal-content"> 
      <label for ="modal-title" style="color: #941117;">Edit Service</label>
      
      <form on:submit|preventDefault={updateService}>
        <label for="english_name">English Name:</label>
        <input id="english_name" bind:value={currentService.english_name} required />
        
        <label for="chinese_name">Chinese Name:</label>
        <input id="chinese_name" bind:value={currentService.chinese_name} required />
        
        <label for="category">Category:</label>
        <input id="category" bind:value={currentService.category} required />
        
        <label for="description">Description:</label>
        <textarea id="description" bind:value={currentService.description}></textarea>
        
        <label for="starting_price">Starting Price:</label>
        <input id="starting_price" bind:value={currentService.starting_price} required />
        
        <button type="submit">Save</button>
        <button type="button" on:click={cancelEdit}>Cancel</button>
      </form>
    </div>
  </div>
{/if}


<!--Adding-->
{#if isAdding}
  <div class="modal">
    <div class="modal-content">
      <label for ="modal-title" style="color: #941117;">Add New Service</label>
      <form on:submit|preventDefault={addService}>
        <label for="english_name">English Name:</label>
        <input id="english_name" bind:value={newService.english_name} required />
        
        <label for="chinese_name">Chinese Name:</label>
        <input id="chinese_name" bind:value={newService.chinese_name} required />
        
        <label for="category">Category:</label>
        <input id="category" bind:value={newService.category} required />
        
        <label for="description">Description:</label>
        <textarea id="description" bind:value={newService.description}></textarea>
        
        <label for="starting_price">Starting Price:</label>
        <input id="starting_price" bind:value={newService.starting_price} required />
        
        <button type="submit">Add Service</button>
        <button type="button" on:click={() => isAdding = false}>Cancel</button>
      </form>
    </div>
  </div>
{/if}


<!-- modal css -->
<style>
  label {

    color:black;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
     display: flex;
  flex-direction: column;
  align-items: center; 
  border: 2px solid #941117;
  }
  input, textarea {
    background-color: #FFB84D;
    width: 100%;
    margin: 5px 0 15px 0;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    margin-right: 10px;
  }

 
  </style>