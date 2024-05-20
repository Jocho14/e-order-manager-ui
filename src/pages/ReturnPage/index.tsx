import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { fetchSessionStatus } from "../../services/payment";
import SuccessPage from "../SuccessPage";

import "./styles.scss";

const ReturnPage = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [lineItems, setLineItems] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    if (!sessionId) {
      return;
    }

    const getSessionStatus = async () => {
      try {
        const data = await fetchSessionStatus(sessionId);
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
        setLineItems(data.line_items);
      } catch (err) {
        console.log(err);
      }
    };

    getSessionStatus();
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status == "complete") {
    console.log("complete status");
    console.log(lineItems);
    // console.log(lineItems[0].product_metadata.database_id);
    return <SuccessPage email={customerEmail} lineItems={lineItems} />;
  }

  return null;
};

export default ReturnPage;
