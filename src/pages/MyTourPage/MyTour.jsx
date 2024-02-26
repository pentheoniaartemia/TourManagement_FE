import '../MyTourPage/MyTour.css'
import HeaderComponent from "../../component/HeaderComponent/HeaderComponent"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MyTourPage = () => {

    const navigate = useNavigate(); 
    const [bookedTours, setBookedTour] = useState([]);

    const getBookedTour = async (email) => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/booking/my-tour?email=${email}`);
        setBookedTour(data?.checkEmail)
    }

    useEffect(() => {
        const userData = sessionStorage.getItem('UserInfo'); 

        const userInfo = JSON.parse(userData);
        getBookedTour(userInfo.data.email)
    },[])

    const handleLogOut = () => {
        sessionStorage.removeItem('UserInfo');
        navigate('/home');
    }

    const handleBookedTour = () => {
        navigate('/user/my-tour')
    }

    const handleUserProfile = () => {
        navigate('/user/profile')
    }

    return (
        <>
            <HeaderComponent />
            <div className="user-booked--body">
                <div className="user-booked--nav">
                    <button className="user-info" onClick={handleUserProfile}>Thông tin cá nhân</button>
                    <button className="booked-tour" onClick={handleBookedTour}>Tour đã đặt</button>
                    <button className="logout" onClick={handleLogOut}>Đăng xuất</button>
                </div>

                <div className="user-booked--info">
                    <p className="title">Tour đã đặt</p>

                    <div className="booked-tour--container">
                        {bookedTours.map((book) => {
                            const price = book?.payPrice?.toLocaleString();

                            return (
                                <>
                                    <div className="booking-item">
                                        <div className="booking-info">
                                            <div className="booking-id">Mã booking: {book._id}</div>
                                            <p className="booking-id-tour">Mã tour: {book.TourR}</p>
                                            <p className="date-create">Ngày đăng ký: {book.createdAt}</p>
                                            <hr />
                                            <p className="register-name">Người đăng ký: {book.registerName}</p>
                                            <p className="register-email">Email: {book.registerEmail}</p>
                                        </div>

                                        <div className="booking-price">
                                            <p className="quantity">Số lượng: {book.quantity}</p>
                                            <p className="price">Tiền thanh toán: <span>{price}</span> đ</p>
                                            <p className="status">Tình trạng: <span>{book.status}</span> </p>
                                        </div>

                                        <div className="detail-btn">
                                            <button className="detail" onClick={() => navigate(`/booking-detail/${book._id}`)}>Xem chi tiết</button>

                                            <button className="delete-booking" onClick={ async () => {
                                                await axios.delete(`${process.env.REACT_APP_API_KEY}/booking/delete/${book._id}`);
                                                window.location.reload()
                                                alert('Xóa thành công')
                                            }}>Xóa</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTourPage;