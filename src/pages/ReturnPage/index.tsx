import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import SuccessPage from "../SuccessPage";

import "./styles.scss";

const ReturnPage = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status == "complete") {
    return <SuccessPage email={customerEmail} />;
  }

  return null;
};

export default ReturnPage;
