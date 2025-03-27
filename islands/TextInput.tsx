import { useState } from "preact/hooks";
import { codeSignal, getAccountIdQr } from "../utilities/getAccountId.ts";

export default function TextInput() {
  const [query, setQuery] = useState("");
  const [_, setSubmitted] = useState(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (query.trim()) {
      codeSignal.value = getAccountIdQr(query.trim());
      setSubmitted(true);
    }
  };

  const isValid = () => {
    if (query == "") return true;
    return /^[0-9a-fA-F]{24}$/.test(query);
  };

  return (
    <div class="flex flex-col items-end">
      <form
        class="flex flex-col items-end w-full space-y-2"
        onSubmit={handleSubmit}
      >
        <label class="text-color-secondary">
          Recommended for Console players
        </label>
        <div class="relative w-full">
          <input
            type="text"
            name="accountId"
            id="text-input"
            placeholder="Enter Warframe Account ID"
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setQuery(target.value);
              setSubmitted(false);
            }}
            pattern="^[0-9a-fA-F]{24}$"
            minLength={24}
            maxLength={24}
            class="input-ghost w-full p-2 rounded-xl focus:outline focus:outline-color-primary bg-color-secondary-container"
          />
          <button
            type="submit"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-[-1/2] rounded-xl outline outline-color-primary-container text-white px-4 py-[5px] bg-color-primary-container"
          >
            Submit
          </button>
        </div>
        {isValid()
          ? ""
          : <span class="text-color-error">Not a valid account ID</span>}
      </form>
    </div>
  );
}
