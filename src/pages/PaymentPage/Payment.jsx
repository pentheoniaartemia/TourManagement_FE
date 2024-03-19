import React, { useEffect, useState } from "react";
import HeaderComponent from "../../component/HeaderComponent/HeaderComponent";
import '../PaymentPage/Payment.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as BookingService from '../../services/BookingService'
import { useMutationHooks } from "../../hooks/useMutationHook";

const PaymentPage = () => {

    const navigate = useNavigate();

    const [book, setBook] = useState([]);
    const [tour, setTour] = useState([]);

    const { id } = useParams();
    const [detailBookingLoaded, setDetailBookingLoaded] = useState(false);

    // Nhận data chi tiết của booking
    const getDetailBooking = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/booking/get/${id}`);
        setBook(data?.book);
        setDetailBookingLoaded(true);
    }
  
    useEffect(() => {
        getDetailBooking()
    },[])
    
    // Nhận data chi tiết của tour
    const getDetailTour = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/tour/detail-tour?id=${book.TourR}`);
        setTour(data?.tour);
    }

    useEffect(() => {
        if (detailBookingLoaded && book && book.TourR) {
          getDetailTour();
        }
    }, [detailBookingLoaded, book]);

    // Chuyển imageTour từ object thành array
    const imgTour = tour.imageTour;

    const imgTourArray = [];
        
    for (let key in imgTour) {
        if (imgTour.hasOwnProperty(key)) {
                  
            imgTourArray.push(imgTour[key]);
        }
    }
        
    const imgTour1 = imgTourArray[0];

    // Nhận data input
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentChange = (event) => {
      const selectedPaymentMethod = event.target.value;
      setPaymentMethod(selectedPaymentMethod);

      console.log(selectedPaymentMethod)
    };

    // Truyền data mới (payment method) qua API 
    const mutation = useMutationHooks(
        data => BookingService.updateBooking(id, data)
    );

    const handleUpdateBooking = () => {
        mutation.mutate({
            paymentMethod
        })
    }

     // Xử lí sau khi đã xác nhận data truyền vào
    const { isSuccess, isError } = mutation;

    useEffect(() => {
        if(isSuccess) {
            alert("Đặt tour thành công")
            navigate('/home')
        } else if(isError) {
            alert("Hiện tại đang xảy ra trục trặc!")
        }
    }, [isSuccess, isError])

    return (
        <>
            <HeaderComponent/>
            <div className="payment--body">
                <div className="choose-payment-method--section">
                    <p className="title">Phương thức thanh toán</p>
                    <div className="payment-list--container">
                        <div className="payment-item">
                            <p>
                                <input type="radio" name="payment" id="" value="Thanh toán trực tiếp" onChange={handlePaymentChange}/>
                                <label htmlFor="Thanh toán trực tiếp">Thanh toán trực tiếp</label>
                            </p>
                            <div className="payment-info">
                                <p className="description">
                                    Quý khách vui lòng di chuyển đến một trong các chi nhánh của SeaWonder để thanh toán:
                                </p>
                                <p className="place1">
                                    + Chi nhánh 1: 190 Pasteur, P. Võ Thị Sáu, Q.3, Tp. Hồ Chí Minh, Việt Nam
                                </p>
                                <p className="place2">
                                    + Chi nhánh 2: 86A Châu Văn Liêm, Phường 11, Quận 5, Tp. HCM
                                </p>
                            </div>
                        </div>

                        <div className="payment-item">
                            <p>
                                <input type="radio" name="payment" id="" value="Thanh toán chuyển khoản" onChange={handlePaymentChange}/>
                                <label htmlFor="Thanh toán chuyển khoản">Thanh toán chuyển khoản</label>
                            </p>
                            <div className="payment-info">
                                <p className="description">
                                    Quý khách có thể chọn một trong các loại thẻ của SeaWonder để thanh toán:
                                </p>
                                <p className="bank1">
                                    + Sacombank: 394537453694765
                                </p>
                                <p className="bank2">
                                    + Vietinbank: 3458360954675987
                                </p>
                                <p className="bank3">
                                    + Paypal: tanphuong@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />

                <div className="detail-order--section">
                        <div className="main-title">Tóm tắt đơn đặt chỗ</div>

                        <div className="tour-img" style={{
                                                    backgroundImage: `url(${imgTour1})`
                                                }}></div>

                        <div className="tour-info--container">
                            <p className="tour-name"></p>

                            <div className="price-type--container">
                                <div className="price-item">
                                    <p className="type">Người lớn</p>
                                    <p className="price"> {book.numberOfAdult} người</p>    
                                </div>

                                <div className="price-item">
                                    <p className="type">Trẻ em</p>
                                    <p className="price"> {book.numberOfTeen} người</p>    
                                </div>

                                <div className="price-item">
                                    <p className="type">Trẻ nhỏ</p>
                                    <p className="price"> {book.numberOfChildren} người</p>    
                                </div>

                                <div className="price-item">
                                    <p className="type">Em bé</p>
                                    <p className="price"> {book.numberOfInfant} người</p>    
                                </div>
                            </div>

                            <div className="total-price--container">
                                <p className="total-price">TỔNG CỘNG: </p>
                                <p className="total-price--number"> {book?.payPrice?.toLocaleString()}đ</p>
                            </div>
                        </div>

                        <button className="payment-booking" onClick={handleUpdateBooking}>THANH TOÁN</button>
                </div>
            </div>
        </>
    )
}

export default PaymentPage;
