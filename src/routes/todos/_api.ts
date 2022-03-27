// import type { RequestEvent } from "@sveltejs/kit";

import type { RequestEvent } from "@sveltejs/kit/types/internal";

// TODO: Persist in a database
let todos: Todo[] = [];


export const api = (reqEvent: RequestEvent, todo?: Todo) => {
    let body = {};
    let status = 500;

    switch (reqEvent.request.method.toUpperCase()){
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(todo);
            body = todo;
            status = 201;
        case "DELETE":
            todos = todos.filter(todo => todo.uid !== reqEvent.params.uid)
            status = 200;
            break;
        default:
            break;

    }

    if(reqEvent.request.method.toUpperCase() !== 'GET'){
        return {
            status: 303,
            headers: {
                location: "/"
            }
        };
    }
    return {
        status,
        body
    }
}