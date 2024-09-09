"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const generateTimeSlots = () => {
  const times = [];
  let start = 10 * 60; // Start at 10:00 AM (in minutes)
  const end = 18 * 60; // End at 6:00 PM (in minutes)

  while (start < end) {
    const hours = Math.floor(start / 60);
    const minutes = start % 60;
    const time = `${hours > 12 ? hours - 12 : hours}:${minutes === 0 ? "00" : minutes} ${hours >= 12 ? "PM" : "AM"}`;
    times.push(time);
    start += 30; // Increment by 30 minutes
  }

  return times;
};

const DemoForm = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dateSelected, setDateSelected] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined); // Add state for selected time slot

  const timeSlots = generateTimeSlots();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setDateSelected(true);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    // You can add additional logic here if needed, e.g., saving the time slot or proceeding to the next step
  };

  return (
    <div className="p-0 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <Image
            src="https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2022/09/Hindustani-Tongue-Horizontal-Color.png?fit=3646%2C1298&ssl=1"
            alt="Hindustani Tongue Logo"
            width={250}
            height={250}
            className="cursor-pointer mb-4 md:mb-6"
            onClick={() => router.push("/home")}
          />
          <h1 className="text-black text-2xl font-semibold text-center md:text-left mb-2">Hindustani Tongue</h1>
          <Badge variant="outline" className="w-full max-w-xs mb-4 flex items-center justify-center space-x-2 py-2">
            <Clock className="w-4 h-4" />
            <span>30 Minutes</span>
          </Badge>
          <p className="text-xl text-center md:text-left">Choose a time that works for you.</p>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2">
          {!dateSelected ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="md:w-full h-full rounded-md border p-4 sm:p-6 lg:p-8"
            />
          ) : (
            <div className="flex flex-col gap-y-4 w-full">
              <h2 className="text-xl font-semibold text-center">Select a Time Slot</h2>
              <div className="overflow-y-auto max-h-[20rem] p-4 border rounded-md space-y-2">
                {timeSlots.map((time, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full ${selectedTime === time ? "bg-custom-orange text-white" : ""}`} // Optional: Highlight selected time
                    onClick={() => handleTimeSelect(time)} // Update the time slot state on click
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
                    setSelectedTime(undefined); // Reset selected time slot when going back to calendar
                  }}
                >
                  Go Back to Calendar
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
