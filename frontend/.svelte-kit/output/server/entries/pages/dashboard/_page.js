async function load() {
  console.log("hi");
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
    return;
  }
  const res = await fetch("http://localhost:3000/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (res.status === 401) {
    window.location.href = "/login";
    return;
  }
  if (!res.ok) {
    throw new Error("Failed to load dashboard data");
  }
  const data = await res.json();
  return {
    user: data.user,
    message: data.message
  };
}
export {
  load
};
