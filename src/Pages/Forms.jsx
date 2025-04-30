import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
const Forms = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert('Name is required');
            return;
        }

        if (!email) {
            alert('Email is required');
            return;
        }

        if (!message) {
            alert('Message is required');
            return;
        }


        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="background-two">
            <div className="pt-4 px-4 background">
                <div>
                    <h2 className="col-span-full text-yellow-400 text-lg lg:text-4xl sm:2xl sm:mt-10
                     lg:mt-20 text-center font-serif">CONTACTS</h2>
                    <div className="border border-yellow-400 w-32 mx-auto mt-4 mb-5"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 sm:p-4 md:p-10 lg:p-20">
                    <div className="sm:mt-2 lg:mt-8" data-aos="slide-right">
                        <form onSubmit={handleSubmit} method="post">
                            <input
                                className="mb-8 p-4 w-10/12 border-2 border-zinc-700 rounded-lg"
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /><br />
                            <input
                                className="mb-8 p-4 w-10/12 border-2 border-zinc-700 rounded-lg"
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /><br />
                            <textarea
                                className="mb-4 p-10 w-10/12 border-2 border-zinc-700 rounded-lg"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            /><br />
                            <button className="p-2 sm:p-4 bg-yellow-400 rounded-full w-32 sm:w-44 font-serif">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="overflow-hidden">
                    <div className="" data-aos="slide-left">
                        <h3 className="text-yellow-400 text-lg lg:text-4xl sm:text-2xl font-serif mb-5 mt-4">Contact Info</h3>
                        <div className="flex space-x-4">
                        <div className="p-4 sm:p-4 border rounded-full w-17 h-17 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-yellow-400">
                            <FaEnvelope className="text-white text-base sm:text-2xl"/>
                        </div>
                        <div>
                            <h4 className="text-yellow-400 text-lg lg:text-2xl font-serif">Email</h4>
                            <p className="text-white font-serif">amarachukwuobiegue@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 mt-8">
                        <div className="p-2 sm:p-4 border rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-yellow-400">
                            <FaPhone className="text-white text-base sm:text-2xl"/>
                        </div>
                        <div>
                            <h4 className="text-yellow-400 text-lg lg:text-2xl font-serif">Phone</h4>
                            <p className="text-white font-serif sm:text-lg">+2347068622181</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-8">
                        <div className="p-4 sm:p-4 border rounded-full w-[50px] h-[50px] sm:w-16 sm:h-16 flex items-center justify-center hover:bg-yellow-400">
                            <FaLocationDot className="text-white text-base sm:text-2xl"/>
                        </div>
                        <div>
                            <h4 className="text-yellow-400 text-lg lg:text-2xl font-serif">Address</h4>
                            <p className="text-white font-serif">opposite Madonna Primary School Phase 3, Gwagwalada, Abuja.</p>
                        </div>
                    </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;
