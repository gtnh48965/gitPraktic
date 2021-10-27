import React from 'react';
import "./Ingredient.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredient = ({props}) => {
    return (
        <div className='card_ingredient'>
            <div className='card_ingredient__top'>
                <img className='card_ingredient__image' src={props.image} alt=""/>
                <div className='card_ingredient__price'>
                    <p className="text text_type_digits-default">{props.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <p className='card_ingredient__name text text_type_main-default'>{props.name}</p>
        </div>
    );
};

export default Ingredient;