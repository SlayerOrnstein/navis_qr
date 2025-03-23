export default function TopBar() {
  const image = 50;

  return (
    <div class="topbar pt-4 px-8 flex flex-row justify-between">
      <div class="flex items-center justify-start">
        <img
          src="logo.svg"
          alt="Cephalon Navis"
          width={image}
          height={image}
        />
        <span class="text-white text-xl">Cephalon Navis</span>
      </div>
      <a href="https://github.com/WFCD/navis" class="flex px-4">
        <img
          width={image - 20}
          height={image - 20}
          src="https://cdn.simpleicons.org/github/white"
        />
      </a>
    </div>
  );
}
