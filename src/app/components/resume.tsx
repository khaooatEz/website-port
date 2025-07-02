export default function Resumes() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-5">
        <div className="px-4 pt-2 pb-1 bg-gray-600 rounded-2xl">
          <span className="icon-[material-symbols--work-outline]"></span>
        </div>

        <h1 className="text-xl font-bold">Experience</h1>
      </div>
      <div className="flex flex-col">
        <div className="mt-4">
          <h1>Front-end Developer</h1>
          <p className="text-gray-400 mb-2">Internship Bounoi Consulting</p>
          <p className="text-blue-400">May 2024 - Oct 2024</p>
          <p>
            Redesigned the organizations website to enhance user experience and
            visual consistency. Designed the user interface (UI), system
            architecture, and overall workflow. Proposed key system
            functionalities and structured the database schema for efficient
            data handling. Integrated and managed API data to dynamically
            display information on key pages. Built internal web tools for
            organizational use to improve internal workflows.
          </p>


          
          <hr className="border-t-1 border-gray-400 w-full mt-4 mb-3" />
          <div className="flex flex-row items-center gap-5">
            <div className="px-4 pt-2 pb-1 bg-gray-600 rounded-2xl">
              <span className="icon-[qlementine-icons--education-16]"></span>
            </div>

            <h1 className="text-xl font-bold">Education</h1>
          </div>
          <div className="flex flex-col">
            <div className="mt-4">
              <h1>Bachelor’s degree (Information technology)</h1>
              <p className="text-gray-400 mb-2">Kasetsart University Sriracha</p>
              <p className="text-blue-400">2021-2025</p>
              <hr className="border-t-1 border-gray-400 w-full mt-4 mb-3" />
              <h1>Highschool</h1>
              <p className="text-gray-400 mb-2">Wangsomboon Wittayakom School</p>
              <p className="text-blue-400">2018-2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
