import { appUrls } from "../../services/endpoints"
import { getApi, postApi } from "../../services/http"
import { IAlbulmPhotos, IAlbulms } from "../../services/interfaces/albums";
import { ITweet, ITweetPost } from "../../services/interfaces/tweets";

export const getArtistAlbum = () => {

}

export const getArtistTweets = () => {

}

export default class ArtistService {

    static async getAlbums(artistId: number){
        try {
            const albums = await getApi(appUrls.getArtistsAlbums) as IAlbulms[];
            return albums.filter( album => album.userId === artistId);
            
        } catch (error) {
            throw error;
        }

    }

    static async getAlbumPhotos (albumId: number) {
        try {
            return await getApi(appUrls.getAlbumPhotos(albumId)) as IAlbulmPhotos[];
        } catch (error) {
            throw error;
        }
    }

    static async getTweets(artistEmail: string){
        try {
            const tweets = await getApi(appUrls.getAllTweets) as ITweet[];
            return tweets.filter(tweet => tweet.email === artistEmail);
        } catch (error) {
            throw error;
        }
    }

    static async addTweet(tweet: ITweetPost){
        const response = await postApi(appUrls.addTweet, tweet);
    }

    static updateTweet(){

    }

    static deleteTweet(){

    }
}
