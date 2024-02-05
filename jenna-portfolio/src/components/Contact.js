import React from "react";
import userData from "@/constants/data";

export default function Contact() {
    return (
        <section>
            <div className="max-x-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
                <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Contact
                </h1>
            </div>
            <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:ml-4">
                        <header className="">
                            <h1 className="text-gray-50 font-semibold text-2xl">
                                Contact me, let's chat!
                            </h1>
                            <p className="font-light text-base text-gray-200 mt-2">
                                Fill in the details and I'll get back to you as soon as I can!
                            </p>
                        </header>
                    </div>
                </div>
            </div>
        </section>
    )
}