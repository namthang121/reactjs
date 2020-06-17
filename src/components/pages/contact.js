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
                    <meta name="description" content="Khuyến Mãi Lớn từ 20 đến 35%
Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828"></meta>
                    <meta property="og:title" content="Khuyến Mãi Lớn từ 20 đến 35%
Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828" />
                    <meta property="og:description" content="Khuyến Mãi Lớn từ 20 đến 35%
Sản Xuất, Lắp Đặt Cửa Cuốn Mitadoor, Cửa Kéo Đài Loan, Cửa Cuốn Công Nghệ Đức. Khảo Sát Lắp Đặt Tận Nơi. Cam Kết Không Phát Sinh. Bảo Hành 60 tháng. Giá Cạnh Tranh. Tư Vấn Nhiệt Tình. Uy tín - Chuyên Nghiêp. Hỗ Trợ 24/7 - 0948296828" />
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
