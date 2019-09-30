import React from 'react';
import ReactDOM from 'react-dom';
import './newsFeed.css';

export default class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className="container">
               <section className="row">
                   <div className="col-lg-9 col-md-8 col-sm-7 col-xs-6 tin-hot">
                       <div className="panel">
                           <div className="panel-heading">
                               Tin Mới nhất
                           </div>
                           <ul className="list-group">
                               <li className="list-group-item">
                                   <div className="media">
                                       <a href="https://cuacuonkimthanhphat.com/nhung-ung-dung-thong-minh-cua-cua-cuon-tu-dong-trong-doi-song/"
                                          className="pull-left">
                                           <img width="150" height="150"
                                                src="https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9-150x150.jpg"
                                                className="media-object wp-post-image" alt=""
                                                srcSet="https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9-150x150.jpg 150w, https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9-180x180.jpg 180w, https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-9-300x300.jpg 300w"
                                                sizes="(max-width: 150px) 100vw, 150px" /> </a>
                                       <div className="media-body">
                                           <a href="https://cuacuonkimthanhphat.com/nhung-ung-dung-thong-minh-cua-cua-cuon-tu-dong-trong-doi-song/"
                                              className="media-heading">Những ứng dụng thông minh của cửa cuốn tự động
                                               trong đời sống</a>
                                           <p className="media-content">
                                               Cửa cuốn tự động và ứng dụng trong đời sống
                                               Sự xuất hiện rộng rãi của cửa cuốn tự động trong thời gian qua... </p>
                                           <a href="https://cuacuonkimthanhphat.com/nhung-ung-dung-thong-minh-cua-cua-cuon-tu-dong-trong-doi-song/"
                                              className="xem-tiep">Xem tiếp</a>
                                       </div>
                                   </div>
                               </li>
                               <li className="list-group-item">
                                   <div className="media">
                                       <a href="https://cuacuonkimthanhphat.com/nhung-luu-y-khi-su-dung-cua-cuon-tu-dong/"
                                          className="pull-left">
                                           <img width="150" height="150"
                                                src="https://cuacuonkimthanhphat.com/wp-content/uploads/2019/04/cua-cuon-dai-loan-7-150x150.jpg"
                                                className="media-object wp-post-image" alt=""
                                                sizes="(max-width: 150px) 100vw, 150px" /> </a>
                                       <div className="media-body">
                                           <a href="https://cuacuonkimthanhphat.com/nhung-luu-y-khi-su-dung-cua-cuon-tu-dong/"
                                              className="media-heading">Những lưu ý khi sử dụng cửa cuốn tự động</a>
                                           <p className="media-content">
                                               Với sự phổ biến của cửa cuốn tự động, chúng ta dễ dàng gặp cửa cuốn tại
                                               các công trình từ nhà xưởng đến... </p>
                                           <a href=""
                                              className="xem-tiep">Xem tiếp</a>
                                       </div>
                                   </div>
                               </li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-4 col-sm-5 col-xs-6 mang-xh">
                       <div className="panel">
                           <div className="panel-heading">
                               Mạng xã hội
                           </div>
                           <div className="panel-body">
                               <div className="fb-like-box fb_iframe_widget" fb-xfbml-state="rendered">
                                   <span ></span>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>

           </div>
        );
    }
}