import { processInput } from "../utilities/getAccountId.ts";

export default function FileInput() {
  return (
    <div class="flex flex-col ">
      <form class="flex flex-col items-end  space-y-2">
        <label class="text-color-secondary">Recommended for PC players</label>
        <input
          type="file"
          name="input-file"
          id="input-file"
          accept=".log"
          onInput={processInput}
          class="file-input-ghost file:bg-color-primary-container file:text-color-on-primary-container file:hover:cursor-pointer file:rounded-btn border border-color-primary-container rounded-xl file:p-2 w-full"
        />
      </form>
    </div>
  );
}
