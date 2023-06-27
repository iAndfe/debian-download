import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-16 sm:h-16 mr-4" />
              <div className="text-2xl font-bold text-gray-700">
                Debian Download
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pt-8 text-base leading-6 space-y-7 text-gray-700 sm:text-lg sm:leading-7">
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
                  <p className="text-sm italic">
                    Debian 12.0 bookworm x86_64 iso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
