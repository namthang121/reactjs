import React from 'react';
import Header from '../layout/header/header';
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
                <div className="container">
                    <ContactLayout></ContactLayout>
                </div>
                <Footer />
            </div>
        )
    };
}
