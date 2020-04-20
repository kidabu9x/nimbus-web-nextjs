import css from "styled-jsx/css";

export default css`
  .container {
    width: 100%;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .container-search {
    width: 86%;
    margin: auto;
  }
  .header-logo {
    margin-top: 14px;
    display: flex;
  }
  .logo {
    height: 37px;
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
    width: 86%;
    padding-left: 7%;
  }
`;
