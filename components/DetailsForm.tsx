"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const DetailsForm = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-8">
      <h2 className="text-xl font-semibold text-center">Fill in Your Details</h2>

      {/* Input Fields */}
      <Input placeholder="First Name" className="w-full" />
      <Input placeholder="Last Name" className="w-full" />
      <Input type="email" placeholder="Email" className="w-full" />
      <Input type="tel" placeholder="Phone Number" className="w-full" />

      {/* Age Group Selection */}
      <Select>
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

      {/* Learning Objective */}
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="I want to learn...." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Hindi">Hindi</SelectItem>
          <SelectItem value="Punjabi">Punjabi</SelectItem>
          <SelectItem value="Bengali">Bengali</SelectItem>
          <SelectItem value="Marathi">Marathi</SelectItem>
        </SelectContent>
      </Select>

      {/* Confirm Button */}
      <div className="flex justify-center mt-4">
        <Button variant="default" className="w-full bg-custom-blue hover:bg-custom-green">
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default DetailsForm;
