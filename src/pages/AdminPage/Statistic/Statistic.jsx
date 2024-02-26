import React, { useEffect, useState } from "react";
import '../Statistic/Statistic.css'
import HeaderComponent from "../../../component/HeaderComponent/HeaderComponent";
import { useNavigate } from "react-router-dom";
import { Chart } from "chart.js/auto";
import axios from "axios";

const StatisticPage = () => {

    const navigate = useNavigate(); 

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

    const [tourStatistics, setTourStatistics] = useState([]);

    useEffect(() => {
        const fetchTourStatistics = async () => {
          try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/tour/revenue-tour`);
            setTourStatistics(data?.tourRevenues);
          } catch (error) {
            console.error('Error fetching tour statistics:', error);
          }
        };
        fetchTourStatistics();

      }, []);

      useEffect(() => {
        // Chuẩn bị dữ liệu cho biểu đồ
        const tourIds = tourStatistics.map(tour => tour.tourId);
        const tourNames = tourStatistics.map(tour => tour.tourName);
        const totalRevenues = tourStatistics.map(tour => tour.totalRevenue);
    
        // Vẽ biểu đồ cột
        const canvas = document.getElementById('revenueChart');
        const ctx = canvas.getContext('2d');
    
        if (canvas.chart) {
          canvas.chart.destroy();
        }
    
        canvas.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: tourNames,
            datasets: [{
              label: 'Doanh thu',
              data: totalRevenues,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }, [tourStatistics]);

    return (
        <>
            <HeaderComponent/>
            <div className="statistic--body">
                <div className="admin-profile--nav">
                    <button className="admin-info" onClick={handleAdminInfo}>Thông tin cá nhân</button>
                    <button className="tour-management" onClick={handleTourManagement}>Quản lý tour</button>
                    <button className="booking-management" onClick={handleBookingManagement}>Quản lý booking</button>
                    <button className="statistic" onClick={handleStatistic}>Thống kê</button>
                    <button className="logout" onClick={handleLogOut}>Đăng xuất</button>
                </div>

                <div>
                    {/* Vùng chứa biểu đồ */}
                    <canvas id="revenueChart" width="800" height="200"></canvas>
                </div>
            </div>
        </>
    )
}

export default StatisticPage;