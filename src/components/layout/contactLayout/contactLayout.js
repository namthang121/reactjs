import React from 'react';
import './contact.css';
import Utility from "../../common/utility";

export default class ContactLayout extends React.Component {


    render() {
        return (

            <section className="page-breadcrumb">
                <ol className="breadcrumb">
                    <li><a href="/">Trang chủ </a></li>
                    <li className="active">Liên hệ</li>
                </ol>
                <div className="h_c">
                    <div>
                        <p><strong className="text-red"> {Utility.getContact().name.toUpperCase()} </strong><br/><br/>
                            {
                                Utility.getContact().address.map((each, i)=>{
                                    return(
                                        <span>
                                            - Cở Sở {i + 1}: {each}<br/><br/>
                                        </span>
                                    )
                                })
                            }
                            <strong className="text-red" >Hotline:</strong> {Utility.getContact().phoneNumber[0] + " - " + Utility.getContact().phoneNumber[1]}
                            <strong className="text-red" > Email: </strong> {Utility.getContact().email}</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.869667916378!2d106.68192331433704!3d10.821284661324261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e4ec80a697%3A0xaf82c6292ffd6bf5!2zNTY2LCA1OSBOZ3V54buFbiBUaMOhaSBTxqFuLCBwaMaw4budbmcgNCwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1574257022280!5m2!1svi!2s"
                            width="100%" height="400px" frameBorder="0"  allowFullScreen="allowfullscreen" />

                    </div>
                </div>
            </section>

        );
    }
}
