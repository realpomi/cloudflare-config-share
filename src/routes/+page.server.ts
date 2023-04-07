import KV from "src/storage/kv";

export const load = async ({platform}) => {
    const list = await KV.list(platform, "env:");
    
    return list;
}