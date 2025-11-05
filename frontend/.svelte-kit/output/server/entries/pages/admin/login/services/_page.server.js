const load = async ({ fetch }) => {
  try {
    const res = await fetch("/api/service");
    const services = await res.json();
    return { services };
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};
export {
  load
};
