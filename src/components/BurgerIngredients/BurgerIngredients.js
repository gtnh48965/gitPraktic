import "./BurgerIngredients.css"
import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerIngredients =()=>{
    const [current, setCurrent] = React.useState('one');
    return (
        <main>
            <div className="container">
            <h1>Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    One
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Two
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Three
                </Tab>
            </div>
                <div>
                    <h2>Булка</h2>
                    <div className="row">
                        <div className="block">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
export default BurgerIngredients;