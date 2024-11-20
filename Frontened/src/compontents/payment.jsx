import React, { useState } from "react";
import Footer from "./Footer";
import pre from "/public/pre.png";
import images from "/public/images.png";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCreditCard, FaPaypal, FaGooglePay, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function PaymentGateway() {
  const navigate = useNavigate();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(null);
  const [orderAmount] = useState(120.00);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePayment = () => {
    setPaymentProcessing(true);

   
    setTimeout(() => {
      const success = Math.random() > 0.3; 
      setPaymentProcessing(false);
      setPaymentSuccessful(success);
      if (success) {
        toast.success("Payment processed successfully!", { position: "top-center" });
      } else {
        toast.error("Payment failed. Please try again.", { position: "top-center" });
      }
    }, 2000);
  };

  const userDetail = {
    userD: localStorage.getItem("User")
      ? JSON.parse(localStorage.getItem("User"))
      : [],
  };

  const userName = userDetail.userD?.user?.fullname || "User";
  const userEmail = userDetail.userD?.user?.email || "user@example.com";

  return (
    <>
     
      <div className="navbar py-3 px-6 shadow-lg text-white">
        <div className="navbar-start flex items-center space-x-4">
          <button
            className="text-white text-xl"
            onClick={() => navigate('/course')}
          >
            <i className="fas fa-arrow-left text-lg"></i>
          </button>

          <span className="text-3xl font-bold cursor-pointer text-gray-800">
            <span className="text-blue-500">Cloth</span>
            <span className="text-yellow-500">Haven</span>
          </span>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <img
            src={images}
            alt="Image"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate("/course")}
          />
          <img
            src={pre}
            alt="Pre Image"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate("/course")}
          />
        </div>
      </div>

     
      <MDBContainer
        fluid
        className="py-5"
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="5">
            <MDBCard
              className="rounded-3 shadow-xl border-0"
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "15px",
                animation: "fadeIn 1s ease-out",
              }}
            >
              <MDBCardBody>
                
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-dark">Complete Your Payment</h3>
                  <p className="text-muted">Secure and fast payment process</p>
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <div>
                    <h6 className="text-muted">Hello, {userName}!</h6>
                    <p className="text-muted">{userEmail}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-muted">Order Summary</h6>
                  <p className="text-dark">Total: ${orderAmount.toFixed(2)}</p>
                </div>

               
                <div className="d-flex justify-content-between mb-4">
                  <div
                    className={`payment-icon ${paymentMethod === 'creditCard' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('creditCard')}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  >
                    <FaCreditCard size={30} className="text-blue-500" />
                    <p className="text-center text-muted">Credit Card</p>
                  </div>
                  <div
                    className={`payment-icon ${paymentMethod === 'paypal' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('paypal')}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  >
                    <FaPaypal size={30} className="text-blue-500" />
                    <p className="text-center text-muted">PayPal</p>
                  </div>
                  <div
                    className={`payment-icon ${paymentMethod === 'googlePay' ? 'active' : ''}`}
                    onClick={() => setPaymentMethod('googlePay')}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                  >
                    <FaGooglePay size={30} className="text-blue-500" />
                    <p className="text-center text-muted">Google Pay</p>
                  </div>
                </div>

                <form>
               
                  <MDBInput
                    label="Cardholder's Name"
                    id="cardholderName"
                    type="text"
                    size="lg"
                    className="mb-4"
                    placeholder="Enter cardholder's name"
                  />

                  <MDBInput
                    label="Card Number"
                    id="cardNumber"
                    type="text"
                    size="lg"
                    className="mb-4"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />

                  <MDBRow className="mb-4">
                    <MDBCol size="6">
                      <MDBInput
                        label="Expiry Date"
                        id="expiryDate"
                        type="text"
                        size="lg"
                        placeholder="MM/YYYY"
                      />
                    </MDBCol>
                    <MDBCol size="6">
                      <MDBInput
                        label="CVV"
                        id="cvv"
                        type="text"
                        size="lg"
                        placeholder="XXX"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    label="Billing Address"
                    id="billingAddress"
                    type="text"
                    size="lg"
                    className="mb-4"
                    placeholder="Enter your billing address"
                  />


                  <MDBBtn
                    color="success"
                    size="lg"
                    block
                    onClick={handlePayment}
                    disabled={paymentProcessing}
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#28a745",
                      borderColor: "#28a745",
                      cursor: paymentProcessing ? "not-allowed" : "pointer",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                    }}
                    className="hover:scale-105 hover:shadow-xl"
                  >
                    {paymentProcessing ? (
                      <div className="spinner-border text-light" style={{ width: "1.5rem", height: "1.5rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </MDBBtn>
                </form>

                {paymentSuccessful === true && !paymentProcessing && (
                  <div className="mt-4 text-center text-success">
                    <FaCheckCircle size={30} />
                    <h6>Payment Successful!</h6>
                    <p>Your payment has been successfully processed. Thank you for your order.</p>
                  </div>
                )}

                {paymentSuccessful === false && !paymentProcessing && (
                  <div className="mt-4 text-center text-danger">
                    <FaTimesCircle size={30} />
                    <h6>Payment Failed</h6>
                    <p>Something went wrong with your payment. Please try again.</p>
                  </div>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Footer />
    </>
  );
}
