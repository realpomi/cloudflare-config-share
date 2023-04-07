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
    },
    list: async(platform:any, prefix?:string, limit?:number, cursor?:string) => {
        let list = null;
        if( dev ) {
            // await client.connect();
            // await client.set(key, value);            
            // await client.disconnect();
            list = {
                "keys": [
                  {
                    "name": "foo",
                    "expiration": 1234,
                    "metadata": { "someMetadataKey": "someMetadataValue" }
                  }
                ],
                "list_complete": false,
                "cursor": "6Ck1la0VxJ0djhidm1MdX2FyD"
              }              
        } else {
            list = await platform?.env.ENV_DATA.list({prefix, limit, cursor});
        }

        return list;
    }
}

export default KV;