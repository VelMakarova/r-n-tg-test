import React from "react";
import {useTelegram} from "../../hooks";
import './header.scss';

export const Header = () => {
  const {user, onClose} = useTelegram();

  return (
    <header>
      <div className="logo"></div>
      <div className="user">
        {`Hello, ${user.username}`}
      </div>
    </header>
  )
}
