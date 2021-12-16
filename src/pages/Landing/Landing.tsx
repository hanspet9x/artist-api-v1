import React from 'react';
import './Landing.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArtists } from './action';
import ArtistAction from '../../redux/artists/action';
import { Link } from 'react-router-dom';
import { ARTISTS_ROUTE } from '../../routes';
function Landing() {
    const [loaded, setLoaded] =useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        (async () => {
            try {
                const artistsData = await getArtists();
                dispatch(ArtistAction.setArtists(artistsData));
                setLoaded(true);
            } catch (error) {
                
            }
        })();
    });

    return (
        <div>
            <h1>Chocolate City Artists.</h1>
            {loaded ? (
                <Link to={ARTISTS_ROUTE}>
                    <button>View Artists</button>
                </Link>
            ) : "Loading.."}
        </div>
    );
}

export default Landing;