import React from "react";

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-start ml-6 mb-2">Privacy Policy</h1>
      <p className="text-gray-600 text-start ml-6 mb-4">Last updated on May 3rd 2023</p>

      <div className="bg-white p-6">
        <p className="mb-8">
          This privacy policy sets out how Hindustani Tongue uses and protects any information that you give Hindustani
          Tongue when you use this website.
        </p>

        <p className="mb-8">
          Hindustani Tongue is committed to ensuring that your privacy is protected. Should we ask you to provide
          certain information by which you can be identified when using this website, and then you can be assured that
          it will only be used in accordance with this privacy statement.
        </p>

        <p className="mb-8">
          Hindustani Tongue may change this policy from time to time by updating this page. You should check this page
          from time to time to ensure that you are happy with any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Information We May Collect:</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Name, email address, phone number, and other details necessary for our services.</li>
          <li>
            Information from your computer or mobile device, such as IP address, browser type, and operating system.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Information Use:</h2>
        <p className="mb-8">
          We use the information we collect to provide our services, respond to inquiries, improve our services, and
          communicate with you about our courses and other relevant information.
        </p>

        <p className="mb-8">
          We may use your personal information for marketing purposes. You may opt-out of these communications at any
          time by clicking on the “unsubscribe” link at the bottom of our emails or by contacting us directly.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Information Sharing:</h2>
        <p className="mb-8">
          Hindustani Tongue does not sell or rent your personal information to third parties. We may share your personal
          information with trusted service providers who assist us in providing our services.
        </p>

        <p className="mb-8">
          We may also disclose your personal information if required by law, or to protect our rights, property, or
          safety.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Data Security:</h2>
        <p className="mb-8">
          We take reasonable measures to protect the security of your personal information. However, no method of
          transmission over the internet or electronic storage is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mb-3">How We Use Cookies:</h2>
        <p className="mb-8">
          A cookie is a small file which asks permission to be placed on your computer’s hard drive. We use traffic log
          cookies to identify which pages are being used and to improve our website. You can choose to accept or decline
          cookies.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Controlling Your Personal Information:</h2>
        <p className="mb-8">
          You may choose to restrict the collection or use of your personal information by contacting us at
          team@hindustanitongue.com. We will not sell, distribute, or lease your personal information to third parties
          unless required by law.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Children’s Privacy Policy:</h2>
        <p className="mb-8">
          Our services are not intended for children under the age of 18. We do not knowingly collect personal
          information from children under the age of 18.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Changes to Privacy Policy:</h2>
        <p className="mb-8">
          Hindustani Tongue may update this Privacy Policy from time to time. We encourage you to review this Privacy
          Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Contact Us:</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or our practices regarding your personal
          information, please contact us at{" "}
          <a href="mailto:team@hindustanitongue.com" className="text-blue-500 hover:underline">
            team@hindustanitongue.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Page;
