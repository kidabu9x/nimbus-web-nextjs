import css from "styled-jsx/css";

export default css`
  :global(img) {
    max-width: 100%;
  }
  .container {
    margin: 20px;
    margin-left: 6%;
  }
  .right-field {
    padding-left: 0px;
  }
  .tag-and-author {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .field-cke {
    width: 100%;
    margin-bottom: 40px;
  }
  .img-author {
    border-radius: 30px;
    max-width: 30px;
    height: auto;
  }
  .category-tag {
    background-color: #207347;
    color: white;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .tag-tag {
    background-color: #207347;
    color: white;
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;
