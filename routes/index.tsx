import FileInput from "../islands/FileInput.tsx";
import TopBar from "../components/TopBar.tsx";
import DropZone from "../islands/DropZone.tsx";
import TextInput from "../islands/TextInput.tsx";

export default function Home() {
  return (
    <div>
      <TopBar></TopBar>
      <div class="flex justify-center items-center h-screen">
        <div class="flex items-center">
          <DropZone></DropZone>
          <div class="flex flex-col w-96">
            <FileInput></FileInput>
            <hr class="h-px my-10 border-0 bg-color-secondary" />
            <TextInput></TextInput>
          </div>
        </div>
      </div>
    </div>
  );
}
