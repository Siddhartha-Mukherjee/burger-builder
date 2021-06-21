import React from 'react';

import Aux from '../../../hoc/Aus';
import Button from '../UI/Modal/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey} > <span style={{textTransform: 'capitalize' }}> {igKey} </span> : {props.ingredients[igKey]} </li>
        })


    return(
        <Aux>
            <h3> Your Order </h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Total Price <strong> {props.price} </strong> </p>
            <p> Continue to checkout? </p>
            <Button btnType="Success" clicked={props.purchaseCanceled} > CANCEL </Button>
            <Button btnType="Danger"  clicked={props.purchaseContinue} > CONTINUE </Button>
        </Aux>
    )
}

export default OrderSummary;