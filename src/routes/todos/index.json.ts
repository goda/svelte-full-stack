import type { RequestHandler } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit/types/internal";
import { api } from './_api';

export const get: RequestHandler = (request: RequestEvent) => {
    return api(request);
}

export const post: RequestHandler = async (reqEvent: RequestEvent) => {
    let formData = await reqEvent.request.formData();
    let todo: Todo = {
        uid: `${Date.now()}`, // TODO: Replace with UID from database
        created_at: new Date(),
        text: formData.get("text").toString(),
        done: false
    };
    
    return api(reqEvent, todo);
}