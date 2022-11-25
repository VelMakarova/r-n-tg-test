import React from "react";
import {useTelegram} from "../../hooks";
import './footer.scss';

export const Footer = () => {
  const {onClose} = useTelegram();

  return (
    <footer>
      <button className="footer-link"></button>
    </footer>
  )
}
