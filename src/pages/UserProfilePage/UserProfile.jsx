import React, { useEffect, useState } from "react";
import HeaderComponent from "../../component/HeaderComponent/HeaderComponent"
import FooterComponent from "../../component/FooterComponent/FooterComponent"
import '../UserProfilePage/UserProfile.css'
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService"
import { useMutationHooks } from "../../hooks/useMutationHook";

const UserProfilePage = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate(); 

    const getDetailUser = () => {
        const userData = sessionStorage.getItem('UserInfo'); 

        const userInfo = JSON.parse(userData);
        // console.log(userInfo.data);

        setUsername(userInfo.data.name);
        setEmail(userInfo.data.email);
        setPhone(userInfo.data.phone);
    }

    useEffect(() => {
        getDetailUser()
    },[])

    const handleOnChangeName = (e) => {
        setUsername(e.target.value);
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleLogOut = () => {
        sessionStorage.removeItem('UserInfo');
        navigate('/home');
    }

    const handleBookedTour = () => {
        navigate('/user/my-tour')
    }


    const userData2 = sessionStorage.getItem('UserInfo'); 
    const userInfo2 = JSON.parse(userData2);

    const id = userInfo2.data._id;

    const mutation = useMutationHooks(
        data => UserService.updateUser(id, data)
    );

    const handleUpdateUser = () => {
        mutation.mutate({
            username,
            email,
            phone
        })
        console.log(username, email, phone);
    }

    const {data, isLoading, isSuccess, isError} = mutation;

    useEffect(() => {
        if(isSuccess) {
            alert("Cập nhật thành công")
        } else if(isError) {
            alert("Hiện tại đang xảy ra trục trặc! Xin quý khách hàng thông cảm.")
        }
    }, [isSuccess, isError])

    return (
        <>
            <HeaderComponent/>
            <div className="user-profile--body">
                <div className="user-profile--nav">
                    <button className="user-info">Thông tin cá nhân</button>
                    <button className="booked-tour" onClick={handleBookedTour}>Tour đã đặt</button>
                    <button className="logout" onClick={handleLogOut}>Đăng xuất</button>
                </div>

                <div className="user-profile--info">
                    <p className="title">HỒ SƠ CỦA TÔI</p>
                    <p className="description">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>

                    <div className="user-info--container">
                        <div className="user-info--item">
                            <p className="user-name">Họ và tên</p>
                            <input type="text" className="username-input" value={username} onChange={handleOnChangeName}/>
                        </div>

                        <div className="user-info--item">
                            <p className="email">Email</p>
                            <input type="email" className="email-input" value={email}/>
                        </div>

                        <div className="user-info--item">
                            <p className="phone">Số điện thoại</p>
                            <input type="text" className="phone-input" value={phone} onChange={handleOnChangePhone}/>
                        </div>

                        <div className="user-info--item">
                            <button className="update-info" onClick={handleUpdateUser}>LƯU</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </>
    )
}

export default UserProfilePage; 