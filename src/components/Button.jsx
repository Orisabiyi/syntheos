import PropTypes from "prop-types";

export default function Button({ classProp }) {
  return (
    <button
      className={`${classProp} bg-white rounded-lg font-medium py-2 lg:py-4 px-6 lg:px-12 lg:w-80 text-16 lg:text-20 transition-all duration-500 hover:bg-gray-100`}
    >
      Get Started
    </button>
  );
}

Button.propTypes = {
  classProp: PropTypes.string,
};
