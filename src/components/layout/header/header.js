import React from 'react';
import './header.css'
import Utility from "../../common/utility";
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchData: []};
    }

    setSearchData(data) {
        this.setState({searchData: data})
    }

    componentDidMount() {
        let self = this;
        let input = document.getElementById("search-product");
        let listSearch = document.getElementById("list-search");

        input.addEventListener("keydown", function () {
            console.log(input.value);
            let key = input.value.trim();
            if (key.length <= 0) {
                listSearch.style.display = "none";
            } else {
                let data = Utility.searchProduct(input.value);
                if (data.length > 0) {
                    listSearch.style.display = "block";
                } else {
                    listSearch.style.display = "none";
                }
                self.setSearchData(data);
            }
        })
    }

    render() {
        return (
            <div className="set-header col-md-12">
                <div className="container">
                    <div className="row">
                        <div className="set-icon col-12 col-md-2">
                            <Link to="/">
                                <img src={Utility.getUrlImage("logo1")}/>
                            </Link>
                        </div>
                        <div className="head-content col-12 col-md-8">
                            <div className="head-tut margin-15 text-center display-mobile-none col">
                                <Link to="/">Hướng Dẫn mua Hàng |</Link>
                                <Link to="/"> Hướng Dẫn thanh toán |</Link>
                                <Link to="/"> Chính Sách đổi trả |</Link>
                                <Link to="/"> Đăng nhập/Đăng ký</Link>
                            </div>
                            <div className="head-search margin-15 col">
                                <div className="row set-input-search">
                                    <div className="input-group md-form form-sm form-1 col-md-6 ">
                                        <input id="search-product" className="form-control my-0 py-1" type="text"
                                               placeholder="Tìm kiếm..."/>
                                        <div id="list-search" className="list-search col-md-12">
                                            {
                                                this.state.searchData.map((item) => {
                                                    return (
                                                        <div className="item-search">
                                                            <div className="search-icon-product">
                                                                <img src={Utility.getUrlImage(item.image[0])}/>
                                                            </div>
                                                            <div className="search-content-product">
                                                                <Link to={"/san-pham/" + item.id}>{item.name}</Link><br/>
                                                                <span>Giá : <span className="price">{item.price}</span></span>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                    <div className="head-contact col-md-6">
                                        <div className="hotline">Hotline:
                                            <a href={"tel:" + Utility.getContact().phoneNumber[0]}>
                                                <span> {Utility.getContact().phoneNumber[0]}</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="set-icon col-md-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

