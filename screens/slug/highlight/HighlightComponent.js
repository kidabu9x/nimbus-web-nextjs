import React, { useState } from "react";
import styles from "./styles";
import { HighlightItemComponent } from "./Item/Item";
import { useRouter } from "next/router";

export const HighlightComponent = ({ data }) => {
  const router = useRouter();

  const [txtSearch, setTxtSearch] = useState("");

  const onSearch = () => {
    if (txtSearch !== "") {
      console.log(txtSearch);
      router.push(`/search?query=${txtSearch}`);
    }
  };

  const onChangeTxtSearch = (evt) => {
    setTxtSearch(evt.target.value);
  };

  const onKeyDownSearch = (evt) => {
    if (evt.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="right floated five wide column">
      <div className="container">
        <div className="ui icon input input-field">
          <input
            type="text"
            placeholder="Search..."
            onChange={onChangeTxtSearch}
            onKeyDown={onKeyDownSearch}
          />
          <i
            aria-hidden="true"
            className="search circular link icon"
            onClick={onSearch}
          ></i>
        </div>
        <div>
          <h2 className="header-title">Bài viết nổi bật:</h2>
          <div role="list" className="ui list list-field">
            {data.map((highlight, index) => (
              <HighlightItemComponent key={index.toString()} data={highlight} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};
