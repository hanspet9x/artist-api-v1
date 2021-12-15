const baseUrl = "https://jsonplaceholder.typicode.com/";
export const appUrls = {
    getArtists: baseUrl + 'users',
    getArtistAlbum: baseUrl + 'albumns',
    getAllTweets: baseUrl + 'comments',
    addTweet: baseUrl + 'comments',
    updateTweet: (commentId: number) => baseUrl + 'comments/' + commentId,
    deleteTweet: (commentId: number) => baseUrl + 'comments/' + commentId,
    getAlbumPhotos: (albulmId: number) => baseUrl + 'albulm/'+ albulmId + '/photos',

}