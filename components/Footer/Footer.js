import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-light py-4">
      <footer className="max-w-[1440px] mx-auto p-3 sm:px-5">
        <div className="flex flex-wrap gap-3 items-start justify-between">
          <div className="flex-2">
            <div className="min-w-[200px]">
              <h1 className="text-2xl mb-5">JobsMole</h1>
              <p className="sm:w-[95%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quis voluptates fugit deserunt in nulla!</p>
            </div>
          </div>
          <div className="flex-2">
            <div className="min-w-[200px]">
              <h2 className="mb-5 font-bold text-xl">About Us</h2>
              <ul className="flex flex-col gap-y-3 text-primary-dark font-semibold">
                <li>About</li>
                <li>Press</li>
                <li>Partners Relations</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="flex-2">
            <div className="min-w-[200px]">
              <h2 className="mb-5 font-bold text-xl">Career</h2>
              <ul className="flex flex-col gap-y-3 text-primary-dark font-semibold">
                <li>Press</li>
                <li>Help and Support</li>
                <li>Affliate</li>
              </ul>
            </div>
          </div>
          <div className="flex-2">
            <div className="min-w-[200px]">
              <h2 className="mb-5 font-bold text-xl">Legal Infomation</h2>
              <ul className="flex flex-col gap-y-3 text-primary-dark font-semibold">
                <li>Press</li>
                <li>Partners Relations</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
