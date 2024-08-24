"use client";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Form and Map Section */}
      <div className="flex flex-wrap justify-between mb-12">
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <Card className="bg-gray-200 border-custom-blue">
            <CardContent className="p-5">
              <form className="space-y-4">
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Email"
                />
                <input
                  type="phone"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Phone"
                />
                <input
                  type="subject"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Subject"
                />
                <textarea
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Your Message"
                  rows={5}
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-custom-orange text-white rounded-lg hover:bg-custom-green"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5662291474095!2d88.36389551495757!3d22.57264698518115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027699f527bafd%3A0x37d520c5b3a8eb8!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1621606648444!5m2!1sen!2sus"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mb-12" />

      {/* Feedback and Headquarters Section */}
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-semibold mb-4">Give Us Feedback</h3>
          <p className="mb-6">
            Got suggestions? Ideas? We wouldn’t be here without our users, so we’re always happy to receive feedback
            from you. Contact us at{" "}
            <a href="mailto:team@hindustanitongue.com" className="text-custom-orange underline">
              team@hindustanitongue.com
            </a>
            .
          </p>

          <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
          <p className="mb-6">
            If there’s a question you can’t find the answer to at the Support Center, you can contact us at{" "}
            <a href="mailto:help@hindustanitongue.com" className="text-custom-orange underline">
              help@hindustanitongue.com
            </a>
            .
          </p>

          <h3 className="text-2xl font-semibold mb-4">Media and Business Inquiries</h3>
          <p>
            If you’re from the media or a potential business partner and are interested in contacting a company
            representative, please write to{" "}
            <a href="mailto:team@hindustanitongue.com" className="text-custom-orange underline">
              team@hindustanitongue.com
            </a>
            . We’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-semibold mb-1">HEADQUARTERS</h3>
          <p className="text-gray-600 mb-1">Last updated on May 3rd 2023</p>
          <p className="mb-1">You may contact us using the information below:</p>
          <p className="mb-1 font-semibold">Merchant Legal Entity Name:</p>
          <p className="mb-1">Hindustani Tongue</p>
          <p className="mb-1 font-semibold">Registered Address:</p>
          <p className="mb-1">Vidiyapatai Nagar, Gandhinagar, Ranchi, JHARKHAND 834008</p>
          <p className="mb-1 font-semibold">Operational Address:</p>
          <p className="mb-1">Vidiyapatai Nagar, Gandhinagar, Ranchi, JHARKHAND 834008</p>
          <p className="mb-1 font-semibold">Telephone No:</p>
          <p className="mb-1">8298876814</p>
          <p className="mb-1 font-semibold">E-Mail ID:</p>
          <p className="mb-1">
            <a href="mailto:team@hindustanitongue.com" className="text-custom-orange underline">
              team@hindustanitongue.com
            </a>
          </p>
          <p className="mb-4 font-semibold">Contact No:</p>
          <p className="mb-4">+1 862-319-2019, +918298876814</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
