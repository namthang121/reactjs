import React from 'react';
import './header.css'
import Utility from "../../common/utility";

export default class Header  extends React.Component{
    constructor(props) {
        super(props);

        this.state = {searchData : []};
    }

    setSearchData(data){
        this.setState({searchData: data})
    }

    componentDidMount() {
        let self = this;
       let input = document.getElementById("search-product");
       let listSearch = document.getElementById("list-search");

       input.addEventListener("keydown", function () {
           console.log(input.value);
           let key =  input.value.trim();
           if(key.length <= 0){
               listSearch.style.display = "none";
           }else {
               let data = Utility.searchProduct(input.value);
               if(data.length > 0){
                   listSearch.style.display = "block";
               }else{
                   listSearch.style.display = "none";
               }
               self.setSearchData(data);
           }
       })
    }

    render(){
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
                                <div className="input-group md-form form-sm form-1 col-md-6 ">
                                    <input id="search-product" className="form-control my-0 py-1" type="text" placeholder="Tìm kiếm..."/>
                                    <div id="list-search" className="list-search col-md-12">
                                        {
                                            this.state.searchData.map((item)=>{
                                                return(
                                                    <div className="item-search">
                                                        <div className="search-icon-product">
                                                            <img src={Utility.getUrlImage(item.image[0])} />
                                                        </div>
                                                        <div className="search-content-product">
                                                            <a href={"product/" + item.id}>{item.name}</a><br/>
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
}

