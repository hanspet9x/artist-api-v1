import React from 'react';
import './Landing.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getArtists } from './api';
import ArtistAction from '../../redux/artists/action';
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
            Welcome.
            {loaded ? <button>Access</button> : "Loading.."}
        </div>
    );
}

export default Landing;