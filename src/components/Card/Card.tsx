import React, { FC } from 'react';
import { getClassNames } from '../../utils';
import './Card.scss';
interface ICard extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}
const Card: FC<ICard> = (props)  =>{
    return (
        <div {...props} className={getClassNames('card', props.className ?? '')}>
            {props.children}
        </div>
    );
}

export default Card;