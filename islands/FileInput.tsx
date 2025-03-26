import { JSX } from "preact/jsx-runtime/src/index.d.ts";
import { processInput } from "../utilities/getAccountId.ts";

export default function FileInput(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <div class="flex flex-col">
      <input
        {...props}
        type="file"
        name="input-file"
        id="input-file"
        accept=".log"
        onInput={processInput}
        class="file-input-ghost file:bg-color-primary-container file:text-color-on-primary-container file:hover:cursor-pointer file:rounded-btn border border-color-primary-container rounded-xl file:p-2"
      />
      <i class="pt-4 text-md">
        EE.log can be found in %LOCALAPPDATA%\Warframe
      </i>
    </div>
  );
}
