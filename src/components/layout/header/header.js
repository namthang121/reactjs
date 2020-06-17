import React from 'react';
import './header.css'
import Utility from "../../common/utility";


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchData: []};
    }

    render() {
        return (
                <div className="medium-header hidden-xs hidden-sm">
                    <div className="container">
                        <div className="wrap row">
                            <div className="logo-top col-sm-4 col-xs-12 ">
                                <div className="logo">
                                    <a href="" >
                                        <img
                                        src={Utility.getUrlImage("logoMitadoor")}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-8 col-xs-12">
                                <div className="center-text">
                                    <span className="font-16"><b>ĐẠI LÝ PHÂN PHỐI ĐỘC QUYỀN TẠI TP HCM</b></span></div>
                                {/*<div className="center-text">*/}
                                {/*    <span className="color-blue"><span className="font-24"><strong>TÂN VIỆT ĐỨC&nbsp;</strong></span></span></div>*/}
                                <div className="center-text" >
                                    <div>
                                        <strong className="font-16 color-red">Hotline: 0948.29.6828</strong></div>
                                    <div>
                                        <strong>Email: cuacuonthongminhsg@gmail.com&nbsp;</strong></div>
                                </div>
                                <div className="center-text">
                                    <strong>Địa chỉ:&nbsp;493 khu phố 2, Đường Vườn Lài, Phường An Phú Đông, Quận 12, Tp. Hồ Chí Minh</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

