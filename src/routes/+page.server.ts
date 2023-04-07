import KV from "src/storage/kv";

export const load = async (request) => {
    // const v = await KV.get(request, "aaa");
    const v = {
        list: [
            {
                title: "aaa"
             }, 
             {
                title:"bbb"
             }, 
             {
                title: "ccc"
             }
        ],
        ip: request.getClientAddress(),
    }
    
    return v;
}