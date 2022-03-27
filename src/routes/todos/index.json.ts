import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in a database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler = async (request) => {
    let formData = await request.request.formData();
    todos.push({
        created_at: new Date(),
        text: formData.get("text").toString(),
        done: false
    });
    
    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}