import React, { useEffect, useState } from "react";
import '../../pages/TourDetailPage/TourDetail.css'
import HeaderComponent from '../../component/HeaderComponent/HeaderComponent';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TourDetailPage = () => {

    const navigate = useNavigate();
    const [tour, setTour] = useState([]);
    const { id } = useParams();

    // const imgTour1 = 0;
    // const imgTour2 = 0;
    // const imgTour3 = 0;
    // const imgTour4 = 0;
    // const imgTour5 = 0;

    // const imgTour1 = tour.imageTour[0];
    // const imgTour2 = tour.imageTour[1];
    // const imgTour3 = tour.imageTour[2];
    // const imgTour4 = tour.imageTour[3];
    // const imgTour5 = tour.imageTour[4];

    // if(imgTour2 == null) {
    //     imgTour2 = tour.imageTour[0];
    // } else if(imgTour3 == null) {
    //     imgTour3 = tour.imageTour[0];
    // } else if(imgTour4 == null) {
    //     imgTour4 = tour.imageTour[0];
    // } else if(imgTour5 == null) {
    //     imgTour5 = tour.imageTour[0];
    // }

    const getDetailTour = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/tour/detail-tour/${id}`);
        setTour(data?.tour);
    }

    // Chuyển imageTour từ object thành array
    const imgTour = tour.imageTour;

    const imgTourArray = [];

    for (let key in imgTour) {
        if (imgTour.hasOwnProperty(key)) {
          
          imgTourArray.push(imgTour[key]);
        }
    }

    const imgTour1 = imgTourArray[0];
    const imgTour2 = imgTourArray[1];
    const imgTour3 = imgTourArray[2];
    const imgTour4 = imgTourArray[3];
    const imgTour5 = imgTourArray[4];

    useEffect(() => {
        if (id) 
            getDetailTour();
    }, []);

    return (
        <>
            <HeaderComponent/>

            <div className="tour-detail--body">
                <div className="tour-detail--information">
                    <div className="tour-info--container">
                        <p className="tour-detail-id">Mã tour:  {tour._id}</p>

                        <p className="tour-detail-name">{tour.nameTour}</p>

                        <div className="rating-container">
                            <div className="rating-numb">
                                <p>8.5</p>
                            </div>
                            <div className="review">
                                <p className="review-cmt">Tuyệt vời</p>
                                <p className="people-interested">350 người quan tâm</p>
                            </div>
                        </div>
                    </div>

                    <div className="tour-price--container">
                        <p className="pre-sale-price">Giá: <span>4,590,000đ</span> /khách</p>
                        <p className="after-sale-price"><span>{tour?.adultPrice?.toLocaleString()}</span> /khách</p>
                    </div>

                    <div className="booking-btn--container">
                        <button className="tour-detail-booking" onClick={() => {navigate(`/booking/${tour._id}`)}}>Đặt ngay</button>
                        <button className="tour-detail-contact">Liên hệ tư vấn</button>
                    </div>
                </div>

                <div className="detail-img--container">
                    <div className="main-img" style={{
                                        backgroundImage: `url(${imgTour1})`
                                    }}>
                        
                    </div>

                    <div className="quadra-img-container">
                        <div className="double-img-left">
                            <div className="detail-first-img detail-smol-img" 
                            style={{
                                backgroundImage: `url(${imgTour2})`
                            }}></div>
                            <div className="detail-second-img detail-smol-img"
                            style={{
                                backgroundImage: `url(${imgTour3})`
                            }}></div>
                        </div>

                        <div className="double-img-right">
                            <div className="detail-third-img detail-smol-img"
                            style={{
                                backgroundImage: `url(${imgTour4})`
                            }}></div>
                            <div className="detail-fourth-img detail-smol-img"
                            style={{
                                backgroundImage: `url(${imgTour5})`
                            }}></div>
                        </div>
                    </div>
                </div>

                <div className="tour-detail--content">
                    <div className="box-order--container">
                        <p className="date-time">Khởi hành: {tour.departureDate}</p>
                        <p className="gathering-time">Tập trung: {tour.departureDate}</p>
                        <p className="count-day">Thời gian: {tour.travelDate}</p>
                        <p className="gathering-place">Nơi khởi hành: {tour.departurePlace}</p>
                        <p className="count-in-stock">Số chỗ còn lại: {tour.quantity}</p>
                    </div>

                    <div className="group-service--container">
                        <div className="service-item">
                            <div className="service-icon">Thời gian</div>

                            <p className="service-descript">{tour.travelDate}</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon">Phương tiện di chuyển</div>

                            <p className="service-descript">{tour.transport}</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon">Điểm tham quan</div>

                            <p className="service-descript">{tour.visitedPlace}</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon">Ẩm thực</div>

                            <p className="service-descript">{tour.food}</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon">Khách sạn</div>

                            <p className="service-descript">{tour.hotel}</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon">Thời gian lý tưởng</div>

                            <p className="service-descript">{tour.bestTimetogo}</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon">Đối tượng thích hợp</div>

                            <p className="service-descript">{tour.suitableObject}</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon">Ưu đãi</div>

                            <p className="service-descript">{tour.saleDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourDetailPage; 