import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="h-screen py-20 mb-10">
      <div className="container">
        <div className="flex justify-center items-center w-full h-full overflow-hidden gap-5">
          <div className="left w-1/2 h-[650px] rounded-lg overflow-hidden shadow bg-green-400">
            <Image
              src="/Images/contact.jpg"
              width={80}
              height={90}
              alt="contact"
              className="shadow w-full h-full object-cover"
            />
          </div>
          <div className="right w-1/2">
            <form action="/" method="POST">
              <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-bold">CONTACT US</h1>
                <div>
                  <h1 className="text-4xl font-bold">Contact:</h1>
                  <input
                    className="bg-zinc-200 w-full p-2 mt-3 rounded-lg text-black"
                    type="text"
                    placeholder="Contact information"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Query:</h1>
                  <textarea
                    placeholder="Enter your message"
                    className="bg-zinc-200 w-full p-2 mt-3 rounded-lg text-black"
                    name="query"
                    rows={10}
                  >
                  </textarea>
                </div>
                <button
                  type="submit"
                  className="p-2 rounded shadow bg-blue-400 text-white text-bold "
                >
                  {" "}
                  SUBMIT{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
