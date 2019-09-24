import React from 'react';
import './header.css'

function Header() {
    return (
        <div className="set-header">
            <div className="row">
                <div className="set-icon col-md-3"></div>
                <div className="head-content col-md-6">
                    <div className="head-tut margin-15 text-center">
                        <a href="/">Hướng Dẫn mua Hàng |</a>
                        <a href="/"> Hướng Dẫn thanh toán |</a>
                        <a href="/"> Chính Sách đổi trả |</a>
                        <a href="/"> Đăng nhập/Đăng ký</a>
                    </div>
                    <div className="head-search margin-15">
                        <div className="row">
                            <div className="input-group md-form form-sm form-1 pl-0 col-md-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text purple lighten-3" id="basic-text1">
                                        Tìm Kiếm
                                    </span>
                                </div>
                                <input className="form-control my-0 py-1" type="text" placeholder="Tìm em đi..." />
                            </div>
                            <div className="head-contact col-md-6">
                                <div className="hotline">Hotline: <span>0988318978</span></div>
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