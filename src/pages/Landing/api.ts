import { appUrls } from "../../services/endpoints"
import { getApi } from "../../services/http"
import { IArtists } from "../../services/interfaces/artisits";

export const getArtists = async () => {
    try {
        const res = await getApi(appUrls.getArtists) as Array<IArtists>;
    } catch (error) {
        return Promise.reject()
    }

}