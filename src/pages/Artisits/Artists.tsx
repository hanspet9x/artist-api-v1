
import React from 'react';
import { useSelector } from 'react-redux';
import Artist from '../../components/Artist/Artist';
import { IRootState } from '../../redux/interface';
import './Artists.scss';

function Artists() {
    const artists = useSelector((state: IRootState) => state.artists.data);
        console.log(artists);

    return (
        <div className="artists-wrapper">
            <h1>Artists</h1>
            <div className="artists">
                {artists.map((artist, index) => (
                    <Artist data={artist} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Artists;