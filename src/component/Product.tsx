import React from 'react'
import { saveCart } from '../AddCart'



export function ProductsCart(Props: propsCart) {
    return (

        <div className="item-giohang">
            <div className="hinhanh">
                <img src={Props.hinhAnh} alt="" />
            </div>
            <p className="ten">
                {Props.ten}
            </p>
            <div className="gia">
                {Props.giaBan}
            </div>
            <p className="soluong">{Props.soLuong}</p>
            <p className="tongtien">{Props.giaBan * Props.soLuong}</p>
        </div>

    )
}


export default function Products(Props: Props) {
    return (
        <div>
            <div className="sp">
                <div className="chuaImg">
                    <img src={Props.hinhAnh} alt="" />
                    <div className="themVaoGioHang" onClick={() => saveCart()}  >

                        Add Cart
                    </div>
                </div>
                <div className="noiDungSanPham">
                    <div className="tenSanPham">
                        {Props.ten}
                    </div>
                    <div className="giaSanPham">
                        {Props.giaBan}
                    </div>
                </div>
                <div className="phanTramGiamGia">
                    {Props.phanTramGiamGia}
                </div>

            </div>
        </div>
    )
}

type Props = {
    hinhAnh: string,
    ten: string,
    giaBan: number,
    phanTramGiamGia: number,
    iD: string;
}
type propsCart = {
    hinhAnh: string,
    ten: string,
    giaBan: number,
    soLuong: number,
    tongTien: number,
}







