import type { RequestHandler } from "@sveltejs/kit";
import KV from "../../../storage/kv";

export const GET: RequestHandler = async({request, platform}) => {
    await KV.put(platform, "aaa", "Nana");

    return new Response(String(Math.random()));
};