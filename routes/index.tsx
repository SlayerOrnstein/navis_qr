import TopBar from "../components/TopBar.tsx";
import DropZone from "../islands/DropZone.tsx";

export default function Home() {
  return (
    <div>
      <TopBar></TopBar>
      <div class="flex flex-col justify-center items-center h-screen">
        <div class="flex flex-col items-center">
          <DropZone></DropZone>
        </div>
      </div>
    </div>
  );
}
