import React from 'react';
import Header from '../layout/header/header';
import Menu from '../layout/menu/menu';
import SlideShow from '../layout/slideShow/slideshow';
import Tab from '../layout/tab/tab';
import Utility from '../common/utility';
import "./main.css";
import Footer from "../layout/footer/footer";
import {Helmet} from "react-helmet";

export default class Index extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render (){
        return(
            <div>
                <Helmet>
                    <title>Trang Chủ | Cửa Cuốn Hạt Dẻ</title>
                    <meta name="description" content="Khuyến Mãi Lớn từ 20 đến 35%
Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828"></meta>
                    <meta property="og:title" content="Khuyến Mãi Lớn từ 20 đến 35%
Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828" />
                    <meta property="og:description" content="Khuyến Mãi Lớn từ 20 đến 35%
Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828" />
                </Helmet>
                <Header></Header>
                <div className="container">
                    {/*<div className=" show">*/}
                        <div className="row set-slide-mb">
                            <div className="col-md-3 col-sm-6 col-xs-12 menu">
                                <Menu categoty={Utility.getCategory()} />
                            </div>
                            <div className="col-md-7 slide">
                                <SlideShow input={Utility.getImgSlideShow()}
                                           ratio={'3:2'}
                                           mode={'automatic'}
                                           timeout={'3000'}
                                />
                            </div>
                            {/*<div className="col-md-2 "></div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="set-policy">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12 item_policy">
                                <div className="info_policy clearfix"><span
                                    className="name-icon pull-left fa fa-truck"></span>
                                    <div className="description pull-left">
                                        <h4 title="MIỄN PHÍ VẬN CHUYỂN">MIỄN PHÍ <spans className="color-policy">LẮP
                                            ĐẶT</spans></h4>
                                        <p>Sản phẩm</p></div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 item_policy">
                                <div className="info_policy clearfix"><span
                                    className="name-icon pull-left fa fa-money-bill-alt"></span>
                                    <div className="description pull-left">
                                        <h4 title="CAM KẾT CHÍNH HÃNG">CAM KẾT <spans className="color-policy">CHÍNH
                                            HÃNG</spans></h4>
                                        <p>Đảm bảo chất lượng 100%</p></div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 item_policy">
                                <div className="info_policy clearfix"><span
                                    className="name-icon pull-left fa fa-smile-wink"></span>
                                    <div className="description pull-left">
                                        <h4 title="HỖ TRỢ TƯ VẤN">HỖ TRỢ <spans className="color-policy">TƯ VẤN</spans></h4>
                                        <p>24/7</p></div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 item_policy">
                                <div className="info_policy clearfix"><span
                                    className="name-icon pull-left fa fa-phone"></span>
                                    <div className="description pull-left">
                                        <h4 title="094 829 6828">
                                            <spans className="color-policy">094 829 6828</spans>
                                        </h4>
                                        <p>Đặt hàng ngay</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tab category={Utility.getCategory()} products= {Utility.getAllProduct()}/>
                </div>
                {/*<NewsFeed />*/}
                <Footer />
            </div>
        )
    };
}
