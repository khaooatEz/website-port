import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-5">
        <div className="px-4 pt-2 pb-1 bg-gray-600 rounded-2xl">
          <span className="icon-[material-symbols--work-outline]"></span>
        </div>

        <h1 className="text-xl font-bold">Projects</h1>
      </div>
      <div className="mt-4">
        <h1>Full-Stack Developer</h1>
        <p className="text-gray-400 mb-2">
          Kasetsart University Sriracha Campus | FDrive - Mobile App
        </p>
        <div className="flex items-center justify-center my-3">
          <Image
            src="/p6.png"
            alt="Restaurant management system"
            width={600}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center my-3">
          <Image
            src="/p5.png"
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
          - Developed cloud functions and APIs to send real-time notifications
          via Firebase Cloud Messaging (FCM).
        </p>
        <p className="text-gray-400">
          - Integrated Google Maps and routing APIs from Google Cloud Platform
          to enable location-based route planning and tracking.
        </p>

        <div className="h-6" />
        <div className="flex flex-row items-center gap-2">
          <span className="icon-[fluent--window-dev-tools-24-filled] text-4xl"></span>
          <h1>Tech Stack</h1>
        </div>
        <p className="text-gray-400">Framework : Flutter</p>
        <p className="text-gray-400">Programming Languages : Dart, node.js(express)</p>
        <p className="text-gray-400">Cloud Database : Firebase</p>
        <p className="text-gray-400">Design UI : Figma</p>
        <p className="text-gray-400">Design System, Database : drawn.io</p>
        <p className="text-gray-400">Other : Postman, ngrok</p>
        <hr className="border-t-1 border-gray-400 w-full mt-4 mb-3" />
        <h1>Full-Stack Developer</h1>
        <p className="text-gray-400 mb-2">
          Kasetsart University Sriracha Campus | Restaurant management system -
          Mobile App
        </p>
        <div className="flex items-center justify-center my-3">
          <Image
            src="/p1.png"
            alt="Restaurant management system"
            width={600}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center my-3">
          <Image
            src="/p2.png"
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
          - Analyzed project requirements and clarified goals with stakeholders.
        </p>
        <p className="text-gray-400">
          - Planned the overall system workflow and user journey to ensure
          intuitive navigation.
        </p>
        <p className="text-gray-400">
          - Designed the user interface (UI) focusing on usability and visual
          consistency.
        </p>
        <p className="text-gray-400">
          - Defined system architecture including data flow, component
          structure, and interaction between modules.
        </p>
        <p className="text-gray-400">
          - Proposed key system functionalities based on real-world use cases
          and user needs.
        </p>
        <p className="text-gray-400">
          - Designed and normalized the database schema using best practices for
          scalability and performance.
        </p>
        <div className="h-6" />
        <div className="flex flex-row items-center gap-2">
          <span className="icon-[fluent--window-dev-tools-24-filled] text-4xl"></span>
          <h1>Tech Stack</h1>
        </div>
        <p className="text-gray-400">Framework : Flutter</p>
        <p className="text-gray-400">Programming Languages : Dart</p>
        <p className="text-gray-400">Cloud Database : Firebase</p>
        <p className="text-gray-400">Design UI : Figma</p>
        <p className="text-gray-400">Design System, Database : drawn.io</p>
        <hr className="border-t-1 border-gray-400 w-full mt-4 mb-3" />
        <h1>Full-Stack Developer</h1>
        <p className="text-gray-400 mb-2">
          Kasetsart University Sriracha Campus | Leave management system -
          Windows App
        </p>
        <div className="flex flex-row items-center gap-2">
          <span className="icon-[healthicons--city-worker] text-4xl"></span>
          <h1>Work duties</h1>
        </div>
        <p className="text-gray-400">
          - Received and analyzed project requirements from the supervising
          professor to define system goals and scope.
        </p>
        <p className="text-gray-400">
          - Proposed key system functionalities based on real-world use cases
          and user needs.
        </p>
        <p className="text-gray-400">
          - Designed the overall system architecture and planned the workflow to
          ensure smooth operation.
        </p>
        <p className="text-gray-400">
          - Structured a normalized database schema using Microsoft SQL Server
          to maintain data integrity and scalability.
        </p>
        <p className="text-gray-400">
          - Designed and implemented the user interface (UI) for a Windows
          application with a focus on usability.
        </p>
        <p className="text-gray-400">
          - Utilized Windows Forms and Entity Framework to manage UI rendering
          and database operations.
        </p>
        <p className="text-gray-400">
          - Developed the entire system using C#, including logic, data access,
          and interface integration.
        </p>
        <div className="h-6" />
        <div className="flex flex-row items-center gap-2">
          <span className="icon-[fluent--window-dev-tools-24-filled] text-4xl"></span>
          <h1>Tech Stack</h1>
        </div>
        <p className="text-gray-400">Programming Languages : C#, SQL</p>
        <p className="text-gray-400">Database : Microsoft SQL</p>
        <p className="text-gray-400">Design UI : Figma</p>
        <p className="text-gray-400">Design System, Database : drawn.io</p>
        <hr className="border-t-1 border-gray-400 w-full mt-4 mb-3" />
        <h1>UI Design, System Design</h1>
        <p className="text-gray-400 mb-2">
          Kasetsart University Sriracha Campus | WASH - Mobile App
        </p>
        <div className="flex items-center justify-center my-3">
          <Image
            src="/p3.png"
            alt="Restaurant management system"
            width={600}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center my-3">
          <Image
            src="/p4.png"
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
          - Created the overall system design, including architecture planning
          and workflow optimization to ensure efficient operation.
        </p>
        <div className="h-6" />
        <div className="flex flex-row items-center gap-2">
          <span className="icon-[fluent--window-dev-tools-24-filled] text-4xl"></span>
          <h1>Tech Stack</h1>
        </div>
        <p className="text-gray-400">Design UI : Figma</p>
        <p className="text-gray-400">Design System : drawn.io</p>
      </div>
    </div>
  );
}
