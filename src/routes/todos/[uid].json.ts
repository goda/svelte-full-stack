import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const del: RequestHandler = (requestEvent) => {
    return api(
        requestEvent
    );
}

export const post: RequestHandler = (requestEvent) => {
    // return api(
    //     requestEvent
    // );
    return {
        status: 200,
        body: requestEvent.params.uid
    }
}