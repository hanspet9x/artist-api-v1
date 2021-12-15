export interface IArtists {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": IArtistAddress
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

interface IArtistAddress {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
        "lat": number,
        "lng": number
    }
}