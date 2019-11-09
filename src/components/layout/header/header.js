import React from 'react';
import './header.css'
import Utility from "../../common/utility";

function Header() {
    return (
        <div className="set-header container col-md-12">
            <div className="row">
                <div className="set-icon col-md-3"></div>
                <div className="head-content col-12 col-md-6">
                    <div className="head-tut margin-15 text-center display-mobile-none col">
                        <a href="/">Hướng Dẫn mua Hàng |</a>
                        <a href="/"> Hướng Dẫn thanh toán |</a>
                        <a href="/"> Chính Sách đổi trả |</a>
                        <a href="/"> Đăng nhập/Đăng ký</a>
                    </div>
                    <div className="head-search margin-15 col">
                        <div className="row set-input-search">
                            <div className="input-group md-form form-sm form-1 col-md-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text purple lighten-3" id="basic-text1">
                                        Tìm Kiếm
                                    </span>
                                </div>
                                <input className="form-control my-0 py-1" type="text" placeholder="Tìm em đi..."/>
                            </div>
                            <div className="head-contact col-md-6">
                                <div className="hotline">Hotline:
                                    <a href={"tel:" + Utility.getContact().phoneNumber}>
                                    <span>{Utility.getContact().phoneNumber}</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="set-icon col-md-3"></div>
            </div>
        </div>
    )
}

export default Header;