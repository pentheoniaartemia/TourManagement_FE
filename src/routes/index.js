import Home from "../pages/HomePage/Home";
import IntroducePage from "../pages/IntroductionPage/IntroducePage";
import SignInPage from "../pages/SignInPage/SignIn";
import SignUpPage from "../pages/SignUpPage/SignUp";
import UserProfilePage from "../pages/UserProfilePage/UserProfile";
import AdminProfilePage from "../pages/AdminPage/AdminProfile/AdminProfile";

import ListTourPage from "../pages/ListTourPage/ListTour"
import TourDetailPage from "../pages/TourDetailPage/TourDetail";

import BookingPage from "../pages/BookingPage/Booking";
import BookingManagementPage from "../pages/AdminPage/BookingManagement/BookingManagement";
import MyTourPage from "../pages/MyTourPage/MyTour";
import OrderDetailPage from "../pages/AdminPage/BookingManagement/OrderDetailPage/OrderDetail";
import BookingDetailPage from "../pages/BookingDetailPage/BookingDetail";

import TourManagementPage from "../pages/AdminPage/TourManagement/TourManagement";
import CreateTourPage from "../pages/AdminPage/TourManagement/CreateTour/CreateTour";
import UpdateTourPage from "../pages/AdminPage/TourManagement/UpdateTour/UpdateTour";

import StatisticPage from "../pages/AdminPage/Statistic/Statistic";

import PaymentPage from "../pages/PaymentPage/Payment";

export const routes = [
    {
        path: '/',
        page: IntroducePage
    },
    {
        path: '/home',
        page: Home
    },
    {
        path: '/sign-in',
        page: SignInPage
    },
    {
        path: '/sign-up',
        page: SignUpPage
    },
    {
        path: '/list-tour',
        page: ListTourPage
    },
    {
        path: '/detail-tour/:id',
        page: TourDetailPage
    },
    {
        path: '/booking/:id',
        page: BookingPage
    },
    {
        path: '/user/profile',
        page: UserProfilePage
    },
    {
        path: '/admin/profile',
        page: AdminProfilePage
    },
    {
        path: '/admin/tour-management',
        page: TourManagementPage
    },
    {
        path: '/admin/tour-management/create',
        page: CreateTourPage
    },
    {
        path: '/admin/booking-management',
        page: BookingManagementPage
    },
    {
        path: '/user/my-tour',
        page: MyTourPage
    },
    {
        path: '/admin/detail-tour/:id',
        page: UpdateTourPage
    },
    {
        path: '/admin/detail-order/:id',
        page: OrderDetailPage
    },
    {
        path: '/admin/statistic',
        page: StatisticPage
    },
    {
        path: '/payment/:id',
        page: PaymentPage
    },
    {
        path: '/booking-detail/:id',
        page: BookingDetailPage

    }
]