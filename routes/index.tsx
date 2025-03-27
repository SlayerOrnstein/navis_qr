import FileInput from "../islands/FileInput.tsx";
import DropZone from "../islands/DropZone.tsx";
import TextInput from "../islands/TextInput.tsx";

export default function Home() {
  return (
    <div class="flex flex-col justify-center items-center h-screen">
      <div>
        <div class="flex items-center">
          <DropZone></DropZone>
          <div class="flex flex-col w-96">
            <FileInput></FileInput>
            <hr class="h-px my-10 border-0 bg-color-secondary" />
            <TextInput></TextInput>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center pt-32 text-xl text-color-on-surface">
        <i>
          An account ID is required to start using the Cephalon Navis' Arsenal
          system, this tool will help the Cephalon pull your arsenal manifest
          from the Ordis' inventory system.
        </i>
        <i>
          To learn more checkout the FAQ
        </i>
      </div>
    </div>
  );
}
