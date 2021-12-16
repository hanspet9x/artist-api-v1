import { appUrls } from "../../services/endpoints"
import { getApi, postApi } from "../../services/http"
import { IAlbulmPhotos, IAlbulms } from "../../services/interfaces/albums";
import { ITweetPost } from "../../services/interfaces/tweets";
import Storage from "../../utils/storage";

export default class ArtistService {
    static tweetKey = "tweets";
    static async getAlbums(artistId: number) {
        try {
            const albums = await getApi(appUrls.getArtistsAlbums) as IAlbulms[];
            return albums.filter(album => album.userId === artistId);

        } catch (error) {
            throw error;
        }

    }

    static async getAlbumPhotos(albumId: number) {
        try {
            return await getApi(appUrls.getAlbumPhotos(albumId)) as IAlbulmPhotos[];
        } catch (error) {
            throw error;
        }
    }

    static async getTweets(artistEmail: string) {
        try {
            const tweets = await getApi(appUrls.getAllTweets) as ITweetPost[];
            let apiTweets = tweets.filter(tweet => tweet.email === artistEmail);
            const storedTweets = Storage.getObject<ITweetPost[]>(ArtistService.tweetKey);

            if (storedTweets) {
                apiTweets = storedTweets.concat(apiTweets);
            }
            return apiTweets;
        } catch (error) {
            throw error;
        }
    }

    static async addTweet(tweet: ITweetPost) {
        try {
            const response = await postApi(appUrls.addTweet, tweet);
            Storage.prepend(ArtistService.tweetKey, response);
            return tweet;
        } catch (error) {
            throw error;
        }

    }

    static async updateTweet(tweet: ITweetPost) {
        try {
            //put api not working as intended. Source: backend
            // const response = await postApi(appUrls.updateTweet(tweetId), tweet, "PUT");
            let savedTweet = Storage.getObject<ITweetPost[]>(ArtistService.tweetKey);
            if (savedTweet) {
                savedTweet = savedTweet.map(nTweet => {
                    if (nTweet.id === tweet.id) {
                        return tweet;
                    }
                    return nTweet;
                });
                Storage.set(ArtistService.tweetKey, savedTweet);
            }
            return tweet;
        } catch (error) {
            throw error;
        }
    }

    static async deleteTweet(tweetId: number) {
        try {
            //delete api not working as intended. Source: backend;
            //await getApi(appUrls.deleteTweet(tweetId), "DELETE");
            const data = Storage.getObject<ITweetPost[]>(ArtistService.tweetKey);
            if (data) {
                const filtered = data.filter(tweet => tweet.id !== tweetId);
                Storage.set(ArtistService.tweetKey, filtered);
            }
        } catch (error) {
            throw error;
        }
    }
}
