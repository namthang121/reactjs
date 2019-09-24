import React from 'react';
import ReactDOM from 'react-dom';
import './menu.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                <ul className="list-group">
                    <li className="menu-lv1 list-group-item title">DANH SÁCH SẢN PHẨM</li>
                    <li className="laptop list-group-item menu-lv1"><a
                        href="https://cuacuonkimthanhphat.com/danh-muc/sua-cua-cuon/">SỬA CỬA CUỐN</a></li>
                    <li className="laptop list-group-item menu-lv1"><a
                        href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-duc/">CỬA CUỐN ĐỨC</a></li>
                    <li className="laptop list-group-item menu-lv1"><a
                        href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-mitadoor/">CỬA CUỐN MITADOOR</a></li>
                    <li className="laptop list-group-item menu-lv1"><a
                        href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-dai-loan/">CỬA CUỐN ĐÀI LOAN</a></li>
                    <li className="laptop list-group-item menu-lv1"><a
                        href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-cong-nghe-uc/">CỬA CUỐN CÔNG NGHỆ ÚC</a>
                    </li>
                    <li className="laptop list-group-item menu-lv1"><a
                        href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-gia-re/">CỬA CUỐN GIÁ RẺ</a>
                        <div className="mega-menu">
                            <ul className="list-unstyled list-sup-lv2">
                                <li className="laptop list-group-item menu-lv2"><a
                                    href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-gia-re/cua-cuon-mac-vong/">CỬA
                                    CUỐN MẮC VÕNG</a></li>
                                <li className="laptop list-group-item menu-lv2"><a
                                    href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-gia-re/cua-cuon-song-ngang/">CỬA
                                    CUỐN SONG NGANG</a></li>
                                <li className="laptop list-group-item menu-lv2"><a
                                    href="https://cuacuonkimthanhphat.com/danh-muc/cua-cuon-gia-re/phu-kien-cua-cuon/">PHỤ
                                    KIỆN CỬA CUỐN</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="laptop list-group-item menu-lv1"><a
                        href="https://cuacuonkimthanhphat.com/danh-muc/cua-keo-dai-loan/">CỬA KÉO ĐÀI LOAN</a>
                        <div className="mega-menu">
                            <ul className="list-unstyled list-sup-lv2">
                                <li className="laptop list-group-item menu-lv2"><a
                                    href="https://cuacuonkimthanhphat.com/danh-muc/cua-keo-dai-loan/cua-keo-son-tinh-dien/">CỬA
                                    KÉO SƠN TĨNH ĐIỆN</a></li>
                                <li className="laptop list-group-item menu-lv2"><a
                                    href="https://cuacuonkimthanhphat.com/danh-muc/cua-keo-dai-loan/cua-keo-dai-loan-co-la/">CỬA
                                    KÉO ĐÀI LOAN CÓ LÁ</a></li>
                                <li className="laptop list-group-item menu-lv2"><a
                                    href="https://cuacuonkimthanhphat.com/danh-muc/cua-keo-dai-loan/cua-keo-dai-loan-khong-la/">CỬA
                                    KÉO ĐÀI LOAN KHÔNG LÁ</a></li>
                                <li className="laptop list-group-item menu-lv2"><a
                                    href="https://cuacuonkimthanhphat.com/danh-muc/cua-keo-dai-loan/phu-kien-cua-keo/">PHỤ
                                    KIỆN CỬA KÉO</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}