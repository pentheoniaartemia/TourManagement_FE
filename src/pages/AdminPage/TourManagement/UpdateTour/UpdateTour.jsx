import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../../../../component/HeaderComponent/HeaderComponent";
import '../UpdateTour/UpdateTour.css'
import * as TourService from '../../../../services/TourService'
import { useMutationHooks } from "../../../../hooks/useMutationHook";


const UpdateTourPage = () => {

    const navigate = useNavigate();
    const [tour, setTour] = useState([]);
    const { id } = useParams();



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
    }, [id]);

    // Cập nhật dữ liệu

    const [nameTour, setNameTour] = useState('');

    const [departurePlace, setDeparturePlace] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [adultPrice, setAdultPrice] = useState('');
    const [teenPrice, setTeenPrice] = useState('');
    const [childrenPrice, setChildrenPrice] = useState('');
    const [infantPrice, setInfantPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [transport, setTransport] = useState('');
    const [visitedPlace, setVisitedPlace] = useState('');
    const [food, setFood] = useState('');
    const [hotel, setHotel] = useState('');
    const [suitableObject, setSuitableObject] = useState('');
    const [saleDescription, setSaleDescription] = useState('');
    const [salePercent, setSalePercent] = useState('');

    useEffect(() => {
        setNameTour(tour.nameTour)
        setDepartureDate(tour.departureDate)
        setDepartureTime(tour.departureTime)
        setTravelDate(tour.travelDate)
        setAdultPrice(tour.adultPrice)
        setQuantity(tour.quantity)
    },[tour.nameTour])

    const handleOnChangeNameTour = (e) => {
        setNameTour(e.target.value)
    }

    const handleOnChangeDepartureDate = (e) => {
        setDepartureDate(e.target.value)
    }

    const handleOnChangeDepartureTime = (e) => {
        setDepartureTime(e.target.value)
    }

    const handleOnChangeTravelDate = (e) => {
        setTravelDate(e.target.value)
    }

    const handleOnChangeAdultPrice = (e) => {
        let value = e.target.value;

        // Cập nhật giá trị vào trạng thái
        setAdultPrice(value)
        
    }

    const handleOnChangeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const mutation = useMutationHooks(
        data => TourService.updateTour(id, data)
    );

    const handleUpdateTour = () => {
        mutation.mutate({
            nameTour,
            departureDate,
            departureTime,
            travelDate,
            adultPrice,
            quantity
        })
    }

    const {data, isLoading, isSuccess, isError} = mutation;

    useEffect(() => {
        if(isSuccess) {
            alert("Cập nhật thành công")
            navigate('/admin/tour-management')
        } else if(isError) {
            alert("Hiện tại đang xảy ra trục trặc!")
        }
    }, [isSuccess, isError])

    return (
        <>
            <HeaderComponent/>

            <div className="tour-detail--body-admin">
                <div className="tour-detail--information">
                    <div className="tour-info--container">
                        <p className="tour-detail-id">Mã tour: {tour._id}</p>

                        <input type="text" className="admin-tour-detail-name" value={nameTour} onChange={handleOnChangeNameTour}/>

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
                        <p className="after-sale-price"><span>{adultPrice?.toLocaleString()}</span> /khách</p>
                        <input type="text" className="after-sale-price-admin" value={adultPrice} onChange={handleOnChangeAdultPrice}/>
                    </div>

                    <div className="booking-btn--container">
                        <button className="tour-detail-update" onClick={handleUpdateTour}>Cập nhật</button>
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

                <div className="tour-detail--content-admin">
                    <div className="box-order--container">
                        <p className="date-time">Khởi hành: </p>
                        <input type="text" className="date-time-admin" value={departureDate} onChange={handleOnChangeDepartureDate}/>

                        <p className="gathering-time">Tập trung: </p>
                        <input type="text" className="gathering-time-admin" value={departureTime} onChange={handleOnChangeDepartureTime}/>

                        <p className="count-day">Thời gian: </p>
                        <input type="text" className="count-day-admin" value={travelDate} onChange={handleOnChangeTravelDate}/>

                        <p className="gathering-place">Nơi khởi hành: {tour.departurePlace}</p>
                        <p className="count-in-stock">Số chỗ còn lại: </p>
                        <input type="text" className="quantity-admin" value={quantity} onChange={handleOnChangeQuantity}/>
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

export default UpdateTourPage