import React from 'react';
import './Landing.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IReducerActions } from '../../redux/interface';
import { ARTISTS } from '../../redux/action';
import { getArtists } from './api';
function Landing() {
    const [loaded, setLoaded] =useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        (async () => {
            try {
                const artistsData = await getArtists();
                dispatch({type: ARTISTS, payload: artistsData} as IReducerActions);
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