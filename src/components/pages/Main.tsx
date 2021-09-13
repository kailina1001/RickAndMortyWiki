import React, { useEffect, useState } from "react";
import { memo } from "react";


export const Home = memo(() => {
  return (
    <div className="app">
     {/*  <nav className="app-navig nav">
        <Navigation />
      </nav>
      <main className="app-wrapper">
        <Header
          searchValue={searchValue}
          onChangeHandler={onChangeHandler}
          onClick={onClick}
          onClickFilterBtn={onClickFilterBtn}
        />
        {isShowFilter ? (
          <FilterPage sortSettings={sortSettings} onClick={handlerSorting} />
        ) : null}
        <Title title={"Use filter or search to choose movie( use next tab)"} />
      </main> */}
    </div>
  );
});
