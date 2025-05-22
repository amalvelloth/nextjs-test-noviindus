import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4FCFF] flex flex-col">
      <Head>
        <title>NexLearn - Ancient Indian History MCQ</title>
      </Head>

      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="flex relative items-center p-2">
          <div className="flex items-center">
            <Image
            src={logo}
            className="w-40"
            />
          </div>
          <Link href="/logout">
            <button className="absolute right-0 top-0 bottom-0 align-middle bg-blue-500 text-white my-3 mx-5 px-4 py-2 rounded hover:bg-blue-600">
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content with Padding to Avoid Overlap */}
      <main className="flex-1 flex items-center justify-center p-4 pt-20">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 bg-gray-800 text-white p-4 rounded-lg mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold">100</div>
              <div className="text-sm">Total MCQs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100</div>
              <div className="text-sm">Total Marks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">90:00</div>
              <div className="text-sm">Total Time</div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="mb-6">
            <h2 className="text-black text-lg font-semibold mb-2">Instructions:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>You have 100 minutes to complete the test.</li>
              <li>It consists of 100 multiple-choice questions.</li>
              <li>You are allowed 2 retakes if you do not pass on the first try.</li>
              <li>Each incorrect answer will incur a negative mark of ¼.</li>
              <li>Ensure you are in a quiet environment and have a stable internet connection.</li>
              <li>Keep an eye on the timer, and try to answer all questions within the given time.</li>
              <li>Do not use any external resources such as dictionaries, websites, or assistance.</li>
              <li>Complete the test honestly to accurately assess your proficiency level.</li>
              <li>Your results will be displayed immediately after submission, indicating whether you have passed or need to retake the test.</li>
            </ol>
          </div>

          {/* Start Test Button */}
          <div className="text-center">
            <Link href="/test">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900">
                Start Test
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}