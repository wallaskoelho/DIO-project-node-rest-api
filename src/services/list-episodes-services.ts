import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoriesPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const servicesListEpisodes = async (): Promise<FilterPodcastModel> =>{

    let responseFormat: FilterPodcastModel = {
        statusCode:0,
        body:[]
    };

    const data = await repositoriesPodcasts();

    responseFormat = {
        statusCode: data.length !==0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    }

    return responseFormat;
}