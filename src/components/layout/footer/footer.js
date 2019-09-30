import React from 'react';
import './footer.css';


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
                            <div className="logo-foot pull-left">

                                <a href="https://cuacuonkimthanhphat.com/" className="custom-logo-link" rel="home"
                                   itemProp="url"><img width="150" height="70"
                                                       src="https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cropped-LOGO2.png"
                                                       className="custom-logo"
                                                       alt="Cửa Cuốn Cửa Kéo Kim Thành Phát – Cửa Cuốn Giá Rẻ Tp.HCM"
                                                       itemProp="logo" /></a>
                            </div>
                            <ul className="share pull-right">
                                <li><a href="https://www.facebook.com/dichvuquangcaogooglevn/" className="sh-face"></a>
                                </li>
                                <li><a href="" className="sh-twi"></a></li>
                                <li><a href="" className="sh-google"></a></li>
                                <li><a href="" className="sh-you"></a></li>
                            </ul>
                            <div className="dia-chi">
                                <div className="set-dia-chi">
                                    <p>
                                        <strong> CÔNG TY TNHH TM DỊCH VỤ BẢO CHÂU SPORT </strong>
                                        <br/><br/>
                                            - Cở Sở 1: 222 Bình Long,P. Phú Thạnh,Q. Tân Phú, Tp HCM
                                            <br/><br/>
                                                - Cở sở 2: 740 D Tỉnh Lộ 8, Tổ 7, Ấp 4, Xã Phước Vĩnh An, Củ Chi
                                                <br/><br/>
                                                    - Cở sở 3: 239 Tô Ký, Tân Xuân - Hóc Môn, Thành phố Hồ Chí Minh
                                                    <br/><br/>
                                                        <strong>Hotline:</strong>
                                                        0988318 978 - 0909 732 838 - ‭02862 869 978
                                                        <strong>Email:</strong>
                                                        cuacuoncuakeokimthanhphat@gmail.com
                                                    </p>
                                                    </div>

                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}