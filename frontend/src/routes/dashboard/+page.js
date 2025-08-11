 export async function load () {
  console.log("hi")
    const token = localStorage.getItem('token');

 if(!token) {

//if no token is found then redirect to login
    window.location.href = '/login';
    return;
  }

// Fetch the dashboard data from the backend using the token
  const res = await fetch('http://localhost:3000/dashboard', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    window.location.href = '/login';  // If unauthorized, redirect to login
    return;
  }

  if (!res.ok) {
    throw new Error('Failed to load dashboard data');
  }

  const data = await res.json();

  // Return the fetched data to the page
  return {
    user: data.user,
    message: data.message,
    appointments: data.appointments
  };
}



