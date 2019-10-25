import React from 'react';
import Header from '../layout/header/header';
import Menu from '../layout/menu/menu';
import SlideShow from '../layout/slideShow/slideshow';
import Tab from '../layout/tab/tab';
import define from '../common/define';
import Utility from '../common/utinity';
import "./main.css";
import NewsFeed from "../layout/newsFeed/newsFeed";
import Footer from "../layout/footer/footer";
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div>
                <Header></Header>
                <div className="container show">
                    <div className="row">
                        <div className="col-md-3 menu">
                            <Menu></Menu>
                        </div>
                        <div className="col-md-7 slide">
                            <SlideShow input={define.LIST_MENU}
                                       ratio={'3:2'}
                                       mode={'automatic'}
                                       timeout={'3000'}
                            />
                        </div>
                        <div className="col-md-3 "></div>
                    </div>
                </div>
                <Tab category={Utility.getCategory()} products= {Utility.getAllProduct()}/>
                <NewsFeed />
                <Footer />
            </div>
        )
    };
}
