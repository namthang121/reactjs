import React from 'react';
import Header from '../layout/header/header';
import "./main.css";
import Footer from "../layout/footer/footer";
import ContactLayout from "../layout/contactLayout/contactLayout";
import {Helmet} from "react-helmet";

export default class Contact extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>Liên Hệ | Cửa Cuốn Hạt Dẻ</title>
                    <meta name="description" content=""></meta>
                </Helmet>
                <Header></Header>
                <div className="container">
                    <ContactLayout></ContactLayout>
                </div>
                <Footer/>
            </div>
        )
    };
}
