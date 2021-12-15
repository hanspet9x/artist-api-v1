export interface IAlbulms {
    "userId": number,
    "id": number,
    "title": string
}

export interface IAlbulmPhotos {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}