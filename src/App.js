import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Downloads() {
  return (
    <div className="bg-white rounded-lg shadow-md h-full overflow-auto">
      <div className="flex items-center space-x-2 p-10">
        <img src={logo} alt="Logo" className="h-16 sm:h-16 mr-4" />
        <div className="text-2xl font-bold text-gray-700">Debian Download</div>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="pt-8 text-base leading-6 space-y-7 text-gray-700 sm:text-lg sm:leading-7 px-10">
          <p>
            Welcome to Debian Download, the simpler way to download Debian
            Stable.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.0.0-amd64-netinst.iso"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Minimal
            </a>
            <a
              href="https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-12.0.0-amd64-gnome.iso"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              GNOME Live
            </a>
          </div>
          <div className="pt-5 flex justify-left">
            <p className="text-sm italic">Debian 12.0 bookworm x86_64 iso</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="bg-white rounded-lg shadow-md h-full overflow-auto space-y-6 p-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Why Debian?</h2>
      <p className="text-lg text-gray-600">
        Debian is a free operating system (OS) for your computer. An operating
        system is the set of basic programs and utilities that make your
        computer run. Debian provides more than just an OS: it comes with over
        59000 packages, precompiled software bundled up in a nice format for
        easy installation on your machine.
      </p>

      <h3 className="text-xl font-bold text-gray-700 mb-4">
        Stable and Reliable
      </h3>
      <p className="text-lg text-gray-600">
        Debian provides stable and reliable software which is primarily driven
        by the community rather than a company. This gives Debian a high degree
        of freedom, robustness, and flexibility. Being community-driven ensures
        that the interests of the users always come first.
      </p>

      <h3 className="text-xl font-bold text-gray-700 mb-4">Community Owned</h3>
      <p className="text-lg text-gray-600">
        Debian is not owned by a corporation, unlike other distributions like
        Ubuntu, RedHat, or Fedora. Its development is carried out by the Debian
        Project's community members and users who are united in their cause of
        creating the best possible operating system. This means every user can
        contribute to the system's development in their own way.
      </p>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState("downloads");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-64 bg-white shadow-lg">
        <div className="p-10">
          <button
            onClick={() => setTab("downloads")}
            className={`w-full py-2 text-left font-bold ${
              tab === "downloads" ? "text-indigo-500" : "text-gray-500"
            }`}
          >
            Downloads
          </button>
          <button
            onClick={() => setTab("info")}
            className={`w-full py-2 text-left font-bold ${
              tab === "info" ? "text-indigo-500" : "text-gray-500"
            }`}
          >
            Info
          </button>
        </div>
      </div>
      <div className="flex-grow flex flex-col p-10">
        <div className="w-full h-full bg-white rounded-lg shadow-md overflow-auto">
          {tab === "downloads" && <Downloads />}
          {tab === "info" && <Info />}
        </div>
      </div>
    </div>
  );
}

export default App;
