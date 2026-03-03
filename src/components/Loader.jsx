export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      {/* Spinning Circle */}
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      
      {/* Loading Text */}
      <p className="text-gray-500 font-medium animate-pulse">
        Loading data, please wait...
      </p>
    </div>
  );
}