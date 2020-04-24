import React from "react";
import styles from "./styles";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <footer className="ui inverted vertical footer segment form-page">
      <div className="information-field">
        <div>
          <img
            alt="logo"
            src="/static/assets/images/logo_footer.png"
            className="logo"
          />
          <p className="information-txt">CÔNG TY TNHH NIMBUS</p>
          <p className="information-txt">
            Địa chỉ: Số 5 ngõ 128 Phố Vọng, Hà Nội
          </p>
          <p className="information-txt">
            Giấy phép ĐKKD số 0107927478 do Sở Kế hoạch và Đầu tư Hà Nội cấp
          </p>
          <p className="information-txt">Tên miền: https://nimbus.com.vn</p>
          <br />
          <p className="information-txt">Hotline: 0969 849 603</p>
        </div>
        <div>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/nimbustrainingcenter/"
            data-width="340"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <iframe src="https://www.facebook.com/nimbustrainingcenter/" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <Typography variant="body1" gutterBottom>
          Copyright @ 2020 - Bản quyền của Công ty TNHH Giáo dục và Đào tạo
          Nimbus
        </Typography>
      </div>
      <style jsx>{styles}</style>
    </footer>
  );
};

export default Footer;
