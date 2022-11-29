import React, {useState, useEffect} from "react";
import "./form.scss";
import {useTelegram} from "../../hooks";

export const Form = () => {
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] = useState("paid");
  const {tg: {mainButton}} = useTelegram();

  useEffect(() => {
    mainButton.setParams({
      text: "send data"
    })
  }, [mainButton])

  useEffect(() => {
    !city || !address ? mainButton.hide() : mainButton.show();
  }, [city, address, mainButton])

  return (
    <div className="form-page">
      <form className="form" action="">
        <input
          className="input"
          name={"city"}
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="city"
        />
        <input
          className="input"
          name={"address"}
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="address"
        />
        <select className="select" name="delivery" value={delivery} onChange={e => setDelivery(e.target.value)} placeholder={"delivery"}>
          <option value="paid">paid</option>
          <option value="free">free</option>
        </select>
      </form>
    </div>
  )
}
