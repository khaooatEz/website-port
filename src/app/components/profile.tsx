import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 rounded-md p-5 text-white border-1 border-gray-700 ">
      <div className="overflow-hidden rounded-md w-[200px] h-[200px]">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      <h1 className="mt-5 text-2xl">Kilakorn Ongkhachuen</h1>
      <p className="px-4 py-1 bg-gray-600 rounded-2xl mt-3">
        Software Developer
      </p>
      <hr className="border-t-1 border-gray-400 w-full mt-4" />
      <div className="mt-2 flex flex-row self-start gap-3 items-center">
        <div className="px-4 pt-2 pb-1 bg-gray-600 rounded-2xl">
          <span className="icon-[ic--outline-email] text-2xl"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Email</p>
          <p>kilakornongkhachuen@gmail.com</p>
        </div>
      </div>
      <div className="mt-2 flex flex-row self-start gap-3 items-center">
        <div className="px-4 pt-2 pb-1 bg-gray-600 rounded-2xl">
          <span className="icon-[ic--round-phone] text-2xl"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Phone</p>
          <p>0973302404</p>
        </div>
      </div>
      <div className="mt-2 flex flex-row self-start gap-3 items-center">
        <div className="px-4 pt-2 pb-1 bg-gray-600 rounded-2xl">
          <span className="icon-[fluent--location-16-filled] text-2xl"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Location</p>
          <p>Thailand, Bankok</p>
        </div>
      </div>
      <div className="mt-10 flex flex-row gap-4 items-center">
         <a
          href="https://www.linkedin.com/in/kilakorn-ongkhachuen-b8b1a6348/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
          className="text-2xl hover:text-blue-500 transition-colors duration-300"
        >
        <span className="icon-[mingcute--linkedin-fill] text-3xl"></span>
        </a>

        <a
          href="https://github.com/khaooatEz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
          className="text-2xl hover:text-blue-500 transition-colors duration-300"
        >
          <span className="icon-[bi--github]"></span>
        </a>
      </div>
    </div>
  );
}
