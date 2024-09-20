"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft } from "lucide-react"; // Import the ArrowLeft icon
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import DetailsForm from "@/components/DetailsForm";

const generateTimeSlots = () => {
  const times = [];
  let start = 10 * 60;
  const end = 18 * 60;

  while (start < end) {
    const hours = Math.floor(start / 60);
    const minutes = start % 60;
    const time = `${hours > 12 ? hours - 12 : hours}:${minutes === 0 ? "00" : minutes} ${hours >= 12 ? "PM" : "AM"}`;
    times.push(time);
    start += 30;
  }

  return times;
};

const DemoForm = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dateSelected, setDateSelected] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    language: "",
  });
  const timeSlots = generateTimeSlots();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setDateSelected(true);
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = async () => {
    const { firstName, lastName, email, phoneNumber, age, language } = formData;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/request-demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          age,
          language,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="rounded-md border-2 p-4 md:px-12 shadow-md max-h-screen overflow-y-scroll md:overflow-y-auto">
      <h1 className="text-center text-xl font-semibold border-b-2 py-2">Book Your Demo Class</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-[10rem] w-auto py-12">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
          <Image
            src="https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2022/09/Hindustani-Tongue-Horizontal-Color.png?fit=3646%2C1298&ssl=1"
            alt="Hindustani Tongue Logo"
            width={200}
            height={200}
            className="cursor-pointer mb-4 lg:mb-6"
            onClick={() => router.push("/home")}
          />
          <h1 className="text-black text-2xl lg:text-3xl font-semibold text-center lg:text-left mb-2 lg:mb-4">
            Hindustani Tongue
          </h1>

          {date && selectedTime && (
            <div className="bg-gray-100 rounded-lg p-4 shadow-md mb-4 w-full max-w-md">
              <h2 className="text-xl font-semibold">Selected Date and Time</h2>
              <p className="text-gray-700">{date.toDateString()}</p>
              <p className="text-gray-700">{selectedTime}</p>
            </div>
          )}

          <Badge variant="outline" className="w-full max-w-xs mb-4 flex items-center justify-center space-x-2 py-2">
            <Clock className="w-4 h-4" />
            <span>30 Minutes</span>
          </Badge>

          <p className="text-xl text-center lg:text-left">Choose a time that works for you.</p>
        </div>

        <div className="flex justify-center items-center w-full lg:w-1/2">
          {!dateSelected ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="w-full h-full rounded-md border p-4 sm:p-6 lg:p-8"
            />
          ) : !selectedTime ? (
            <div className="flex flex-col gap-y-4 w-full max-w-md">
              <h2 className="text-xl font-semibold text-center">Select a Time Slot</h2>
              <div className="overflow-y-auto max-h-[20rem] p-4 border rounded-md space-y-2">
                {timeSlots.map((time, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full ${selectedTime === time ? "bg-custom-orange text-white" : ""}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setDateSelected(false);
                    setDate(undefined);
                    setSelectedTime(undefined);
                  }}
                >
                  Go Back to Calendar
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full md:min-w-[25rem]">
              <div
                className="flex items-center mb-4 cursor-pointer text-custom-blue hover:scale-105"
                onClick={() => setSelectedTime(undefined)}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back</span>
              </div>

              <DetailsForm onFormChange={handleFormChange} onConfirmBooking={handleConfirmBooking} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
