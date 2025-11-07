

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center gap-5 ">
      <img
        src={`${process.env.PUBLIC_URL}/logo.png`}
        alt="Company Logo"
        className="w-75 h-75 mb-4 rounded-2xl "
      />
      <h1 className="text-4xl font-semibold text-gray-800 mb-2">
        Welcome to Clerion Portal
      </h1>
      <p className="text-lg text-gray-600 italic max-w-xl p-3">
        "Clarity. Innovation. Impact"
      </p>
    </div>
  );
}
