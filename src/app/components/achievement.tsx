import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h1>National Software Contest Thailand - Region level</h1>
      <p className="text-gray-300">FDrive - Mobile APP</p>
      <div className="flex items-center justify-center my-3">
        <Image
          src="/a2.jpeg"
          alt="Restaurant management system"
          width={600}
          height={200}
          className="object-cover"
        />
      </div>
      <p>
        Received the Nation Software Contest 2024 (NSC2024) award in the Eastern
        region and received funding support. It is a final project of the
        university.
      </p>
      <p className="text-gray-400">
        Mobile application to allow people who travel on the same route to
        travel together to save travel expenses for both parties.
      </p>
      <div className="flex flex-row items-center gap-2">
        <span className="icon-[healthicons--city-worker] text-4xl"></span>
        <h1>Work duties</h1>
      </div>

      <p className="text-gray-400">
        - Designed and developed a travel companion mobile application using
        Flutter, focusing on clean UI and intuitive user experience.
      </p>
      <p className="text-gray-400">
        - Planned and implemented the overall system architecture, including
        feature workflow and component structure.
      </p>
      <p className="text-gray-400">
        - Designed the database structure and implemented it using Firebase
        Firestore for real-time data handling.
      </p>
      <p className="text-gray-400">
        - Developed cloud functions and APIs to send real-time notifications via
        Firebase Cloud Messaging (FCM).
      </p>
      <p className="text-gray-400">
        - Integrated Google Maps and routing APIs from Google Cloud Platform to
        enable location-based route planning and tracking.
      </p>
      <hr className="border-t-1 border-gray-400 w-full mt-4 mb-3" />
      <h1>
        Young Socialpreneur Hackathon KU @ Sriracha 2023 - TOP 10 Finalist
      </h1>
      <p className="text-gray-300">WASH - Mobile APP</p>
      <div className="flex items-center justify-center my-3">
        <Image
          src="/a1.jpeg"
          alt="Restaurant management system"
          width={600}
          height={200}
          className="object-cover"
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className="icon-[healthicons--city-worker] text-4xl"></span>
        <h1>Work duties</h1>
      </div>

      <p className="text-gray-400">
        - Designed and developed a laundry delivery application using Flutter,
        focusing on user-friendly interface and smooth user experience.
      </p>
      <p className="text-gray-400">
        - Created the overall system design, including architecture planning and
        workflow optimization to ensure efficient operation.
      </p>
    </div>
  );
}
