import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope, FaTelegramPlane } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Contact = () => {
    return (
        <div id="contact" className="container mx-auto pb-[100px] ">
            <h1 className="title mb-[60px] ">Contact us</h1>

            <div className="grid grid-cols-2 shadow-xl border rounded-lg gap-14 pt-[30px] pb-[100px] px-[50px] ">
                <div className="text-[--second] flex gap-7 flex-col w-full ">
                    <p className="text-[28px] font-semibold text-[--second] ">
                        Leave us a message
                    </p>
                    <input
                        className="border border-black text-[28px] font-medium p-4 rounded-md"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="border border-black text-[28px] font-medium p-4 rounded-md"
                        type="text"
                        placeholder="Your Email"
                    />
                    <textarea
                        className="border border-black text-[28px] font-medium p-4 rounded-md"
                        type="text"
                        placeholder="Briefly describe your project"
                    />
                    <div>
                        {" "}
                        <button className=" bg-[--primary] text-white font-semibold text-[24px] py-2 rounded-md px-[100px] ">
                            Send
                        </button>
                    </div>
                </div>
                <div>
                    <ul className="text-[22px] flex flex-col gap-[30px] ">
                        <li className="flex gap-2 items-center ">
                            <CiLocationOn className=" text-[--primary] text-[32px] " />{" "}
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto, asperiores.{" "}
                        </li>
                        <li className="flex gap-2 items-center ">
                            <IoCall className=" text-[--primary] text-[32px] " />{" "}
                            +998 91 110 76 97{" "}
                        </li>
                        <li className="flex gap-2 items-center ">
                            {" "}
                            <FaRegEnvelope className=" text-[--primary] text-[32px] " />{" "}
                            rahimjonabduraximov@gmail.com{" "}
                        </li>
                        <li className="flex gap-2 items-center ">
                            {" "}
                            <FaTelegramPlane className=" text-[--primary] text-[32px] " />{" "}
                            t.me/azizbekbakhodirov
                        </li>
                    </ul>

                    <div className=" my-[20px] " >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.156126385707!2d69.33484177599911!3d41.34896009837791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dbb8e1f0391%3A0xd04770323fe890a5!2sUdevs!5e0!3m2!1suz!2s!4v1717929493006!5m2!1suz!2s"
                            width="600"
                            height="200"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <p className="font-bold text-center">Coworking;
                    Uzbekistan, Tashkent, Qorgon 5th Drive, 32</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
