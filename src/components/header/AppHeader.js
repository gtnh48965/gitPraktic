import './header.css';
import React from "react";
import {BurgerIcon,ListIcon,ProfileIcon,Button} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader =()=>{
    return (
    <header>
        <div className="container">
            <div className="row">
                <div className='col' id="leftBlock">
                <a href="#">
                    <span>
                        <BurgerIcon type="primary" />
                            <p>
                            Конструктор
                            </p>
                    </span>
                </a>
                <a href="#">
                     <span>
                        <ListIcon type="primary" />
                        <p>
                            Лента заказа
                        </p>
                     </span>
                </a>
                </div>
                <img id="logo" src="/images/logo.png"/>

                <a href="#" className='col' id="rightBlock">
                    <span>
                         <ProfileIcon type="primary" />
                         <p>
                        Личный кобинет
                         </p>
                    </span>
            </a>
            </div>
        </div>
    </header>
    );
};
export default AppHeader;