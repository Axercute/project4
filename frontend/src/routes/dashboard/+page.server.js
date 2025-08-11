
// import { redirect, error } from '@sveltejs/kit';

// export const load = async ({cookies}) => {

// const token = cookies.get('token');

// if(!token) {
//      throw redirect(302, '/admin')
// }


// //call backend dashboard API with token in authorization header
// const res = await fetch('http://localhost:3000/dashboard', {
//     headers: {
//         Authorization:  `Bearer ${token}`
//     }
// });

// if(res.status ===401){

//     throw redirect(302, '/admin');
// }

// if (!res.ok){

//     throw error(res.status, 'Failed to load dashboard data');
// }
// const data = await res.json();

// return{

//     user: data.user,
//     message: data.message
// };

// }
