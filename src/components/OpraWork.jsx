export default function OpraWork() {
  return (
    <section className="flex flex-col items-center gap-10 p-32 bg-gradient-to-b from-gray-100 to-gray-300">
      <h2 className="text-32 font-semibold leading-none">How Opra Works</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full mt-8">
        <li className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-22 text-center font-semibold">
            <span className="block">1</span>
            <span>Sign Up</span>
          </h3>
          <p className="text-center text-16 text-gray-600">
            Create an account with your email and password
          </p>
        </li>

        <li className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-22 text-center font-semibold">
            <span className="block">2</span>
            <span>Analyze</span>
          </h3>
          <p className="text-center text-16 text-gray-600">
            Enter your post content or fetch it from your social media accounts
          </p>
        </li>

        <li className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-22 text-center font-semibold">
            <span className="block">3</span>
            <span>Optimize</span>
          </h3>
          <p className="text-center text-16 text-gray-600">
            Get detailed analysis and suggestions for improvement
          </p>
        </li>

        <li className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-22 text-center font-semibold">
            <span className="block">4</span>
            <span>Save</span>
          </h3>
          <p className="text-center text-16 text-gray-600">
            Store your analyzed content for future reference
          </p>
        </li>
      </ul>
    </section>
  );
}
