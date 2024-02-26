import React, { useEffect, useState } from "react";
//import { useMutation } from "@tanstack/react-query"
import HeaderComponent from "../../component/HeaderComponent/HeaderComponent";
import FooterComponent from "../../component/FooterComponent/FooterComponent"
import '../SignInPage/SignIn.css'
import '../../css/bootstrap.min.css'
import { loginUser } from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const mutation = useMutationHooks(
        data => loginUser(data)
    );

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnChangePassWord = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
        console.log(email, password);
    }
    
    const { isSuccess } = mutation;
    const dataContainer = {email, password};

    const fetchUserData = async () => {
        const respond = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-in`, dataContainer);
        const userInfo = respond?.data;
        sessionStorage.setItem('UserInfo', JSON.stringify(userInfo));
    }

    useEffect(() => {
        if(isSuccess) {
            navigate('/home');
            fetchUserData();
        }
    },[isSuccess])

    return (
        <>
            <HeaderComponent>

            </HeaderComponent>

            {/* <!-- Body --> */}
            <div class="login-body">
                <div class="login-body-img">
                    <div class="form-block mx-auto">
                        <div class="text-center">
                            <h3 class="title">
                                Đăng Nhập
                            </h3>
                        </div>
                        <div class="login--form">
                            <div class="form-group first">
                                <input type="text" class="form-control" placeholder="Email" id="username" value={email} onChange={handleOnChangeEmail}/>
                            </div>
                            <div class="form-group last mb-3">
                                <input type="password" class="form-control" placeholder="Mật khẩu" id="password" value={password} onChange={handleOnChangePassWord}/>
                            </div>

                            <div class="d-sm-flex align-items-center check--box__password">
                                <label class="control control--checkbox mb-3 mb-sm-0">
                                    <span class="caption">Nhớ mật khẩu</span>
                                    <input type="checkbox"/>

                                </label>
                                <span class="ml-auto"><a href="#" class="forgot-pass">Quên mật khẩu</a></span>
                            </div>

                            <button class="btn btn-block py-2 btn-primary sign-in--button" onClick={handleSignIn}>Đăng nhập</button>

                            <span class="text-center my-3 d-block" style={{color: "white"}}>hoặc</span>


                            <div class="sign-in--advanced">
                                <div class = "facebook-login">

                                </div>

                                <div class = "google-login">

                                </div>
                            </div>

                            {/* <!-- Đăng ký --> */}
                            <span class="text-center my-3 d-block register--button">
                                Bạn mới biết đến Seawonder Tour?
                                <a href="/sign-up">
                                    Đăng ký
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <FooterComponent>

            </FooterComponent>
        </>
    );
}

export default SignInPage;