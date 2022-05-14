import React from "react";
import { Link } from "react-router-dom";
import * as Style from './style';

export default ()=>{
    return (
        <Style.Container>
            <nav>
                <Style.Menu>
                    <Link to="">
                        <Style.MenuItem>Home</Style.MenuItem>
                    </Link>
                </Style.Menu>
            </nav>
        </Style.Container>
    )
}