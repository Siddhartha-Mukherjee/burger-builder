import React from 'react';

import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' }
    ]

    return(
        <div className="BuildControls" >
            <p> Current price <strong> {props.prices} </strong>  </p>
           {controls.map(ctrl => {
               return <BuildControl key={ctrl.label} label={ctrl.label}
                added={ () => props.ingredientsAdded(ctrl.type) } 
                remove={() => props.ingredientsRemove(ctrl.type) }
                disabled={props.disabled[ctrl.type]} />
           })}
            <button className="OrderButton"
                disabled={!props.purchaseable}
                onClick={props.ordered} > ORDERED NOW </button>
        </div>
    )
}


export default BuildControls;