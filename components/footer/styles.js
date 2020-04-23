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
  @media (min-height: 320px) {
    .ui.footer.form-page {
      /* Increased specificity for SO snippet priority */
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
`;
