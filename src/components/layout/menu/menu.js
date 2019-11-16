import React from 'react';
import ReactDOM from 'react-dom';
import './menu.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                <ul className="list-group">
                    <li className="menu-lv1 list-group-item title">DANH SÁCH SẢN PHẨM</li>
                    {this.props.categoty.map((each)=> {
                        return(
                            <li className="laptop list-group-item menu-lv1"><a href="">{each.name}</a></li>
                        )
                    }) }
                </ul>
            </div>
        );
    }
}