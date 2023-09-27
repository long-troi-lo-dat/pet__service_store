import React from 'react';
import '../assets/css/cart.css';
import '../assets/css/global3.css';

function Cart(props) {
    return (
        <>
            

            <div class="trang-gi-hng">
      <div class="gi-hng">GIỎ HÀNG</div>
      <div class="trang-gi-hng-inner"></div>
      <div class="rectangle-div"></div>
      <div class="trang-gi-hng-child1"></div>
      <div class="sn-phm">Sản phẩm</div>
      <div class="gi">Giá</div>
      <div class="s-lng">Số lượng</div>
      <div class="tm-tnh">Tạm tính</div>
      <img class="x-circle-icon" alt="" src="./public/xcircle.svg" />

      <img class="rectangle-icon" alt="" src="./public/rectangle-147@2x.png" />

      <div class="pate-lon-ch">
        Pate lon chó mèo [Cá Ngừ Trắng & Thịt Gà] 80g
      </div>
      <div class="div31">
        150.000
        <span class="span">đ</span>
      </div>
      <div class="div4">
        300.000
        <span class="span">đ</span>
      </div>
      <input type="number" class="vector-parent"/>

      <input class="m-u-i-wrapper" placeholder="Mã ưu đãi"/>
       
      <button class="p-dng-wrapper">ÁP DỤNG</button>
      <button class="cp-nhp-gi-hng-wrapper">CẬP NHẬP GIỎ HÀNG</button>
      <button class="tin-hnh-thanh-ton-wrapper" onclick="alert('Hello world!')">
       TIẾN HÀNH THANH TOÁN
      </button>
      <div class="trang-gi-hng-child2"></div>
      <div class="vn-chuyn-n-container">
        <span>Vận chuyển đến</span>
        <span class="h-ch-minh"> Hồ Chí Minh. </span>
      </div>
      <div class="cng-gi-hng">Cộng giỏ hàng</div>
      <div class="line-div"></div>
      <div class="trang-gi-hng-child3"></div>
      <div class="trang-gi-hng-child4"></div>
      <div class="trang-gi-hng-child5"></div>
      <div class="tm-tnh-parent">
        <div class="tng">Tạm tính :</div>
        <div class="div5">
          300.000
          <span class="span">đ</span>
        </div>
      </div>
      <div class="tng-parent">
        <div class="tng">Tổng :</div>
        <div class="div5">
          330.000
          <span class="span">đ</span>
        </div>
      </div>
      <div class="giao-hng-parent">
        <div class="tng">Giao hàng :</div>
        <div class="div5">
          30.000
          <span class="span">đ</span>
        </div>
      </div>
      <div class="i-a-ch">Đổi địa chỉ</div>
      <button class="tin-hnh-thanh-ton-wrapper" onclick="alert('Hello world!')">
        TIẾN HÀNH THANH TOÁN
       </button>
       </div>


        </>
    );
}

export default Cart;