import React from "react";
import {useTelegram} from "../../hooks";
import './footer.scss';

export const Footer = () => {
  const {onClose} = useTelegram();

  return (
    <footer className="footer">
      <button className="footer-link" onClick={onClose}>Close</button>
    </footer>
  )
}
