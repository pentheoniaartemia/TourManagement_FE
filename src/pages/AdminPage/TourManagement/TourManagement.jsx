import React, { useEffect, useState } from "react";
import HeaderComponent from "../../../component/HeaderComponent/HeaderComponent";
import { useNavigate } from "react-router-dom";
import '../TourManagement/TourManagement.css'
import axios from "axios";

const TourManagementPage = () => {

    const [tours, setTour] = useState([]);
    const navigate = useNavigate();

    //get products
    const getAllProduct = async () => { 
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/tour/list-tour`);
        setTour(data?.allTour);
    }

    useEffect(() => {
        getAllProduct()
    },[]);

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

    const handleCreateTour = () => {
        navigate('/admin/tour-management/create')
    }

    const handleStatistic = () => {
        navigate('/admin/statistic');
    }

    const deleteTour = async (id) => {
        const res = await axios.delete(`${process.env.REACT_APP_API_KEY}/tour/delete-tour/${id}`);
        console.log(res.data);
    }

    return (
        <>
            <HeaderComponent/>
            <div className="tour-management--body">
                <div className="admin-profile--nav">
                    <button className="admin-info" onClick={handleAdminInfo}>Thông tin cá nhân</button>
                    <button className="tour-management" onClick={handleTourManagement}>Quản lý tour</button>
                    <button className="booking-management" onClick={handleBookingManagement}>Quản lý booking</button>
                    <button className="statistic" onClick={handleStatistic}>Thống kê</button>
                    <button className="logout" onClick={handleLogOut}>Đăng xuất</button>
                </div>

                <div className="tour-management--info">
                    <div className="list-tour--container">
                        <button className="create-tour" onClick={handleCreateTour}>Thêm tour</button>
                        <p className="tour-title">Danh sách tour</p>
                        {tours.map((tour) => {
                            return (
                                <>
                                    <div className="tour-item">
                                        <div className="tour-info">
                                            <p className="tour-id">Mã tour: {tour._id}</p>
                                            <p className="tour-name">Tên tour: {tour.nameTour}</p>
                                            <p className="departureDate">Ngày khởi hành: {tour.departureDate}</p>
                                        </div>

                                        <div className="tour-price">
                                            <p className="person-type">Người lớn: </p>
                                            <p className="price">{tour?.adultPrice?.toLocaleString()} đ</p>
                                        </div>

                                        <div className="detail-btn">
                                            <button className="detail" onClick={() => {navigate(`/admin/detail-tour/${tour._id}`)}}>Xem chi tiết</button>


                                            <button className="delete-tour" onClick={ async () => {
                                                await axios.delete(`${process.env.REACT_APP_API_KEY}/tour/delete-tour/${tour._id}`);
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

export default TourManagementPage;