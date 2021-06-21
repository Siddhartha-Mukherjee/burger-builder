
import React, { Component } from 'react';

import Aux from '../../hoc/Aus';
import Builder from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Burger/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchaseable: sum> 0});
    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        
        updateIngredients[type] = updateCount;
        const  priceAddition = INGREDENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice  = oldPrice + priceAddition;

        this.setState({
            totalPrice: this.totalPrices(newPrice),
            ingredients: updateIngredients
        })

        this.updatePurchaseState(updateIngredients);
    } 

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }

        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        
        updateIngredients[type] = updateCount;
        const  priceDeduct = INGREDENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice  = oldPrice + priceDeduct;

        this.setState({
            totalPrice: this.totalPrices(newPrice),
            ingredients: updateIngredients
        })

        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    totalPrices = (prices) => {
        return Math.round(prices*100)/100;
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };


        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                    <OrderSummary 
                    ingredients={this.state.ingredients} 
                    price={this.state.totalPrice}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler} />
                </Modal>
                <Builder ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientsAdded={this.addIngredientHandler} 
                ingredientsRemove={this.removeIngredientHandler} 
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}
                prices={this.state.totalPrice} />

            </Aux>
        )

    }
    
}

export default BurgerBuilder;