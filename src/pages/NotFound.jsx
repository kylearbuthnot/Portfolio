export const NotFound = () => {
  return <div>You Shouldn't Be Here!</div>;
};

export function NotFound2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>
      <p className="text-gray-600 mt-4">
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}
