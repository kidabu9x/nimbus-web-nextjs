import css from "styled-jsx/css";

export default css`
  .container {
    width: 100%;
    margin-bottom: 20px;
  }
  .input-field {
    width: 85%;
    margin-bottom: 30px;
  }
  .list-field {
    margin-right: 10%;
  }
  .copyright {
    text-align: center;
    background-color: #333333;
    margin: 0;
    padding: 0;
  }
  .information-field {
    display: flex;
    width: 60%;
    margin: auto;
    justify-content: space-between;
    background-color: #3c3d41;
    margin-bottom: 50px;
    -webkit-flex-direction: row;
    -webkit-flex-wrap: wrap;
  }
  .information-txt {
    width: 60%;
  }
  .logo {
    height: 30px;
  }
  .footer-right {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .contact-logos {
    display: flex;
    justify-content: center;
  }
  .logo-contact {
    font-size: 30px;
    padding: 5px;
    margin-bottom: 8px;
  }
  @media (min-height: 320px) {
    .ui.footer.form-page {
      /* Increased specificity for SO snippet priority */
      bottom: 0;
      width: 100%;
      background-color: #3c3d41;
      padding-bottom: 0px;
    }
  }
`;
