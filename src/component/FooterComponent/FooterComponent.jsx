import React from "react";
import { ReactDOM } from "react";
import '../FooterComponent/footerComponent.css'

const FooterComponent = () => {
    return (
        <div class="login-footer">
            <div className="home--footer">
                <p className="title">Trang chủ</p>
                <p>Ưu đãi</p>
                <p>Khám phá du lịch cùng SeaWonder</p>
                <p>Ưu đãi tour giờ chót</p>
                <p>Gói ưu đãi</p>
                <p>Địa điểm yêu thích</p>
            </div>

            <div className="introduce--footer">
                <p className="title">Trang giới thiệu</p>
                <p>Về chúng tôi</p>
                <p>Ưu điểm</p>
                <p>Điểm đến phổ biến</p>
                <p>Kênh</p>
            </div>

            <div className="tour-footer">
                <p className="title">Tour</p>
                <p>Điểm đi/ Điểm đến</p>
                <p>Bảng giá</p>
                <p>Đặt vé khách sạn</p>
                <p>Đặt vé tour</p>
            </div>

            <div className="register--footer">
                <div class="login-footer-title">
                    <p>Đăng ký nhận bản tin của chúng tôi</p>
                    <p>Chúng tôi sẽ hỗ trợ bạn</p>
                </div>

                <div class="login-footer-input">
                    <input type="email" name="" id="" placeholder="Email"/>
                    <button>Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;