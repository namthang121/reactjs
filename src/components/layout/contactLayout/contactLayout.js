import React from 'react';
import './contact.css';

export default class ContactLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

                <div >
                    ở Sở 1: 222 Bình Long,P. Phú Thạnh,Q. Tân Phú, Tp HCM <br/><br/>-
                        Cở sở 2: 740 D Tỉnh Lộ 8, Tổ 7, Ấp 4, Xã Phước Vĩnh An, Củ Chi <br/><br/>
                        <strong>Hotline:</strong> 0988318 978 - 0909 732 838 -
                        <strong>Email:</strong> cuacuoncuakeokimthanhphat@gmail.com

                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.377926724789!2d106.6175233154157!3d10.782339262031464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c1ada830219%3A0x378954c6f5645f41!2zQ8ahIFPhu58gQ-G7rWEgQ3Xhu5FuIEtpbSBUaMOgbmggUGjDoXQ!5e0!3m2!1svi!2s!4v1556355735850!5m2!1svi!2s"
                            width="1100" height="450" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                </div>

        );
    }
}
