import useDarkMode from 'use-dark-mode';
import IconLogoGithub from '~icons/carbon/logo-github';
import IconMoon from '~icons/carbon/moon';
import IconSun from '~icons/carbon/sun';

export default function Footer() {
  const { toggle, value: dark } = useDarkMode(true, {
    classNameDark: 'dark',
    element: document.body,
  });
  return (
    <nav className="text-xl mt-6 gap-2 inline-flex dark:text-gray-200">
      <button
        className="inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 outline-none"
        onClick={toggle}
      >
        {!dark ? <IconSun /> : <IconMoon />}
      </button>
      <a
        className="cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 outline-none"
        rel="noreferrer"
        href="https://github.com/thetnaingtn/react-minesweeper"
        target="_blank"
        title="GitHub"
      >
        <IconLogoGithub />
      </a>
    </nav>
  );
}
