import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const del: RequestHandler = (reqEvent) => {
    return api(
        reqEvent
    );
}

export const patch: RequestHandler =  async (reqEvent) => {
    let formData = await reqEvent.request.formData();
    let todoItem: Partial<Todo> = {
        text: formData.get("text").toString()
    }
    return api(
        reqEvent, todoItem
    );
}