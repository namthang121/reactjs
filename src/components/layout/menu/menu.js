import React from 'react';
import {Link} from "react-router-dom";
import './menu.css';

export default class Menu extends React.Component {

    render() {
        return (
            <div className="">
                <ul className="list-group">
                    <li className="menu-lv1 list-group-item title">DANH SÁCH SẢN PHẨM</li>
                    {this.props.categoty.map((each)=> {
                        return(
                            <li className="laptop list-group-item menu-lv1"><Link to={"/danh-muc/" + each.id}>{each.name}</Link></li>
                        )
                    }) }
                </ul>
            </div>
        );
    }
}
