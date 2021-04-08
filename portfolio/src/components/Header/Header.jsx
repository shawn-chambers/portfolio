import React from "react";
import LogIn from "../LogIn/LogIn";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <>
      <LogIn />
      <div className="resume__content--header-container">
        <div className="header">
          <div className="header__tabs--left">
            <div className="header__tab">
              <div className="header__tab--selected">Article</div>
            </div>
            <div className="header__tab">
              <div className="header__tab--unselected">Talk</div>
            </div>
          </div>
          <div className="header__tabs--right">
            <div className="header__tab">
              <div className="header__tab--selected">Read</div>
            </div>
            <div className="header__tab">
              <div className="header__tab--unselected">View source</div>
            </div>
            <div className="header__tab">
              <div className="header__tab--unselected">View history</div>
            </div>
            <div className="header__tab">
              <div className="search__container">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header