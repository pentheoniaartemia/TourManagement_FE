import React from "react";
import LogoImg from "../../Assets/Logo.png"
import './headerComponent.css'
import '../../css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {

    const navigate = useNavigate(); 

    const handleSignIn = () => {
        navigate('/sign-in');
    }

    const handleHome = () => {
        navigate('/home');
    }

    const handleUserProfile = () => {
        
        const userInfostring = sessionStorage.getItem('UserInfo')

        var userInfo = JSON.parse(userInfostring);

        if (userInfo) {
            if(!userInfo.data.isAdmin) {
                navigate('/user/profile');
            } else if(userInfo.data.isAdmin){
                navigate('/admin/profile');
            }
        } else {
            handleSignIn();
        }
    }

    return (
        <header class="login-header">
            <div class="login-logo" onClick={handleHome}>
                <img
                    className="logo"
                    alt="Asset"
                    src={LogoImg}
                />
            </div>

            <div class="login-nav">
                <ul class="login-nav-list" style={{marginBottom :0}}>  
                    <li class="login-nav-item">
                        <a href="/home">
                            Trang chủ
                        </a>
                    </li>

                    <li class="login-nav-item">
                        <a href="/">
                            Giới thiệu
                        </a>
                    </li>

                    <li class="login-nav-item">
                        <a href="/list-tour">
                            Tour
                        </a>
                    </li>

                    <li class="login-nav-item">
                        <a href="">
                            Bảng giá
                        </a>
                    </li>

                    <li class="login-nav-item">
                        <a href="">
                            Đặt Tour
                        </a>
                    </li>       
                </ul>
            </div>

            <div class="login-user">
                <button class="login-contact">Liên hệ chúng tôi</button>

                <div class="login-info">
                    <div className="user-logo" onClick={handleUserProfile}></div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;