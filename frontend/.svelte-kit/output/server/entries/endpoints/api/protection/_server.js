const GET = async ({ locals }) => {
  if (!locals.user) {
    console.log(loginStatus);
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  return new Response(JSON.stringify({
    loginStatus: true,
    message: "You are authorized",
    user: locals.user
  }), { status: 200 });
};
export {
  GET
};
