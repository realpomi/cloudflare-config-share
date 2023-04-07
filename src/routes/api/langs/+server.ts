import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async({request, platform}) => {
    await platform?.env.ENV_DATA.put("aaa", "active;;1");
    return new Response(String(Math.random()));
};