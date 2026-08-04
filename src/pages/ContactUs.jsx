import React, { useState } from "react";
import {
  Mail,
  Phone,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const faqs = [
  {
    q: "What is MediPlan?",
    a: "MediPlan is an AI-powered hospital floor planning platform that uses CNN, Graphormer, and GAN models to generate optimized healthcare layouts.",
  },
  {
    q: "Who can use MediPlan?",
    a: "Architects, healthcare planners, civil engineers, hospital administrators, and researchers can use MediPlan.",
  },
  {
    q: "How does the AI pipeline work?",
    a: "The system processes requirements through CNN prediction, Graphormer connectivity analysis, and GAN-based floor plan generation.",
  },
  {
    q: "Can generated layouts be exported?",
    a: "Yes, layouts can be exported in PDF and PNG formats.",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [flipped, setFlipped] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.organization ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully");

    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-[#f5f7fa] px-6 py-8">

      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
        style={{ backgroundImage: "url('/Bgd.png')" }}
      ></div>

      <div className="absolute inset-0 bg-[#10284E]/90"></div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-4">

        <h1 className="text-4xl font-bold text-center text-[#d9ffff]">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border border-[#6B7D7F]/30 rounded-2xl p-5 backdrop-blur-xl bg-[#10284E]/40 flex flex-col gap-2">

            <h2 className="text-xl font-semibold text-center text-[#7ee7e7]">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 text-sm"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded-lg border border-[#6B7D7F]/30 bg-transparent text-[#d9ffff] placeholder:text-[#9fb8c2] focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="p-2 rounded-lg border border-[#6B7D7F]/30 bg-transparent text-[#d9ffff] placeholder:text-[#9fb8c2] focus:outline-none"
                required
              />

              <input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
                className="p-2 rounded-lg border border-[#6B7D7F]/30 bg-transparent text-[#d9ffff] placeholder:text-[#9fb8c2] focus:outline-none"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 rounded-lg border border-[#6B7D7F]/30 bg-transparent text-[#d9ffff] h-16 resize-none placeholder:text-[#9fb8c2] focus:outline-none"
                required
              />

              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-linear-to-r from-[#004955] to-[#105E60] hover:from-[#105E60] hover:to-[#14365C] transition text-white"
              >
                Send Message
              </button>

            </form>

          </div>


          <div className="flex flex-col gap-3">

            <div className="border border-[#6B7D7F]/30 rounded-2xl p-5 backdrop-blur-xl bg-[#10284E]/40 text-sm">

              <h2 className="text-xl font-semibold text-center text-[#7ee7e7] mb-2">
                Contact Details
              </h2>

              <div className="grid grid-cols-2 gap-3 text-[#b4c9d1]">

                <div className="flex flex-col gap-2">

                  <p className="flex items-center gap-2">
                    <Phone size={16} />
                    +91 98765 43210
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail size={16} />
                    mediplan@gmail.com
                  </p>

                </div>

                <div className="flex flex-col gap-2">

                  <p className="flex items-center gap-2">
                    <Globe size={16} />
                    www.mediplan.com
                  </p>

                  <div className="flex gap-2 mt-1 text-[#5eead4]">

                    <FaFacebookF
                      size={16}
                      className="cursor-pointer hover:text-white transition"
                    />

                    <FaInstagram
                      size={16}
                      className="cursor-pointer hover:text-white transition"
                    />

                    <FaXTwitter
                      size={16}
                      className="cursor-pointer hover:text-white transition"
                    />

                  </div>

                </div>

              </div>

            </div>


            <div className="border border-[#6B7D7F]/30 rounded-2xl p-5 backdrop-blur-xl bg-[#10284E]/40 flex flex-col gap-2 text-sm">

              <h2 className="text-xl font-semibold text-center text-[#7ee7e7]">
                FAQs
              </h2>

              <div className="grid gap-2">

                {faqs.map((item, index) => (

                  <div
                    key={index}
                    onClick={() =>
                      setFlipped(flipped === index ? null : index)
                    }
                    className="cursor-pointer"
                  >

                    <div
                      className={`relative w-full h-14 transition-transform duration-500 transform-3d ${
                        flipped === index
                          ? "transform-[rotateY(180deg)]"
                          : ""
                      }`}
                    >

                      <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-[#6B7D7F]/30 bg-[#10284E]/70 backface-hidden p-3 text-center font-medium text-[#b4c9d1]">
                        {item.q}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-[#004955]/40 bg-[#105E60]/80 transform-[rotateY(180deg)] backface-hidden p-3 text-center text-xs text-white">
                        {item.a}
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ContactUs;