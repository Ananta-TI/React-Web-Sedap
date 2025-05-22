import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-2">
          Something went wrong.
        </p>
        <p className="text-sm text-gray-600 mb-6 italic">
          {error?.statusText || error?.message || "Unknown Error"}
        </p>
        <a
          href="/"
          className="inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
