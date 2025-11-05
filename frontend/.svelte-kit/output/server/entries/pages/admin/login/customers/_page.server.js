const load = async ({ fetch }) => {
  try {
    const res = await fetch("/api/appointment");
    const customers = await res.json();
    return { customers };
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};
export {
  load
};
