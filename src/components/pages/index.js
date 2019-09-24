import React from 'react';
import Header from '../layout/header/header';
import Menu from '../layout/menu/menu';
import SlideShow from '../layout/slideShow/slideshow';
import define from '../common/define';
import "./main.css";
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div>
                 <Header></Header>
                <div className="container">
                    <div className="row show">
                        <div className="col-md-3 menu">
                            <Menu></Menu>
                        </div>
                        <div className="col-md-7 slide">
                            <SlideShow input={define.LIST_MENU}
                                       ratio={`3:2`}
                                       mode={`automatic`}
                                       mode={`3000`}
                            ></SlideShow>
                        </div>
                        <div className="col-md-3 "></div>
                    </div>
                </div>
            </div>
        )
    };
}
