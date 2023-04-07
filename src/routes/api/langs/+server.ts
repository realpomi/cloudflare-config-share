import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = (request) => {
    return new Response(String(Math.random()));
};