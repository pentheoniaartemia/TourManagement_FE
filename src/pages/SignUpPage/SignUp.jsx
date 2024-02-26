import React, { useEffect, useState } from "react";
import '../SignUpPage/SignUp.css'
import HeaderComponent from "../../component/HeaderComponent/HeaderComponent";
import FooterComponent from "../../component/FooterComponent/FooterComponent";
import { useMutation } from "@tanstack/react-query";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService"
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmedPassword] = useState('');

    const [isButtonDisabled, setButtonDisabled] = useState(true);

    // Nhận giá trị input
    const handleOnChangeName = (e) => {
        setName(e.target.value);
    }

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleOnChangePassWord = (e) => {
        setPassword(e.target.value);
    }

    const handleOnChangeConfirmedPassword = (e) => {
        setConfirmedPassword(e.target.value);
    }

    // Chuyển hướng trang
    const handleNavigateSignIn = () => {
        navigate('/sign-in');
    }

    // Tạo biến truyền data nhập từ input qua class khác
    const mutation = useMutationHooks(
        data => UserService.createUser(data)
    );

    const {data, isLoading, isSuccess, isError} = mutation;

    useEffect(() => {
        if(isSuccess) {
            handleNavigateSignIn();
            alert("Đăng ký thành công")
        } else if(isError) {
            alert("Hiện tại đang xảy ra trục trặc! Xin quý khách hàng thông cảm.")
        }
    }, [isSuccess, isError])

    const handleSignUp = () => {
        mutation.mutate({
            name,
            email,
            password,
            confirmPassword
        })
        console.log(name, email, password);
    }
    

    return (
        <>
        <HeaderComponent/>

            <div class="register-body">
                <div class="register-body-img">
                    <div class="form-block mx-auto register--form">
                        <div class="text-center">
                            <h3 class="title">
                                Đăng Ký
                            </h3>
                        </div>
                        <div class="register--form">
                            <div class="form-group first">
                                <input type="text" class="form-control" placeholder="Họ và tên" id="username" onChange={handleOnChangeName}/>
                            </div>

                            <div class="form-group mb-3">
                                <input type="text" class="form-control" placeholder="Email" id="email" onChange={handleOnChangeEmail}/>
                            </div>

                            <div class="form-group last mb-3">
                                <input type="password" class="form-control" placeholder="Mật khẩu" id="password" onChange={handleOnChangePassWord}/>
                            </div>

                            <div class="form-group last mb-3">
                                <input type="password" class="form-control" placeholder="Xác nhận mật khẩu" id="confirmedPassword" onChange={handleOnChangeConfirmedPassword}/>
                            </div>

                            <button
                            disabled={!name.length || !email.length || !password.length || !confirmPassword.length || password !== confirmPassword}
                            class="btn btn-block py-2 btn-primary sign-up--button" 
                            onClick={handleSignUp}
                            >
                            Đăng ký</button>

                            <span class="text-center my-3 d-block login--button">
                                Bạn là thành viên của Seawonder Tour?
                                <a href="/sign-in">
                                    Đăng nhập
                                </a>
                            </span>
                            
                        </div>
                    </div>
                </div>
            </div>

        <FooterComponent/>
        </>
    );
}

export default SignUpPage;