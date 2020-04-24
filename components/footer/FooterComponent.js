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
          <p className="information-txt">
            Tên miền:{" "}
            <span>
              <a href="https://nimbus.com.vn" target="_blank">
                https://nimbus.com.vn
              </a>
            </span>
          </p>
          <br />
          <p className="information-txt">Hotline: 0969 849 603</p>
        </div>
        <div className="footer-right">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnimbustrainingcenter%2F&tabs=timeline&width=300&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=709969695863741"
            width="300"
            height="140"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <div className="contact-logos">
            <a href="tel:+84969849603" style={{ color: "white" }}>
              <i
                aria-hidden="true"
                className="phone square icon logo-contact"
              ></i>
            </a>
            <a
              href="https://www.facebook.com/nimbustrainingcenter/"
              target="_blank"
              style={{ color: "white" }}
            >
              <i aria-hidden="true" className="facebook icon logo-contact"></i>
            </a>
            <a
              href="mailto:tuyensinh.nimbuscenter@gmail.com"
              style={{ color: "white" }}
            >
              <i aria-hidden="true" className="envelope icon logo-contact"></i>
            </a>
          </div>
          <button
            className="ui green button"
            style={{ backgroundColor: "#207347" }}
          >
            Liên hệ
          </button>
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
