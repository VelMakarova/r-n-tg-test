import React from "react";
import {useTelegram} from "../../hooks";
import './footer.scss';
import {Button} from "../Button/Button";

export const Footer = () => {
  const {onClose} = useTelegram();

  return (
    <footer className="footer">
      <Button
        title="close"
        onClick={onClose}
        className="full-width"
      />
    </footer>
  )
}
