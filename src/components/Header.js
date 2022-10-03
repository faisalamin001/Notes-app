import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ handleToggleDarkMode, darkMode }) => {
  const icon = darkMode ? <FaSun /> : <FaMoon />;

  return (
    <div className='container mx-auto flex items-center justify-between'>
      <h1 className='text-5xl font-bold text-gray-900 py-6'>Notes App</h1>
      <button
        className='toggle my-6 p-2 text-xl rounded-full bg-gray-600 hover:bg-gray-900 transition duration-500 text-gray-50'
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        {icon}
      </button>
    </div>
  );
};

export default Header;
