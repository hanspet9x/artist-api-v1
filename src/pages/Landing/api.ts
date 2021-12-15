import { appUrls } from "../../services/endpoints"
import { getApi } from "../../services/http"
import { IArtists } from "../../services/interfaces/artisits";

export const getArtists = async () => {
    try {
        const data = await getApi(appUrls.getArtists) as Array<IArtists>;
        return data;
    } catch (error) {
        throw error;
    }

}