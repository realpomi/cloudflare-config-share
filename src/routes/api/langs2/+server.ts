import type { RequestHandler } from "@sveltejs/kit";
import KV from "../../../storage/kv";

export const GET: RequestHandler = async({request, platform}) => {
    const v = await KV.get(platform, "aaa");


    return new Response(String(Math.random()) + v);
};