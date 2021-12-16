import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IArtist } from '../../services/interfaces/artisits';
import Card from '../Card/Card';
import './Artist.scss';
import ArtistAction from './../../redux/artists/action';
import { useNavigate } from 'react-router-dom';
import { SELECTED_ARTIST_ROUTE } from '../../routes';

interface IArtistProps {
    data: IArtist
}
const Artist:FC<IArtistProps> = ({data}) => {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const onSelectArtist = () => {
        dispatch(ArtistAction.selectArtist(data));
        navigate(SELECTED_ARTIST_ROUTE);
    }

    return (
        <div className="artist" onClick={onSelectArtist}>
            <Card className="artist-card">
                <h2>{data.name}</h2>
                <h4>{data.username}</h4>
                <h4>{data.username}</h4>
            </Card>
        </div>
    );
};

export default Artist;