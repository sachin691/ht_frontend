"use client";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import Script from "next/script";
import { CreditCard } from "lucide-react";

const BuyCourse: React.FC = () => {
  const [successOrderId, setSuccessorderId] = useState("");
  const [successReceiptId, setSuccessreceiptId] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = displayRazorpay;
    document.body.appendChild(script);
  };

  const displayRazorpay = async () => {
    const res = await fetch("/api/payment/orders");
    const { orderId, amount } = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || "",
      amount: amount,
      currency: "INR",
      name: "TRAVELMAGNET INFOTECH PRIVATE LIMITED",
      description: "Service Purchase",
      order_id: orderId,
      handler: async (response: any) => {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        setSuccessorderId(response.razorpay_order_id);
        setSuccessreceiptId(response.razorpay_payment_id);
        alert("Payment Successful!");
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="p-4">
      <form onSubmit={loadRazorpay} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-  sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="number" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            ref={numberRef}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 flex items-center"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Proceed Payment
          </Button>
          <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
        </div>
      </form>
    </div>
  );
};

export default BuyCourse;
