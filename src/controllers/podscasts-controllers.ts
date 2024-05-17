
import { IncomingMessage, ServerResponse } from "http";

import {servicesListEpisodes} from "../services/list-episodes-services";
import { servicesFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-types";
import { FilterPodcastModel } from "../models/filter-podcast-model";

const defaultContent = {"Content-Type": ContentType.JSON};

export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse) =>{

    const content:FilterPodcastModel = await servicesListEpisodes();

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));
    res.end();
};



export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{

    const content: FilterPodcastModel = await servicesFilterEpisodes(req.url);
    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));
    res.end();

}