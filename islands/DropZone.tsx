import { codeSignal, processInput } from "../utilities/getAccountId.ts";

export default function DropZone() {
  const handleDragOver = (event: Event) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div class="px-8">
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        class={`flex justify-center items-center size-80 ${
          codeSignal.value ? "" : "border-2 border-dashed hover:cursor-pointer"
        } rounded-xl border-color-secondary `}
      >
        {codeSignal.value
          ? <img src={codeSignal.value.code} class="rounded-xl" />
          : (
            <div>
              <label for="file-input" class="hover:cursor-pointer">
                Drag EE.log
              </label>
              <input
                id="file-input"
                type="file"
                class="sr-only"
                accept=".log"
                onInput={processInput}
              />
            </div>
          )}
      </div>
    </div>
  );
}
