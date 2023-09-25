import React from 'react';
import '../assets/css/login.css';
import '../assets/css/global.css';

function Login(props) {
    return (
        <div>
            <div class="trang-ng-nhp">
      
      <div class="trang-ng-nhp-child"></div>
      <form action="action_page.php" method="post">
      <div class="cha-c-ti-container">
        <span>Chưa có tài khoản? </span>
        <span class="to-ti-khon">Tạo tài khoản</span>
      </div>
      <div class="trang-ng-nhp-item"></div>
      <div class="nh-ti-khon">Nhớ tài khoản</div>
      <div class="qun-mt-khu">Quên mật khẩu</div>
      <b class="ng-nhp">ĐĂNG NHẬP</b>
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
        <button class="ng-nhp1">ĐĂNG NHẬP</button>
      </div>
      <div class="ti-khon-wrapper">
        <input class="ti-khon" type="text" placeholder="Tài khoản" name="uname" required/>
      </div>
      <img class="rectangle-icon" alt="" src="https://o.remove.bg/downloads/5e45f587-863d-47d3-a40e-925b3db6d8d9/download-removebg-preview-removebg-preview.png" />
    </form>
    </div>
        </div>
    );
}

export default Login;