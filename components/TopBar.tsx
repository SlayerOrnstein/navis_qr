export default function TopBar() {
  const image = 50;

  return (
    <div class="topbar pt-4 px-8 flex flex-row justify-between">
      <a href="/">
        <div class="flex items-center justify-start">
          <img
            src="logo.svg"
            alt="Cephalon Navis"
            width={image}
            height={image}
          />
          <span class="text-white text-xl">Cephalon Navis</span>
        </div>
      </a>
      <div class="flex flex-row items-center space-x-4">
        <a href="https://github.com/WFCD/navis" class="flex px-4">
          <img
            width={image - 20}
            height={image - 20}
            src="https://cdn.simpleicons.org/github/white"
          />
        </a>
      </div>
    </div>
  );
}
