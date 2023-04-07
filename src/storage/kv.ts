import { dev } from "$app/environment";
// import { createClient } from "redis";

// const client = createClient();

const KV = {
    get: async(platform:any, key: string) => {
        let k:any = "";
        if( dev ) {
            // await client.connect();
            // k = await client.get(key);            
            // await client.disconnect();
        } else {
            k = await platform?.env.ENV_DATA.get(key);
        }

        return k;
    },
    put: async(platform:any, key: string, value: string) => {
        if( dev ) {
            // await client.connect();
            // await client.set(key, value);            
            // await client.disconnect();
        } else {
            await platform?.env.ENV_DATA.put(key, value);
        }
    }
}

export default KV;