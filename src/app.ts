

import * as http from "http";


import {getFilterEpisodes, getListEpisodes} from "./controllers/podscasts-controllers";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";



export const app = async (req: http.IncomingMessage, res: http.ServerResponse)=>{

    // queryString
    const baseUrl = req.url?.split("?")[0];

    // Listar Episodes
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    // Filtrar Episodes
    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODES) {
        await getFilterEpisodes(req, res);
    }
};
