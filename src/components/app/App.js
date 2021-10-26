import React from 'react';
import './App.css';
import AppHeader from "../header/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
// import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";


function App() {
  return (
      <body>
        <div className="App">
                <AppHeader/>
                <div id="position">
                        <BurgerIngredients/>
                        <BurgerIngredients/>
                        {/*<BurgerConstructor/>*/}
                </div>
        </div>
      </body>
  );
}

export default App;
