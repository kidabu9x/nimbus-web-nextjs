import css from "styled-jsx/css";

export default css`
  .container {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    -moz-box-shadow: 0px 1px 1px 1px #ccc;
    -webkit-box-shadow: 0px 1px 1px 1px #ccc;
    box-shadow: 0px 1px 1px 1px #ccc;
  }
  .container-search {
    width: 90%;
    margin: auto;
  }
  .header-logo {
    padding-top: 14px;
    display: flex;
  }
  .logo {
    height: 37px;
    width: auto;
  }
  .header-search {
    height: 30px;
    border-color: #fff;
    margin-left: 40px;
  }
  .btn-write {
    border-radius: 20px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .nav-menu {
    width: 90%;
    padding-left: 5%;
    -webkit-flex-direction: row;
    -webkit-flex-wrap: wrap;
  }
`;
