"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface DetailsFormProps {
  onFormChange: (field: string, value: string) => void;
  onConfirmBooking: () => void;
}

const languagesData = [
  {
    language: "Hindi",
  },
  {
    language: "Punjabi",
  },
  {
    language: "Bengali",
  },
  {
    language: "Marathi",
  },
  {
    language: "Gujarati",
  },
  {
    language: "English",
  },
  {
    language: "Tamil",
  },
  {
    language: "Telugu",
  },
  {
    language: "Kannada",
  },
];

const DetailsForm: React.FC<DetailsFormProps> = ({ onFormChange, onConfirmBooking }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-semibold text-center">Fill in Your Details</h2>

      <Input placeholder="First Name" className="w-full" onChange={(e) => onFormChange("firstName", e.target.value)} />
      <Input placeholder="Last Name" className="w-full" onChange={(e) => onFormChange("lastName", e.target.value)} />
      <Input
        type="email"
        placeholder="Email"
        className="w-full"
        onChange={(e) => onFormChange("email", e.target.value)}
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        className="w-full"
        onChange={(e) => onFormChange("phoneNumber", e.target.value)}
      />

      <Select onValueChange={(value) => onFormChange("age", value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Age Group" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Under 18">Under 18</SelectItem>
          <SelectItem value="18-25">18-25</SelectItem>
          <SelectItem value="26-35">26-35</SelectItem>
          <SelectItem value="36+">36+</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onFormChange("language", value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="I want to learn...." />
        </SelectTrigger>
        <SelectContent>
          {languagesData.map((langObj, index) => (
            <SelectItem key={index} value={langObj.language}>
              {langObj.language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex justify-center mt-4">
        <Button variant="default" className="w-full bg-custom-blue hover:bg-custom-green" onClick={onConfirmBooking}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default DetailsForm;
