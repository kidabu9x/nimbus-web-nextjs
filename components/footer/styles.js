import css from "styled-jsx/css";

export default css`
  .container {
    width: 100%;
    margin-bottom: 20px;
  }
  .copyright {
    text-align: center;
    background-color: #333333;
    margin: 0;
    padding: 0;
  }
  .information-field {
    display: flex;
    margin: auto;
    justify-content: space-between;
    background-color: #3c3d41;
    margin-bottom: 50px;
    -webkit-flex-direction: row;
    -webkit-flex-wrap: wrap;
  }
  .categories-field {
    background-color: red;
    width: 100%;
  }
  .information-txt {
    width: 250px;
  }
  .category-link {
    cursor: pointer;
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
