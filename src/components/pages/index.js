import React from 'react';
import Header from '../layout/header/header';
import define from '../common/define';

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div>
                 <Header></Header>
            </div>
        )
    };
}
