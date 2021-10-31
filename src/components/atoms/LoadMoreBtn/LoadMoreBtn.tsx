import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ILoadMoreBtn {
  title: string;
  onClickLoadMore?: () => void;
}

export const LoadMoreBtn = memo(({ title, onClickLoadMore }: ILoadMoreBtn) => {
  return (
    <button className="load-more-btn" onClick={onClickLoadMore}>
      {title}
    </button>
  );
});

/* let nextP = "";
  let testArray: any[] = [];
  async function test(a: any) {
    let response = await fetch(a);
    if (response.ok) {
      let info = await response.json();
      nextP = info.info.next;
      testArray.push(...info.results);
      console.log(testArray);
    }
  }
  <button className="load-more-btn" onClick={() => test(nextP)}>
      Load more
    </button> */
