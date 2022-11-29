import React from "react";
import {useTelegram} from "../../hooks";
import './header.scss';

export const Header = () => {
  const {user} = useTelegram();

  return (
    <header className="header">
      <div className="logo"></div>
      <div className="user">
        {`Hello, ${user?.username}`}
      </div>
    </header>
  )
}
