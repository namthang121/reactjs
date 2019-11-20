import React from 'react';
import './footer.css';
import Utility from "../../common/utility";


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                <div className="footer-center">
                    <div className="container">
                        <div className="row">
                            {/*<div className="logo-foot pull-left">*/}

                            {/*    <a href="https://cuacuonkimthanhphat.com/" className="custom-logo-link" rel="home"*/}
                            {/*       itemProp="url"><img width="150" height="70"*/}
                            {/*                           src="https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cropped-LOGO2.png"*/}
                            {/*                           className="custom-logo"*/}
                            {/*                           alt="Cửa Cuốn Cửa Kéo Kim Thành Phát – Cửa Cuốn Giá Rẻ Tp.HCM"*/}
                            {/*                           itemProp="logo" /></a>*/}
                            {/*</div>*/}
                            {/*<ul className="share pull-right">*/}
                            {/*    <li><a href="https://www.facebook.com/dichvuquangcaogooglevn/" className="sh-face"></a>*/}
                            {/*    </li>*/}
                            {/*    <li><a href="" className="sh-twi"></a></li>*/}
                            {/*    <li><a href="" className="sh-google"></a></li>*/}
                            {/*    <li><a href="" className="sh-you"></a></li>*/}
                            {/*</ul>*/}
                            <div className="dia-chi col-12">
                                <div className="set-dia-chi">
                                    <p>
                                        <strong> CÔNG TY TNHH ABC </strong>
                                        <br/><br/>
                                        {
                                            Utility.getContact().address.map(function (each, i) {
                                                return(
                                                    <span>
                                                        - Cở Sở {i+1}: {each}
                                                        <br/><br/>
                                                    </span>
                                                    )
                                            })
                                        }
                                        {
                                            Utility.getContact().phoneNumber.map(function (each, i) {
                                                return(
                                                    <span>
                                                       <strong>Hotline {i + 1}:</strong>
                                                        {each}<br/><br/>
                                                    </span>
                                                )
                                            })
                                        }
                                                        <strong>Email: </strong>
                                        {Utility.getContact().email}

                                    </p>
                                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
