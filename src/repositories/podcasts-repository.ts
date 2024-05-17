
import { promises } from "dns";
import fs from "fs";

import path from "path";

import {PodcastModel} from "../models/podcast-models"

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoriesPodcasts = async (podcastName?: string): Promise<PodcastModel[]> => {

    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}