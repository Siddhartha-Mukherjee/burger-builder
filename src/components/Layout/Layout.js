import React from 'react';

import Aux from '../../hoc/Aus';
import Classes from './Layout.css';

const Layout = (props) => {
    
    return(
        <Aux>
            <div>
                Toolbar, Sidebar, Backdrop 
            </div>
            <main className="Content" >
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;