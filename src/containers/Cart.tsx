import React from 'react'
import { ProductsCart } from '../component/Product'





const listProductsCart = [
    {
        img: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        name: "Go Bar",
        giaBan: 45000,
        soLuong: 2,
    },
    {
        img: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        name: "Go Bar",
        giaBan: 30000,
        soLuong: 1,
    },
    {
        img: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        name: "Go Bar",
        giaBan: 50000,
        soLuong: 5,
    },


]
const allMoney = listProductsCart.map((item, index) => {
    return item.giaBan * item.soLuong;
}).reduce((x, y) => {
    return x + y;
})
console.log(allMoney);

export default function Cart() {
    return (

        <section className="Cart-secsion">
            <div>
                <div className="title">
                    <h1 className="tieuDe">List Cart</h1>
                    <h1 className="Product-Name">Product Name</h1>
                    <h1 className="Product-Name">Cost</h1>
                    <h1 className="Product-Name quantum">Quantum</h1>
                    <h1 className="Product-Name money">Money</h1>
                </div>
                <div className="giohang" id="giohang">
                    {listProductsCart.map((item) => {
                        return (
                            <ProductsCart
                                hinhAnh={item.img}
                                ten={item.name}
                                giaBan={item.giaBan}
                                soLuong={item.soLuong}
                                tongTien={item.giaBan * item.soLuong}
                            />
                        )
                    })

                    }

                </div>
                <div className="thongtin-khachhang">
                    <label htmlFor="tenKH">Tên khách hàng</label>
                    <input type="text" id="tenKH" />
                    <label htmlFor="tenKH" className="err" id="loiTen" />
                    <label htmlFor="diaChiKH">Địa chỉ </label>
                    <input type="text" id="diaChiKH" />
                    <label htmlFor="diaChiKH" className="err" id="loiDiaChi" />
                    <label htmlFor="soDT">Số điện thoại</label>
                    <input type="text" id="soDT" />
                    <label htmlFor="soDT" className="err" id="loiSDT" />
                    <label htmlFor="mailKH">Email</label>
                    <input type="text" id="mailKH" />
                    <label htmlFor="mailKH" className="err" id="loiMail" />
                    <button className="click" >Send Products</button>
                </div>
            </div>
        </section >

    )
}
