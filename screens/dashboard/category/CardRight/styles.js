import css from "styled-jsx/css";

export default css`
  .card-right {
    width: 100%;
    cursor: pointer;
  }
  .image img {
    display: block;
    max-height: 100px;
    width: 100%;
    object-fit: cover;
  }
  .author-img {
    border-radius: 30px;
    max-width: 40px;
    height: auto;
    margin-right: 20px;
  }
  .author {
    display: flex;
  }
  .author-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 40px;
  }
`;
