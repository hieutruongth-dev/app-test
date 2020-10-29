import React from 'react'

export default function Add() {
    return (
        <div>
            <div className="themSanPham">
        <label htmlFor="hinhAnh">Hình ảnh sản phẩm</label>
        <input type="text" id="hinhAnh" />
        <label htmlFor="hinhAnh" className="error" id="loi1" />
        <label htmlFor="ten">Tên sản phẩm</label>
        <input type="text" id="ten" />
        <label htmlFor="ten" className="error" id="loi2" />
        <label htmlFor="giaGoc">Giá gốc</label>
        <input type="number" id="giaGoc" />
        <label htmlFor="giaGoc" className="error" id="loi3" />
        <label htmlFor="phanTramGiamGia">Giảm giá (0- 100)%</label>
        <input type="number" id="phanTramGiamGia" />
        <label htmlFor="phanTramGiamGia" className="error" id="loi4" />
        <button className="bnt">Tạo sản phẩm</button>
      </div>
        </div>
    )
}
