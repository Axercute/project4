// src/routes/api/protected/+server.js
export const GET = async ({ locals }) => {
    // locals.user was set in hooks.server.js after JWT verification
    if (!locals.user) {
        console.log(loginStatus)
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    return new Response(JSON.stringify({
        loginStatus:true,
        message: "You are authorized",
        user: locals.user
    }), { status: 200 });
};
