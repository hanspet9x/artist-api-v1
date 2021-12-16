import { appUrls } from "../../services/endpoints"
import { getApi } from "../../services/http"
import { IArtist } from "../../services/interfaces/artisits";

export const getArtists = async () => {
    try {
        const data = await getApi(appUrls.getArtists) as Array<IArtist>;
        return data;
    } catch (error) {
        throw error;
    }

}