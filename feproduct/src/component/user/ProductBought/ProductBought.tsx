import React, {BaseSyntheticEvent, useState,useEffect} from "react";
import styled from "styled-components";
import {mobile, laptop,table} from "../response";
import "./ProductBought.scss";
import Cart from "../../../asset/Cart/120_34491_corsair_t3_rush_charcoal__1_.jpg";
import * as Actions from "../../../store/action/index"; 
import { useSelector,RootStateOrAny,useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { Product } from "../../../types/productType";
import { yupResolver } from '@hookform/resolvers/yup'
import {useForm} from "react-hook-form";
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as actions from "../../../store/action/index"; 
import { reGister,ProductCart } from "../../../types/hookForm";
let city = [
    {
        id: 1,
        name: "Gia Lai"
    },
    {
        id: 2,
        name: "Vũng Tàu"
    },
    {
        id: 3,
        name: "Lâm Đồng"
    },
    {
        id: 4,
        name: "Dăk Nông"
    },
    {
        id: 5,
        name: "TP.HCM"
    },
    {
        id: 6,
        name: "Cà Mau"
    },
    {
        id: 7,
        name: "Đồng Tháp"
    },
    {
        id: 8,
        name: "Đắc Lắc"
    },
        {
        id: 9,
        name: "Kontum"
    },
    {
        id: 10,
        name: "Đà Nẵng"
    },
]
const  ProductBought = ()  => {
    let { cart,totalMoney } = useSelector((state:RootStateOrAny) => state.dataUser);

    let dispatch = useDispatch();
    const removeAllCart = () => {
        let actions =  Actions.removeAllCartUser();
        dispatch(actions);
    }
    const removeDetailCart = (id: number) => {
        let actions =  Actions.removeDetailCartUser(id);
        dispatch(actions);
    }
    const increaseMinusDetailCart = (id: number,calculation: string) => {
        let actions =  Actions.increaseMinusCart(id,calculation);
        dispatch(actions);
    }
    useEffect(()=> {
        let actions =  Actions.loadTotalMoney();
        dispatch(actions);
    },[])
    const [value, setValue] = useState<ProductCart>({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        address: '',
        city: '',
        Note: "",
        company: "",
        addressCompany: "",
        bank: ""
    });
      const formSchema = Yup.object().shape({
        fullName: Yup.string().required('Họ Và Tên Cần Phải nhập'),
        email:  Yup.string().email().required('Email Cần Phải nhập'),
        gender:  Yup.string().required('Chọn Gender Cần Phải nhập'),
        bank:  Yup.string(),
        city:  Yup.string().required('Thành phố Cần Phải nhập'),
        address:  Yup.string().required('Địa chỉ Cần Phải nhập'),
        Note:  Yup.string().required('Ghi Chú Cần Phải nhập'),
        phoneNumber: Yup.string().required('Số điện thoại Cần Phải nhập'),
      })
      const formOptions = { resolver: yupResolver(formSchema) };
      const { register, handleSubmit, formState } = useForm(formOptions);
      const { errors } = formState
    const changeValue = (event:  React.ChangeEvent<{ name: string, value: unknown}>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const clickValue = async (data: BaseSyntheticEvent<object, any, any> | undefined,event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {fullName,phoneNumber,address,gender,city,email } = value;
        // let action = actions.signup(fullName,email, phoneNumber, address,city,gender);
        // await dispatch(action);
    }
    return (
       <div className="ContainerCart">
           {
           cart?.length === 0 ? <h1>Có 0 sản phẩm trong giỏ hàng</h1> : <div className="itemyoucart">
             <div className="itemyoucart__title">
                <h1>Giỏ hàng của bạn</h1>
                <span>Liên hệ nhân viên trước khi chuyển tiền mua hàng.</span>
                <span>Để đặt hàng, quý khách vui lòng kiểm tra sản phẩm, số lượng, giá, màu sắc và điền các thông tin dưới đây:</span>
             </div>
             <div className="itemyoucart__removecart">
                <button onClick={removeAllCart}  className="btn-cart-red">Xóa Khỏi giỏ hàng</button>
             </div>
             {cart?.map((res: Product,index: number)=> {
                 return <div className="itemyoucart__detail" key={index}>
                            <div className="itemyoucart__detail--img">
                                <img src={ res?.images && res?.images[0]?.url} />
                                <div>
                                    <DeleteIcon className="icon__delete" onClick={() => {removeDetailCart(index)}} />
                                </div>
                            </div>
                            <div className="itemyoucart__detail--name">
                                <div className="Product">
                                    <span ><Link to={`/system/productdetail?idproduct=${res?._id}`} className="Product__name" >{res.Product_name}</Link></span>
                                    <span className="Product__id">{res?.options && res?.options[0]?.code}</span>
                                    <span className="Product__Insurance">Bảo hành: 24 Tháng</span>
                                </div>
                            </div>
                            <div className="itemyoucart__detail--price">
                                <del className="price__reduction">{res?.options && res?.options[0]?.price}</del>
                                <span className="price__real">{res?.options && res?.options[0]?.price}</span>
                                <span className="price__sum">Tổng: {res?.totalAmount}</span>
                                <div className="price__count">
                                    <a className="price__minus" onClick={() => {increaseMinusDetailCart(index,"minus")}}>-</a>
                                    <input className="price__value" value={res?.quantityItems}  />
                                    <a className="price__add" onClick={() => {increaseMinusDetailCart(index,"plus")}}>+</a>
                                </div>
                            </div>
                        </div>
             })}
              <div className="itemyoucart__total">
                <div className="itemyoucart__total--promotion">
                    <div className="name_promotion">
                        <span>Mã giảm giả / Quà tặng</span>
                    </div>
                    <div className="write__promotion">
                        <input placeholder="Nhập mã giảm giá" />
                        <button>Áp dụng</button>
                    </div>
                </div>
                <div className="itemyoucart__total--totalMoney">
                    <span>Phí vận chuyển: 0 đ</span>
                    <span>Phí thu hộ: 0 đ</span>
                    <span className="name_totalMoney">Tổng cộng: {totalMoney && totalMoney.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </span>
                    <span>Giảm giá: 0 đ</span>
                    <span className="name_totalMoney">Thanh toán: {totalMoney && totalMoney.toLocaleString('vi', {style : 'currency', currency : 'VND'})} </span>
                    <span><b>In báo giá</b>  <b>Tải file excel</b></span>
                </div>
             </div>
             <div className="itemyoucart__button">
                 <button className="btn-cart-red">Đặt Hàng</button>
                 <button className="btn-cart-orange">Mua Trả Góp</button>
             </div>
             </div>
           }
           {
            cart?.length === 0 ? <h1>Có 0 sản phẩm trong giỏ hàng</h1> :    
            <form className="itemorder" onSubmit={handleSubmit((data: any,event:any) => clickValue(data,event))}>
               <div className="itemorder__inforCustomer">
                   <div>
                       <h1>Đặt Hàng</h1>
                   </div>
                   <div>
                       <h3>1.Thông tin khách hàng</h3>
                   </div>
                   <div>
                      <input type="radio" 
                                value="Male" 
                                {...register('gender')}  id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                name="gender"
                                onChange={(event) => changeValue(event)}
                      /> Anh 
                      <div className="invalid-feedback">{errors.gender?.message}</div>
                      <input type="radio"
                                 value="FeMale" 
                                 {...register('gender')}  id="gender" className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                 name="gender"
                                 onChange={(event) => changeValue(event)}

                      />Chị
                        <div className="invalid-feedback">{errors.gender?.message}</div>
                   </div>
                   <div className="itemorder__input">
                      <input placeholder="Họ Và tên" 
                                       {...register('fullName')}
                                       name="fullName"
                                       className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                       onChange={(event) => changeValue(event)}
                                />
                      <div className="invalid-feedback">{errors.fullName ?.message}</div>
                      <input  placeholder="email" type="email"
                                        {...register('email')}
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                      <input placeholder="Số Điện Thoại"    
                                        {...register('phoneNumber')}
                                        name="phoneNumber"
                                        className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                        onChange={(event) => changeValue(event)}
                                />
                      <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                      <select>
                        {
                            city.map((res,index)=>{
                               return <option>{res.name}</option>
                            })
                        }
                      </select>
                      <textarea placeholder="Địa Chỉ"
                                         {...register('address')}
                                         name="address"
                                         className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                         onChange={(event) => changeValue(event)}
                      ></textarea>
                      <div className="invalid-feedback">{errors.address?.message}</div>
                      <textarea placeholder="Ghi Chú"
                                          {...register('Note')}
                                          name="Note"
                                          className={`form-control ${errors.Note ? 'is-invalid' : ''}`}
                                          onChange={(event) => changeValue(event)}
                      ></textarea>
                      <div className="invalid-feedback">{errors.Note?.message}</div>
                   </div>
               </div>
               <div className="itemorder__inforCustomer">
                   <div>
                       <h3>2.Hình thức thanh toán</h3>
                   </div>
                   <div>
                      <input type="radio" /> COD 
                      <input type="radio" /> Chuyển Khoản
                   </div>
               </div>
               <div className="itemorder__inforCustomer">
                   <div>
                       <h3>3.Xuất hóa đơn công ty</h3>
                   </div>
                   <div className="itemorder__input">
                       <div className="itemorder__exportBill">
                           <span>Công ty /tổ chức</span>
                           <input  />
                       </div>
                       <div className="itemorder__exportBill">
                           <span>Địa chỉ:</span>
                           <input  />
                       </div>
                       <div className="itemorder__exportBill">
                           <span>Mã số thuế</span>
                           <input  />
                       </div>
                   </div>
               </div>
               <div className="itemorder__inforCustomer">
                   <div>
                       <h3>4.Hình thức vận chuyển</h3>
                   </div>
                   <div>
                      <input type="checkbox" /> giao hàng bình thường 
                   </div>
                   <div className="itemorder__SendOrder">
                       <button>Gửi đơn hàng</button>
                   </div>
               </div>
            </form>
           }
       </div>
    );
}

export default ProductBought;
