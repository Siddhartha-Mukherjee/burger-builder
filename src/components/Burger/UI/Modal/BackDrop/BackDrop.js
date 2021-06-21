import react from 'react';

import Classes from './BackDrop.css';

const BackDrop = (props) => {

    return(
        props.show? <div className="Backdrop" onClick={props.clicked} > </div> : null
    )
}

export default BackDrop;