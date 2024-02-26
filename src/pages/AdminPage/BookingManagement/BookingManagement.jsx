import HeaderComponent from "../../../component/HeaderComponent/HeaderComponent";
import React, { useEffect, useState } from "react";
import '../BookingManagement/BookingManagement.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const BookingManagementPage = () => {

    const navigate = useNavigate(); 
    const [books, setBook] = useState([]);
    const [date, setDate] = useState(null);

    const handleLogOut = () => {
        sessionStorage.removeItem('UserInfo');
        navigate('/home');
    }

    const handleTourManagement = () => {
        navigate('/admin/tour-management')
    }

    const handleBookingManagement = () => {
        navigate('/admin/booking-management')
    }

    const handleAdminInfo = () => {
        navigate('/admin/profile')
    }

    const handleStatistic = () => {
        navigate('/admin/statistic');
    }

    //get bookings
    const getAllBooking = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/booking/get-all`);
        setBook(data?.books);
    }

    const filterBooking = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/booking/filter-booking?date=${date}`);
        setBook(data?.checkDate);
    }

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    const searchBooking = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/booking/search-booking?email=${search}`);
        setBook(data?.checkEmail);
    }

    useEffect(() => {
        getAllBooking()
    },[])


    return (
        <>
            <HeaderComponent/>
            <div className="booking-management--body">
                <div className="admin-profile--nav">
                    <button className="admin-info" onClick={handleAdminInfo}>Thông tin cá nhân</button>
                    <button className="tour-management" onClick={handleTourManagement}>Quản lý tour</button>
                    <button className="booking-management" onClick={handleBookingManagement}>Quản lý booking</button>
                    <button className="statistic" onClick={handleStatistic}>Thống kê</button>
                    <button className="logout" onClick={handleLogOut}>Đăng xuất</button>
                </div>

                <div className="booking-management--info">
                    <div className="list-booking--container">
                        
                        <p className="booking-title">Danh sách booking</p>
                        
                        <div className="sort-section">
                            <DatePicker
                                selected={date}
                                onChange={date => setDate(date)}
                            />
                            <button className="sort-booking-management-btn" onClick={filterBooking}>Lọc</button>
                        </div>

                        <div className="search-section">
                            <input type="text" placeholder="Nhập email" onChange={handleSearch} value={search}/>
                            <button className="search-booking-management-btn" onClick={searchBooking}>Tìm kiếm</button>
                        </div>
                        
                        <div className="booking-container">
                        {books.map((book) => {
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
                                            <button className="detail" onClick={() => navigate(`/admin/detail-order/${book._id}`)}>Xem chi tiết</button>

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
            </div>
        </>
    )
}

export default BookingManagementPage;