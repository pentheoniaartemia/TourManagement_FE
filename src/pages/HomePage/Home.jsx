import '../HomePage/Home.css'
import React, { useEffect, useState } from 'react'
import HeaderComponent from "../../component/HeaderComponent/HeaderComponent";
import FooterComponent from "../../component/FooterComponent/FooterComponent"

const delay = 4500; 
const carousel = document.querySelectorAll('.carousel');
const carousel1 = document.querySelectorAll('.carousel1');
const carousel2 = document.querySelectorAll('.carousel2');
const carasoulContainer = [carousel, carousel1, carousel2];

const Home = () => {

    // Image Slideshow
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === carasoulContainer.length - 1 ? 0 : prevIndex + 1
              ),
            delay
          );
      
          return () => {};
    }, [index])

    return (
        <>
            <HeaderComponent/>
            <div className="home--body">
                <div className="slideshow-container" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    <div className="main-slide">
                        <div className="carousel"> </div>
                    </div>

                    <div className="main-slide">
                        <div className="carousel1"></div>
                    </div>

                    <div className="main-slide">
                        <div className="carousel2"></div>
                    </div>

                    <div className="dots-container">
                        <span className="dot" ></span>
                        <span className="dot" ></span>
                        <span className="dot" ></span>
                    </div>
                </div>

                <div className="search-section">
                    <div className="search-container">
                        <div className="search-item ">
                            <div className="search-icon car-icon"></div>
                            <p className="search-description">Tour du lịch trọn gói</p>
                        </div>

                        <div className="search-item">
                            <div className="search-icon hotel-icon"></div>
                            <p className="search-description">Khách sạn</p>
                        </div>

                        <div className="search-item">
                            <div className="search-icon plane-icon"></div>
                            <p className="search-description">Vé máy bay</p>
                        </div>

                        <div className="search-item">
                            <div className="search-icon__double plane_hotel-icon"></div>
                            <p className="search-description">Combo vé máy bay + khách sạn</p>
                        </div>

                        <div className="search-item">
                            <div className="search-icon__double car_hotel-icon"></div>
                            <p className="search-description">Combo vé xe + khách sạn</p>
                        </div>

                        <div className="search-item">
                            <div className="search-icon searching-icon"></div>
                            <p className="search-description">Tra cứu Booking</p>
                        </div>
                    </div>

                    <div className="search-content">

                    </div>
                </div>

                <div className="offers-slider">
                    {/* <p className="title">Ưu đãi</p> */}
                    <div className="img-container"></div>
                </div>

                <div className="discover">
                    <p className="title">Khám phá du lịch cùng SeaWonder</p>
                    <div className="explore-container">
                        <div className="explore-item">
                            <div className="boat-img"></div>
                            <p className="description">Tự hào nét Việt: Ưu đãi kích cầu du lịch trong nước. </p>
                        </div>

                        <div className="explore-item">
                            <div className="japan-img"></div>
                            <p className="description">Đắm say giữa trời thu khắp thế giới.</p>
                        </div>

                        <div className="explore-item">
                            <div className="paris-img"></div>
                            <p className="description">[Mới] Tour trải nghiệm cao cấp</p>
                        </div>

                        <div className="explore-item">
                            <div className="NYC-img"></div>
                            <p className="description">Tour trải nghiệm giới trẻ mang tầm vóc quốc tế.</p>
                        </div>
                    </div>
                </div>

                <div className="offer--last-time">
                    <p className="title">Ưu đãi tour giờ chót</p>
                    <div className="tour__last-container">
                        <div className="tour__last-item">
                            <div className="place-img ">
                                <div className="tour-type--container">
                                    <div className="clock-icon"></div>
                                    <div className="tour-type--name">
                                        <p>Giờ chót</p>
                                    </div>
                                </div>

                                <div className="rating-numb--container">
                                    <p className="rating-numb">8.5</p>
                                </div>
                            </div>

                            <div className="place-content"> 
                                <p className="depart-date">10/10/2023 - 4 ngày</p>
                                <p className="name-tour">Đà Nẵng - Huế - Cầu Vàng - Sơn Trà - Hội An (Khách sạn 4 * Trọn Tour )</p>
                                <p className="id-tour">Mã tour: </p>
                                <p className="depart-place">Nơi khởi hành: TP.Hồ Chí Minh</p>
                                <div className="price--sale-container">
                                    <div className="price-container">
                                        <p className="price--pre-sale">Giá: 5,500,000 đ</p>
                                        <p className="price--after-sale">5,300,000 đ</p>
                                    </div>

                                    <div className="sale-percent">
                                        <p className="sale-percent--numb">4% giảm</p>
                                    </div>
                                </div>

                                <div className="regsiter-tour--button"> 
                                    <button className="count-instock">Còn 4 vé</button>
                                </div>
                            </div>
                        </div>

                        <div className="tour__last-item">
                        <div className="place-img ">
                                <div className="tour-type--container">
                                    <div className="clock-icon"></div>
                                    <div className="tour-type--name">
                                        <p>Giờ chót</p>
                                    </div>
                                </div>

                                <div className="rating-numb--container">
                                    <p className="rating-numb">8.5</p>
                                </div>
                            </div>

                            <div className="place-content"> 
                                <p className="depart-date">10/10/2023 - 4 ngày</p>
                                <p className="name-tour">Đà Nẵng - Huế - Cầu Vàng - Sơn Trà - Hội An (Khách sạn 4 * Trọn Tour )</p>
                                <p className="id-tour">Mã tour: </p>
                                <p className="depart-place">Nơi khởi hành: TP.Hồ Chí Minh</p>
                                <div className="price--sale-container">
                                    <div className="price-container">
                                        <p className="price--pre-sale">Giá: 5,500,000 đ</p>
                                        <p className="price--after-sale">5,300,000 đ</p>
                                    </div>

                                    <div className="sale-percent">
                                        <p className="sale-percent--numb">4% giảm</p>
                                    </div>
                                </div>

                                <div className="regsiter-tour--button"> 
                                    <button className="count-instock">Còn 4 vé</button>
                                </div>
                            </div>
                        </div>

                        <div className="tour__last-item">
                        <div className="place-img ">
                                <div className="tour-type--container">
                                    <div className="clock-icon"></div>
                                    <div className="tour-type--name">
                                        <p>Giờ chót</p>
                                    </div>
                                </div>

                                <div className="rating-numb--container">
                                    <p className="rating-numb">8.5</p>
                                </div>
                            </div>

                            <div className="place-content"> 
                                <p className="depart-date">10/10/2023 - 4 ngày</p>
                                <p className="name-tour">Đà Nẵng - Huế - Cầu Vàng - Sơn Trà - Hội An (Khách sạn 4 * Trọn Tour )</p>
                                <p className="id-tour">Mã tour: </p>
                                <p className="depart-place">Nơi khởi hành: TP.Hồ Chí Minh</p>
                                <div className="price--sale-container">
                                    <div className="price-container">
                                        <p className="price--pre-sale">Giá: 5,500,000 đ</p>
                                        <p className="price--after-sale">5,300,000 đ</p>
                                    </div>

                                    <div className="sale-percent">
                                        <p className="sale-percent--numb">4% giảm</p>
                                    </div>
                                </div>

                                <div className="regsiter-tour--button"> 
                                    <button className="count-instock">Còn 4 vé</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="special-offers">
                    <p className="title">Gói ưu đãi đặc biệt</p>
                    <div className="special-tour-container">
                        <div className="special-tour--item">
                            <div className="special-tour--img">

                            </div>

                            <div className="special-tour--content">
                                <p className="tour-service">Vé máy bay + khách sạn</p>
                                <p className="name-tour">Combo Quy Nhơn 3N2Đ: Vé máy bay khứ hồi + Khách sạn Anina 4 sao (Bao gồm điểm tâm buổi sáng)</p>

                                <p className="service-detail">Vé máy bay khứ hồi Vietravel Airlines + Phòng tiêu chuẩn + Ăn sáng</p>
                                <div className="rating--comment">
                                    <p className="rating">10</p>
                                    <p className="comment">Tuyệt vời</p>
                                </div>

                                <div className="gathering-place">
                                    <div className="pin-point"> </div>

                                    <div className="address">
                                        <p>1H1 Nguyễn Thị Định, Nguyễn Văn Cừ, Thành phố Quy Nhơn, Quy Nhon, Binh Dinh, Viet Nam</p>
                                    </div>
                                </div>
                            </div>

                            <div className="special-tour--price">
                                <p className="text">Giá chỉ từ</p>
                                <p className="price">
                                    <span>2,390,000</span> /khách
                                </p>
                                <p className="depart-date">Ngày đi 14/10/2023</p>

                                <button className="booking-btn">Đặt ngay</button>

                                <p className="side-info">Đã bao gồm trong giá</p>
                            </div>
                        </div>

                        <div className="special-tour--item">
                            <div className="special-tour--img">

                            </div>

                            <div className="special-tour--content">
                                <p className="tour-service">Vé máy bay + khách sạn</p>
                                <p className="name-tour">Combo Quy Nhơn 3N2Đ: Vé máy bay khứ hồi + Khách sạn Anina 4 sao (Bao gồm điểm tâm buổi sáng)</p>

                                <p className="service-detail">Vé máy bay khứ hồi Vietravel Airlines + Phòng tiêu chuẩn + Ăn sáng</p>
                                <div className="rating--comment">
                                    <p className="rating">10</p>
                                    <p className="comment">Tuyệt vời</p>
                                </div>

                                <div className="gathering-place">
                                    <div className="pin-point"> </div>

                                    <div className="address">
                                        <p>1H1 Nguyễn Thị Định, Nguyễn Văn Cừ, Thành phố Quy Nhơn, Quy Nhon, Binh Dinh, Viet Nam</p>
                                    </div>
                                </div>
                            </div>

                            <div className="special-tour--price">
                                <p className="text">Giá chỉ từ</p>
                                <p className="price">
                                    <span>2,390,000</span> /khách
                                </p>
                                <p className="depart-date">Ngày đi 14/10/2023</p>

                                <button className="booking-btn">Đặt ngay</button>

                                <p className="side-info">Đã bao gồm trong giá</p>
                            </div>
                        </div>

                        <div className="special-tour--item">
                            <div className="special-tour--img">

                            </div>

                            <div className="special-tour--content">
                                <p className="tour-service">Vé máy bay + khách sạn</p>
                                <p className="name-tour">Combo Quy Nhơn 3N2Đ: Vé máy bay khứ hồi + Khách sạn Anina 4 sao (Bao gồm điểm tâm buổi sáng)</p>

                                <p className="service-detail">Vé máy bay khứ hồi Vietravel Airlines + Phòng tiêu chuẩn + Ăn sáng</p>
                                <div className="rating--comment">
                                    <p className="rating">10</p>
                                    <p className="comment">Tuyệt vời</p>
                                </div>

                                <div className="gathering-place">
                                    <div className="pin-point"> </div>

                                    <div className="address">
                                        <p>1H1 Nguyễn Thị Định, Nguyễn Văn Cừ, Thành phố Quy Nhơn, Quy Nhon, Binh Dinh, Viet Nam</p>
                                    </div>
                                </div>
                            </div>

                            <div className="special-tour--price">
                                <p className="text">Giá chỉ từ</p>
                                <p className="price">
                                    <span>2,390,000</span> /khách
                                </p>
                                <p className="depart-date">Ngày đi 14/10/2023</p>

                                <button className="booking-btn">Đặt ngay</button>

                                <p className="side-info">Đã bao gồm trong giá</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="favorite-places">
                    <p className="title">Địa điểm yêu thích</p>
                    <div className="favorite-places--container">
                        <div className="favorite-places--item">
                            <div className="favorite-place--img halong"></div>

                            <div className="favorite-place--name">
                                <p className="name">Hạ Long</p>
                                <div className="favorite-likes">Đã có 10,000 lượt thích</div>
                            </div>
                        </div>

                        <div className="favorite-places--item">
                            <div className="favorite-place--img danang"></div>

                            <div className="favorite-place--name">
                                <p className="name">Đà Nẵng</p>
                                <div className="favorite-likes">Đã có 10,000 lượt thích</div>
                            </div>
                        </div>

                        <div className="favorite-places--item">
                            <div className="favorite-place--img dalat"></div>

                            <div className="favorite-place--name">
                                <p className="name">Đà Lạt</p>
                                <div className="favorite-likes">Đã có 10,000 lượt thích</div>
                            </div>
                        </div>

                        <div className="favorite-places--item">
                            <div className="favorite-place--img japan"></div>

                            <div className="favorite-place--name">
                                <p className="name">Japan</p>
                                <div className="favorite-likes">Đã có 10,000 lượt thích</div>
                            </div>
                        </div>
                        
                        <div className="favorite-places--item">
                            <div className="favorite-place--img france"></div>

                            <div className="favorite-place--name">
                                <p className="name">France</p>
                                <div className="favorite-likes">Đã có 10,000 lượt thích</div>
                            </div>
                        </div>

                        <div className="favorite-places--item">
                            <div className="favorite-place--img australia"></div>

                            <div className="favorite-place--name">
                                <p className="name">Australia</p>
                                <div className="favorite-likes">Đã có 10,000 lượt thích</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent/>
        </>
    )
}

export default Home; 