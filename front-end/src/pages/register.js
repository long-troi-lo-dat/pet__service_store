import React from 'react';
import '../assets/css/register.css';
import '../assets/css/global.css';

function Register(props) {
    return (
        <div>
            <div class="trang-ng-nhp">
      
      <div class="trang-ng-nhp-child"></div>
      <form action="action_page.php" method="post">
      <div class="cha-c-ti-container">
        <span>Đã có tài khoản? </span>
        <span class="to-ti-khon">Đăng nhập</span>
      </div>
      <div class="trang-ng-nhp-item"></div>
      <div class="nh-ti-khon">Nhớ tài khoản</div>
      {/* <div class="qun-mt-khu">Quên mật khẩu</div> */}
      <b class="ng-nhp">ĐĂNG KÝ</b>
      <div class="trang-ng-nhp-inner"></div>
      <div class="email-wrapper">
        <input class="ti-khon" type="text" placeholder="Email" name="uname" required/>
      </div>
      <div class="mt-khu-wrapper">
      </div>
      <div class="mt-khu-wrapper">
        <input class="ti-khon" type="text" placeholder="Mật khẩu" name="uname" required />
      </div>
      <div class="ng-nhp-wrapper">
        <button class="ng-nhp1">ĐĂNG KÝ</button>
      </div>
      <div class="ti-khon-wrapper">
        <input class="ti-khon" type="text" placeholder="Tài khoản" name="uname" required/>
      </div>
      <img class="rectangle-icon" alt="" src="https://o.remove.bg/downloads/75099f3b-769d-46d5-8f44-bbcb154ba2e5/meme-meo-cuoi-removebg-preview.png" />
    </form>
    </div>
        </div>
    );
}

export default Register;