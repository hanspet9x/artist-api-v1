import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { alert } from '../../components/Dialog';
import { IRootState } from '../../redux/interface';
import { IAlbulms } from '../../services/interfaces/albums';
import { ITweetPost } from '../../services/interfaces/tweets';
import ArtistService from './action';
import './SelectedArtist.scss';

function SelectedArtists() {
    const artist = useSelector((state: IRootState) => state.artists.selected);
    const [data, setData] = useState({albums: [] as IAlbulms[], tweets: [] as ITweetPost[]})

    useEffect(() => {
        (async() => {
            try {
                const nData = await Promise.all([
                    ArtistService.getAlbums(artist.id),
                    ArtistService.getTweets(artist.email)
                ])
                
                setData({albums: nData[0], tweets: nData[1]});

            } catch (error: any) {
               alert(error.message); 
            }
        })();
    }, []);

    return (
        <div className="selected-artist">
            <h1>{artist.name}</h1>
            <div className="wrapper">
                <h2>Albums</h2>
                <table className="albums">
                    {data.albums.map((album, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{album.title}</td>
                        </tr>
                    ))}
                </table>
                <hr />
                <div className="tweets">
                    {data.tweets.length ? data.tweets.map((tweet, index) => (
                        <div key={index} style={{marginBottom: 5}}>
                            {tweet.body}
                        </div>
                    )): "No Tweets"}
                </div>
            </div>
        </div>
    );
}

export default SelectedArtists;