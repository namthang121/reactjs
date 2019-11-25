import React from 'react';
import Utility from "../../common/utility";
import './detailtProduct.css';
import {Link} from "react-router-dom";

export default class DetailtProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {img : props.data.image[0]}
    }
    componentDidMount() {

    }

    changeImg(i){
        this.setState({img : i})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div className="row">
                <div className="page-breadcrumb col-md-12">
                    <ol className="breadcrumb">
                        <li><a href="/">Trang chủ </a></li>
                        <li className="active">{this.props.data.name}</li>
                    </ol>
                </div>
                <div className="row detail col-md-12">
                    <div className="col-md-5 col-12 no-padding-right">
                        <div className="image-detail">
                            <div id="carousel-view-images" className="carousel slide" data-ride="carousel">
                                <div className="image-lag">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="item active">
                                            <img width="740" height="630"
                                                 src={Utility.getUrlImage(this.state.img)}
                                                 className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                 alt={this.props.data.name +","+ this.props.data.id}
                                                 sizes="(max-width: 740px) 100vw, 740px" /></div>
                                    </div>
                                </div>
                                <div className="img-thumbails">
                                    <div
                                        className="carousel-indicators2 owl-img-thumbail owl-carousel owl-theme">
                                        <div className="owl-wrapper-outer">
                                            <div className="owl-wrapper">
                                                {
                                                    this.props.data.image.map((i)=>{
                                                        return(
                                                            <div className="owl-item" onClick={()=> this.changeImg(i)}>
                                                                <div data-target="#carousel-view-images" data-slide-to="0"
                                                                     className="active item">
                                                                    <img width="740" height="630"
                                                                         src={Utility.getUrlImage(i)}
                                                                         alt={this.props.data.name +","+ this.props.data.id}
                                                                         className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                         sizes="(max-width: 740px) 100vw, 740px" /></div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="owl-controls clickable">
                                            <div className="owl-pagination">
                                                <div className="owl-page"><span className=""></span></div>
                                            </div>
                                            <div className="owl-buttons">
                                                <div className="owl-prev"></div>
                                                <div className="owl-next"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="row">
                            <div className="col-md-7 col-12">
                                <div className="entry-detail">
                                    <p className="title">{this.props.data.name}</p>
                                    <p></p>
                                    <p><b>Mã sản phẩm:</b></p>
                                    <p><b>Trạng thái:</b>
                                        <span className="t-blue"> Còn hàng</span></p>
                                    <p></p>
                                    <p className="price"><b>Giá bán:</b> {Utility.formatAmount(this.props.data.price)} ₫</p>
                                    <p className="price-old"><b>Giá thị trường:</b> <span>{Utility.formatAmount(this.props.data.oldPrice)}</span> ₫ </p>

                                    {/*<div className="soluong">*/}
                                    {/*    <span>Số lượng</span>*/}
                                    {/*    <span className="in-prew">-</span>*/}
                                    {/*    <input type="" value="1" id="num_ssoluong" name="quantity"*/}
                                    {/*           placeholder="" className="form-control" />*/}
                                    {/*    <span className="in-next" >+</span>*/}
                                    {/*</div>*/}
                                    <div className="option-btn pull-left">
                                        <Link to="/lien-he">
                                            <button type="submit" className="btn-detail btn-them">Liên Hệ</button></Link>
                                    </div>
                                    <div className="share-face pull-left">
                                        <div className="addthis_native_toolbox"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-12 no-padding-left">
                                <div className="lien-he-tv">
                                    <div className="title">Liên hệ tư vấn</div>
                                    <div className="content-lien-he">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <p className="lh-thanh-pho"> Hotline :</p>
                                                <span className="lh-phone">
                                                    <a href={"tel:" + Utility.getContact().phoneNumber[0]}>{Utility.getContact().phoneNumber[0]}</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
