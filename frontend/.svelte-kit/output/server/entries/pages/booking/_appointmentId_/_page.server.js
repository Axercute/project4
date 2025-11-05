const load = async ({ fetch, params }) => {
  try {
    const res = await fetch(`/api/appointment/${params.appointmentId}`);
    const appointment = await res.json();
    console.log("appointment found!", appointment);
    return { appointment };
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
};
export {
  load
};
