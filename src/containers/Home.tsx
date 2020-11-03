import React from 'react'
import { uuid } from 'uuidv4';

import Products from '../component/Product'
import { sanPham } from '../model/TestModel'




const listItem: sanPham[] = [
    {
        hinhAnh: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        ten: "Go Bar",
        giaBan: 48000,
        phanTramGiamGia: 10,
        id: uuid(),
    },
    {
        hinhAnh: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        ten: "Go Bar",
        giaBan: 48000,
        phanTramGiamGia: 10,
        id: uuid(),
    },
    {
        hinhAnh: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        ten: "Go Bar",
        giaBan: 48000,
        phanTramGiamGia: 10,
        id: uuid(),
    },
    {
        hinhAnh: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        ten: "Go Bar",
        giaBan: 48000,
        phanTramGiamGia: 10,
        id: uuid(),
    },
    {
        hinhAnh: "https://static.wixstatic.com/media/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.png/v1/fill/w_225,h_225,al_c,q_85,usm_0.66_1.00_0.01/94e66f_a0e6df7ac2b14b7d8d3ff164b6266268~mv2_d_1500_1500_s_2.webp",
        ten: "Go Bar",
        giaBan: 48000,
        phanTramGiamGia: 10,
        id: uuid(),
    },

]
// ].filter((item) => {
//     return item.giaBan > 50000;
// })
export default function Home() {
    return (
        <div className="App">

            <section className="App-secsion">
                <div className="products">
                    <div className="headerProduct">
                        <h1>Our Products</h1>
                    </div>
                    <div className="sanPham" >
                        {listItem.map((item) => {
                            return (
                                <Products
                                    hinhAnh={item.hinhAnh}
                                    ten={item.ten}
                                    giaBan={item.giaBan}
                                    phanTramGiamGia={item.phanTramGiamGia}
                                    iD={item.id}
                                />
                            )
                        })}

                    </div>
                </div>
            </section>

        </div>
    )
}

