import { env } from '$env/dynamic/private';
import { User } from '$lib/server/model/user.js';
import { startMongo } from '$lib/server/db/mongo.js';
import { error } from '@sveltejs/kit';
import jwt from "jsonwebtoken"
const SECRET=env.SECRET
//for jwt check
export const load = async ({parent}) => {
 const { user } = await parent();
    if (!user) {
        throw error(401, 'Not logged in');
    }
     if (user.role !== 'boss') {
        throw error(403, 'Access denied: boss only');
    }
}