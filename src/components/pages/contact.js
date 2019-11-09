import React from 'react';
import Header from '../layout/header/header';

import define from '../common/define';
import Utility from '../common/utility';
import "./main.css";
import Footer from "../layout/footer/footer";
import ContactLayout from "../layout/contactLayout/contactLayout";
export default class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div>
                <Header></Header>
                <ContactLayout></ContactLayout>
                <Footer />
            </div>
        )
    };
}