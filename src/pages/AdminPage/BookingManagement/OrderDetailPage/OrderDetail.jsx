import React, { useEffect, useState } from "react";
import '../OrderDetailPage/OrderDetail.css'
import HeaderComponent from "../../../../component/HeaderComponent/HeaderComponent";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as BookingService from '../../../../services/BookingService'
import { useMutationHooks } from "../../../../hooks/useMutationHook";

const OrderDetailPage = () => {

    const [book, setBook] = useState([]);
    const { id } = useParams();

    const navigate = useNavigate()

    const getDetailBooking = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}/booking/get/${id}`);
        setBook(data?.book);
    }

    let [customers, setCustomers] = useState([]);

    const handleCustomer = () => {
        const length = book?.customerName?.length;
        let newArray = Array(length).fill(null);
        setCustomers(newArray);
    }

    useEffect(() => {
        getDetailBooking()
    },[])

    useEffect(() => {
        if(book.TourR) {
            handleCustomer()
        }
    },[book])

    const price = book?.payPrice?.toLocaleString();

    // Chuyển customerName từ object thành array
    const name = book.customerName;

    const nameArray = [];

    for (let key in name) {
        if (name.hasOwnProperty(key)) {
          
          nameArray.push(name[key]);
        }
    }
    

    // Chuyển customerPassport từ object thành array
    const passport = book.customerPassport;

    const passportArray = [];

    for (let key in passport) {
        if (passport.hasOwnProperty(key)) {
          
            passportArray.push(passport[key]);
        }
    }

    // Chuyển customerType từ object thành array
    const type = book.customerType;

    const typeArray = [];
    
    for (let key in type) {
        if (type.hasOwnProperty(key)) {
              
            typeArray.push(type[key]);
        }
    }

    const [status, setStatus] = useState('');

    const handlePaidChange = (event) => {
        const selectedPaymentMethod = event.target.value;
        setStatus(selectedPaymentMethod);
  
        console.log(selectedPaymentMethod)
      };

    const mutation = useMutationHooks(
        data => BookingService.updateBooking(id, data)
    );

    const handleUpdateBooking = () => {
        mutation.mutate({
            status
        })
    }

    const { isSuccess, isError } = mutation;

    useEffect(() => {
        if(isSuccess) {
            alert("Cập nhật thành công")
            window.location.reload()
        } else if(isError) {
            alert("Hiện tại đang xảy ra trục trặc!")
        }
    }, [isSuccess, isError])

    return (
        <>
            <HeaderComponent/>
            <div className="order-detail--body">
                <div className="title">Chi tiết Booking</div>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ và Tên</th>
                            <th>Passport</th>
                            <th>Loại khách hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{nameArray[index]}</td>
                                        <td>{passportArray[index]}</td>
                                        <td>{typeArray[index]}</td>
                                    </tr>
                                </>
                            )
                            
                        })}
                    </tbody>
                </table>

                <div className="price-pay">
                    <p className="price">Tiền thanh toán: <span>{price}</span> đ</p>
                    <p className="payment-method">Phương thức thanh toán: <span>{book.paymentMethod}</span></p>
                    <p className="status">Tình trạng thanh toán: <span>{book.status}</span></p>
                </div>
                        
                <p>
                    <input type="radio" name="payment" id="payment" value="Đã thanh toán" onChange={handlePaidChange} />
                    <label htmlFor="Đã thanh toán">Đánh dấu khách hàng <span>đã thanh toán</span></label>
                </p>

                <button className="update-info" onClick={handleUpdateBooking}>Cập nhật</button>
            </div>
        </>
    )
}

export default OrderDetailPage;