import React, { useEffect, useState } from "react";
import HeaderComponent from "../../../../component/HeaderComponent/HeaderComponent";
import '../CreateTour/CreateTour.css'
import { createTour } from "../../../../services/TourService";
import { useMutationHooks } from "../../../../hooks/useMutationHook";
import { useNavigate } from "react-router-dom";

const CreateTourPage = () => {

    const navigate = useNavigate();

    const [nameTour, setNameTour] = useState('');
    const [typeTour, setTypeTour] = useState('');
    const [departurePlace, setDeparturePlace] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [adultPrice, setAdultPrice] = useState('');
    const [teenPrice, setTeenPrice] = useState('');
    const [childrenPrice, setChildrenPrice] = useState('');
    const [infantPrice, setInfantPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [transport, setTransport] = useState('');
    const [visitedPlace, setVisitedPlace] = useState('');
    const [food, setFood] = useState('');
    const [hotel, setHotel] = useState('');
    const [suitableObject, setSuitableObject] = useState('');
    // const [saleDescription, setSaleDescription] = useState('');
    const [salePercent, setSalePercent] = useState('');

    const [imageTour, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageArray = [];
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            imageArray.push(URL.createObjectURL(file));
        }

        setSelectedImages(imageArray);
    };

    // Xử lí nhận dữ liệu
    const handleOnChangeNameTour = (e) => {
        setNameTour(e.target.value)
    }

    const handleOnChangeTypeTour = (e) => {
        setTypeTour(e.target.value)
    }

    const handleOnChangeDeparturePlace = (e) => {
        setDeparturePlace(e.target.value)
    }

    const handleOnChangeDepartureDate = (e) => {
        setDepartureDate(e.target.value)
    }

    const handleOnChangeDepartureTime = (e) => {
        setDepartureTime(e.target.value)
    }

    const handleOnChangeTravelDate = (e) => {
        setTravelDate(e.target.value)
    }
    
    const handleOnChangeAdultPrice = (e) => {
        let value = e.target.value;

        // Cập nhật giá trị vào trạng thái
        setAdultPrice(value)
        
    }

    const handleOnChangeTeenPrice = (e) => {
        setTeenPrice(e.target.value)
    }

    const handleOnChangeChildrenPrice = (e) => {
        setChildrenPrice(e.target.value)
    }

    const handleOnChangeInfantPrice = (e) => {
        setInfantPrice(e.target.value)
    }
    
    const handleOnChangeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const handleOnChangeTransport = (e) => {
        setTransport(e.target.value)
    }

    const handleOnChangeVisitedPlace = (e) => {
        setVisitedPlace(e.target.value)
    }
    const handleOnChangeFood = (e) => {
        setFood(e.target.value)
    }

    const handleOnChangeHotel = (e) => {
        setHotel(e.target.value)
    }
    
    const handleOnChangeSuitableObject = (e) => {
        setSuitableObject(e.target.value)
    }
    
    // const handleOnChangeSaleDescription = (e) => {
    //     setSaleDescription(e.target.value)
    // }

    const handleOnChangeSalePercent = (e) => {
        setSalePercent(e.target.value)
    }

    // 1 images
    // const convertToBase64 = (e) => {
    //     for(let i = 0; i < e.target.files.length; i++) {
    //         var reader = new FileReader();
    //         reader.readAsDataURL(e.target.files[0]);
    //         reader.onload = () => {
    //             console.log(reader.result);
    //             setSelectedImages(reader.result);
    //         }
    //         reader.onerror = (error) => {
    //             console.log("Error" + error);
    //         }
    //     }
    // }

    // Many images (still didn't work)

    const convertToBase64 = (e) => {
        const files = Array.from(e.target.files);

        Promise.all(
            files.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => 
                        resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                });
            })
        )
        .then((results) => {
            console.log(results); // Mảng chứa các chuỗi Base64 của các hình ảnh
            // Do something with the results
            setSelectedImages(results);
        })
        .catch((error) => {
            console.log("Error: " + error);
        });
    }

    // Chuyển dữ liệu thông qua axios

    const mutation = useMutationHooks (
        data => createTour(data)
    )

    const handleCreateTour = () => {
        mutation.mutate({
            nameTour,
            imageTour,
            typeTour,
            departurePlace,
            departureDate,
            departureTime,
            travelDate,
            adultPrice,
            teenPrice,
            childrenPrice,
            infantPrice,
            quantity,
            transport,
            visitedPlace,
            food,
            hotel,
            suitableObject,
            salePercent
        })
        console.log(imageTour); 
    }

    const { isSuccess } = mutation;
    
    useEffect(() => {
        if(isSuccess) {
            navigate('/admin/tour-management');
        }
    },[isSuccess])

    return (
        <>
            <HeaderComponent/>

            <div className="create-tour--body">
                <div className="title">Thêm thông tin tour</div>
                <div className="create-tour-info--container">
                    <div className="create-tour--item">
                        <p className="tour-name">Tên tour</p>
                        <input type="text" className="name-tour" required onChange={handleOnChangeNameTour} value={nameTour}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-image">Hình ảnh tour</p>
                        <input type="file" className="image-tour" multiple onChange={convertToBase64}/>
                        
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-type">Loại tour</p>
                        <input type="text" className="type-tour" onChange={handleOnChangeTypeTour}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-departure-place">Nơi khởi hành</p>
                        <input type="text" className="departure-place-tour" onChange={handleOnChangeDeparturePlace}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-departure-date">Ngày khởi hành</p>
                        <input type="text" className="departure-date-tour" onChange={handleOnChangeDepartureDate}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-departure-time">Thời gian khởi hành</p>
                        <input type="text" className="departure-time-tour" onChange={handleOnChangeDepartureTime}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-travel-date">Thời gian đi</p>
                        <input type="text" className="travel-date-tour" onChange={handleOnChangeTravelDate}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-adult-price">Giá người lớn</p>
                        <input type="number" className="adult-price-tour" onChange={handleOnChangeAdultPrice}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-teen-price">Giá trẻ em</p>
                        <input type="number" className="teen-price-tour" onChange={handleOnChangeTeenPrice}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-children-price">Giá trẻ nhỏ</p>
                        <input type="number" className="children-price-tour" onChange={handleOnChangeChildrenPrice}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-infant-price">Giá em bé</p>
                        <input type="number" className="infant-price-tour" onChange={handleOnChangeInfantPrice}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-quantity">Số lượng</p>
                        <input type="number" className="quantity-tour" onChange={handleOnChangeQuantity}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-transport">Phương tiện di chuyển</p>
                        <input type="text" className="transport-tour" onChange={handleOnChangeTransport}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-visited-place">Nơi tham quan</p>
                        <input type="text" className="visited-place-tour" onChange={handleOnChangeVisitedPlace}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-food">Ẩm thực</p>
                        <input type="text" className="food-tour" onChange={handleOnChangeFood}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-hotel">Khách sạn</p>
                        <input type="text" className="hotel-tour" onChange={handleOnChangeHotel}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-suitable">Đối tượng thích hợp</p>
                        <input type="text" className="suitable-tour" onChange={handleOnChangeSuitableObject}/>
                    </div>

                    <div className="create-tour--item">
                        <p className="tour-sale">Sale</p>
                        <input type="number" className="sale-tour" onChange={handleOnChangeSalePercent}/>
                    </div>
                </div>

                <button className="create-tour--btn" onClick={handleCreateTour}>Tạo mới</button>
            </div>
        </>
    )
}

export default CreateTourPage;