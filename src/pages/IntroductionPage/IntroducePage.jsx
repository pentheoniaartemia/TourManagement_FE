import HeaderComponent from '../../component/HeaderComponent/HeaderComponent';
import FooterComponent from '../../component/FooterComponent/FooterComponent';
import '../IntroductionPage/IntroducePage.css'

const IntroducePage = () => {
    return (
        <>
            <HeaderComponent></HeaderComponent>

            <div className="main--body">
                <div className="booking--introduction">
                    <div className="booking-introduction--container">
                        <p className="speech">Hãy yên tâm trải nghiệm du lịch vòng quanh thế giới cùng chúng tôi nhé</p>
                        <p className="word--about-us">Tour Du Lịch Sea Wonder Hàng Đầu Việt Nam</p>
                        <button>ĐẶT NGAY</button>
                    </div>
                </div>


                <div className="about-us">
                    <div className="about-us--paragraph">
                        <p className="question">Tại sao SeaWonder?</p>
                        <p className="title">Về Chúng Tôi</p>
                        <p className="paragraph">Chúng tôi là một công ty du lịch hàng đầu Việt Nam. Nhằm mang đến trải nghiệm cho khách hàng một trải nghiệm thoải mái. Chúng tôi cung cấp dịch vụ tập trung vào khách hàng, hoàn toàn minh bạch. Tất cả bạn cần làm là ngồi lại, thư giản và tận hưởng chuyến đi.</p>
                        <button className="more-info">XEM THÊM</button>
                    </div>
                    <div className="island-img"></div>
                </div>


                <div className="our-ability">
                    <div className="our-ability--container">
                        <p className="ability">TÍNH NĂNG CỦA CHÚNG TÔI</p>
                        <p className="title">Ưu điểm</p>
                        <p className="paragraph">Chúng tôi kiểm soát được lịch trình, khách sạn, chuyến bay của khách hàng một cách dễ dàng </p>
                    </div>
                </div>

 
                <div className="visit--place">
                    <p className="introduce--info">CHÚNG TÔI HƯỚNG ĐẾN HƠN 68 QUỐC GIA TRÊN THẾ GIỚI</p>
                    <p className="visit--place__title">Điểm Đến Phổ Biến</p>

                    <div className="domestic-place">
                        <p className="domestic-title">TRONG NƯỚC</p>
                        <div className="card-container card-container--domestic">
                            <div className="HCM-city card-item">
                                <p className="city--name">Hồ Chí Minh</p>
                            </div>

                            <div className="HN-city card-item">
                                <p className="city--name">Hà Nội</p>
                            </div>

                            <div className="Hue card-item">
                                <p className="city--name">Huế</p>
                            </div>

                        </div>
                    </div>

                    <div className="foreign-place">
                        <p className="foreign-title">NGOÀI NƯỚC</p>
                        <div className="card-container card-container--foreign">
                            <div className="NYC card-item">
                                <p className="city--name">New York</p>
                            </div>

                            <div className="Singapore card-item">
                                <p className="city--name">Singapore</p>
                            </div>

                            <div className="Malaysia card-item">
                                <p className="city--name">Malaysia</p>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="other--information">
                    <p className="new">MỚI</p>
                    <p className="title">Kênh</p>

                    <div className="newspaper__card--list">
                        <div className="news-item">
                            <div className="img-news VN-hotel"></div>

                            <p className="news-title">Khách sạn ở Việt Nam</p>
                            <p className="date">19/08/2023</p>

                            <p className="news-description">Với quy mô rộng lớn, phòng khách phòng ngủ tiện lợi giúp cho khách hàng cảm giác được thư giản, dễ chịu hơn.</p>

                            <button className="more-info">Xem thêm</button>
                        </div>

                        <div className="news-item">
                            <div className="img-news SGN-spa"></div>

                            <p className="news-title">Hệ thống spa ở Singapore</p>
                            <p className="date">20/07/2023</p>

                            <p className="news-description">Hệ thống spa thư giản giúp cho khách hàng cảm giác dễ chịu, thoải mái, tạo nên cảm giác thăng hoa.</p>

                            <button className="more-info">Xem thêm</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <FooterComponent/>
        </>
    )
}

export default IntroducePage;