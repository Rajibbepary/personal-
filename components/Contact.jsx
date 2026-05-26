"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { toast } from "sonner";

import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  phone: z
    .string()
    .regex(
      /^(?:\+8801|01)[3-9]\d{8}$/,
      "Invalid phone number"
    ),

  email: z
    .string()
    .email("Invalid email address"),

  message: z
    .string()
    .min(
      30,
      "Message must be at least 30 characters"
    ),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    toast.success(
      "Your message has been sent successfully 🚀"
    );

    reset();
  };

  return (
    <section
      className="pt-24 pb-12 px-6 relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -z-10" />

      <div id="contact" className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em]">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-4">
            Ready to{" "}
            <span className="text-orange-500">
              Collaborate?
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-5">
          {/* Left Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email */}
            <div className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Mail
                    className="text-orange-500"
                    size={24}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                    Email Me
                  </p>

                  <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base break-all">
                    rajib635356@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <FaWhatsapp
                    className="text-green-500"
                    size={24}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                    WhatsApp
                  </p>

                  <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base">
                    +8801759366647
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group p-5 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <MapPin
                    className="text-blue-500"
                    size={24}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                    Location
                  </p>

                  <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden">
            {/* Background Icon */}
            <div className="absolute -top-6 -right-4 p-8 opacity-5 dark:opacity-10">
              <MessageSquare
                className="text-slate-900 dark:text-white"
                size={40}
              />
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-400 text-sm mb-2 block"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:text-white transition-all duration-200"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-gray-400 text-sm mb-2 block"
                >
                  Phone Number
                </label>

                <input
                  type="text"
                  id="phone"
                  placeholder="01XXXXXXXXX"
                  {...register("phone")}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:text-white transition-all duration-200"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="text-gray-400 text-sm mb-2 block"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  {...register("email")}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:text-white transition-all duration-200"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-gray-400 text-sm mb-2 block"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={2}
                  placeholder="Tell me about your project..."
                  {...register("message")}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:text-white transition-all duration-200 resize-none"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="md:col-span-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest rounded-lg px-6 py-2 flex items-center justify-center gap-3 transition-all duration-300"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;