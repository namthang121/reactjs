import React from 'react';
import Header from '../layout/header/header';
import Menu from '../layout/menu/menu';
import SlideShow from '../layout/slideShow/slideshow';
import Tab from '../layout/tab/tab';
import define from '../common/define';
import Utility from '../common/utility';
import "./main.css";
// import NewsFeed from "../layout/newsFeed/newsFeed";
import Footer from "../layout/footer/footer";
import {Helmet} from "react-helmet";

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div>
                <Helmet>
                    <title>Trang Chủ | Cửa Cuốn Hạt Dẻ</title>
                    <meta name="description" content=""></meta>
                </Helmet>
                <Header></Header>
                <div className="container show">
                    <div className="row">
                        <div className="col-md-3 menu col-12">
                            <Menu categoty={Utility.getCategory()}></Menu>
                        </div>
                        <div className="col-md-7 slide">
                            <SlideShow input={Utility.getImgSlideShow()}
                                       ratio={'3:2'}
                                       mode={'automatic'}
                                       timeout={'3000'}
                            />
                        </div>
                        {/*<div className="col-md-2 "></div>*/}
                    </div>
                </div>
                <Tab category={Utility.getCategory()} products= {Utility.getAllProduct()}/>
                {/*<NewsFeed />*/}
                <Footer />
            </div>
        )
    };
}
