import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AcceptableUsePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Acceptable Use Policy | DYNA Robotics</title>
        <meta name="description" content="DYNA Robotics Acceptable Use Policy for Services, Equipment, and Software." />
      </Helmet>
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="text-white py-16 px-4 sm:px-6 md:px-8 lg:px-16 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-center mb-12" style={{ fontSize: "30px", fontWeight: "bold" }}>
            DYNA ROBOTICS<br />ACCEPTABLE USE POLICY
          </h1>

          {/* Content */}
          <div className="space-y-6" style={{ fontSize: "18px", lineHeight: "1.7" }}>
            <p>
              This Acceptable Use Policy applies to Customer's use of the Services (including, without limitation, Customer's use of the Equipment and access to the Software Service) and forms an integral part of the Agreement (as defined in the Robotics as a Service Agreement). Dyna may from time to time make reasonable modifications to this Acceptable Use Policy, and such modifications are effective immediately upon publication.
            </p>

            <p>
              We have created this Acceptable Use Policy to ensure the safety, reliability, and performance of the Services and to protect Dyna's proprietary intellectual property. For this to happen, Customers must not misuse or abuse the Services. Unacceptable uses and activities include, without limitation, any use of the Services which, in Dyna's reasonable judgment, involves any of the following:
            </p>

            <ol className="list-decimal list-outside ml-6 space-y-4">
              <li>Using the Services for any illegal purpose or in violation of any applicable law or regulation;</li>
              
              <li>Selling, licensing, sublicensing, renting, leasing, encumbering, lending, distributing, transferring, or otherwise providing access to the Services in any form to any third party, or otherwise promoting or advertising products or services without appropriate authorization;</li>
              
              <li>Disassembling, decompiling, porting, reverse compiling, reverse engineering, translating, or otherwise attempting to separate any components of the Services or reconstruct the Services or any portion thereof, or attempting to derive or obtain any source code, structure, algorithms, processes, techniques, technology, know-how, or ideas embodied by, underlying, or contained in the Services, including tampering with, hacking, or circumventing any security or authentication measures, or attempting to gain unauthorized access to the Services or any related systems, networks, or data;</li>
              
              <li>Developing or building products or services that perform substantially similar to the Services, or altering, modifying, or creating derivative works of the Services or any components thereof in any way, including without limitation customization, translation, or localization;</li>
              
              <li>Attempting to access or search the Services by any means other than Dyna-supported interfaces, or copying, distributing, or disclosing any part of the Services in any medium, including by automated or non-automated scraping, mirroring, or framing, or creating internet links to the Services that include log-in information, usernames, passwords, or secure cookies;</li>
              
              <li>Modifying, disabling, or interfering with the Services, or using the Services in any manner that disrupts or degrades the integrity or performance of the Services or related systems, networks, or data, including by overwhelming or attempting to overwhelm the Services infrastructure by imposing an unreasonably large load that consumes extraordinary resources, such as (i) using robots, spiders, offline readers, or other automated systems to send more request messages than a human could reasonably send in the same period using a normal browser, or (ii) operating far beyond reasonably expected use parameters for any given Service;</li>
              
              <li>Probing, scanning, or testing the vulnerability of any system or network used in connection with the Services;</li>
              
              <li>Using the Services to generate or send unsolicited communications, advertising, or spam, or otherwise causing Dyna to become impaired in its ability to send communications on its own behalf or on behalf of its customers, including by causing Dyna to be registered on any email DNS block list or denied service by a third-party communications provider;</li>
              
              <li>Using the Services to violate the privacy of others, or to collect or gather personal information (including account information) from the Services, including distributing or disseminating cookies, pixels, or tags collected during use of the Services to any third party without proper permission and legal basis;</li>
              
              <li>Misrepresenting identity or disguising the origin of any data, content, or other information submitted through the Services, including spoofing, phishing, manipulating headers or identifiers, impersonating others, falsely implying sponsorship or association with Dyna or any third party, or accessing the Services through another user's account without permission;</li>
              
              <li>Submitting, posting, uploading, sharing, distributing, or otherwise providing any data, content, or other information that (i) infringes Dyna's or a third party's intellectual property, privacy, or other rights, or that Customer does not have the right to submit (including confidential or personal information not authorized for disclosure); (ii) is deceptive, fraudulent, illegal, obscene, defamatory, libelous, threatening, harmful to minors, pornographic, indecent, harassing, hateful, or otherwise inappropriate in Dyna's discretion; (iii) contains viruses, bots, worms, scripts, adware, spyware, or other malicious code; or (iv) could otherwise cause damage to Dyna or any third party;</li>
              
              <li>Using meta tags or any other hidden text, including Dyna's or its affiliates' service names or trademarks.</li>
            </ol>

            <p>
              Customer agrees that it will not attempt or engage in any such misuse or abuse of the Services, and will not permit, facilitate, assist, or encourage any third party to do so.
            </p>

            <p className="font-bold uppercase">
              FURTHER, CUSTOMER SHALL, AND SHALL ENSURE ITS PERSONNEL, AT ALL TIMES COMPLY WITH ALL USAGE AND SAFETY GUIDELINES PROVIDED BY OR ON BEHALF OF DYNA, WHETHER VIA TRAINING, DYNA'S WEBSITE, DOCUMENTATION PROVIDED WITH THE EQUIPMENT, OR OTHERWISE. FAILURE TO FULLY COMPLY WITH ALL USAGE GUIDELINES MAY VOID APPLICABLE WARRANTIES. FAILURE TO FULLY COMPLY WITH ALL SAFETY GUIDELINES MAY RESULT IN SERIOUS INJURY OR DEATH.
            </p>

            <p>
              Without limiting any other remedies available to Dyna, Dyna may suspend or terminate Customer's account or access to the Services, without notice or liability, if Dyna determines in its sole discretion that any user has violated this Acceptable Use Policy.
            </p>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AcceptableUsePolicy;
