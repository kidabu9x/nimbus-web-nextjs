import css from "styled-jsx/css";

export default css`
  .card-left {
    width: 100%;
    cursor: pointer;
  }
  .image {
    background-size: cover;
  }
  .image img {
    display: block;
    max-height: 200px;
    width: 100%;
    object-fit: cover;
  }
  .img-author {
    border-radius: 30px;
    max-width: 40px;
    height: auto;
    margin-right: 20px;
  }
`;
