import { useSignal } from "@preact/signals";
import { encodeBase64 } from "jsr:@std/encoding/base64";
import { qrcode } from "@libs/qrcode";

interface QrCode {
  accountId: string;
  code: string;
}

export default function DropZone() {
  const code = useSignal<QrCode | null>(null);

  const handleDragOver = (event: Event) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  const getAccountId = async (event: Event) => {
    event.preventDefault();
    if (event.target) {
      const file = (event.target as HTMLInputElement).files?.item(0);
      if (!file) return;

      const logs = await file.text();
      const regex = /AccountId: (\S+)/g;
      const accountId = regex.exec(logs);
      if (!accountId) return;

      const base64Encoded = encodeBase64(
        qrcode(accountId[1], { output: "svg" }),
      );

      code.value = {
        accountId: accountId[1],
        code: `data:image/svg+xml;base64,${base64Encoded}`,
      };
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      class="flex flex-col items-center"
    >
      <label class="flex w-96 h-96 cursor-pointer appearance-none items-center justify-center rounded-xl border-2 border-dashed border-gray-200">
        {code.value
          ? <embed src={code.value.code} class="rounded-xl flex w-96 h-96" />
          : (
            <div class="space-y-1 text-center">
              <div class="text-gray-600">
                Click to upload or drag and drop
              </div>
            </div>
          )}
        <input
          id="uploadFile"
          type="file"
          class="sr-only"
          accept=".log"
          onInput={getAccountId}
        />
      </label>
      <div class="text-black dark:text-white text-lg text-center mt-4">
        {code.value
          ? `Your account ID is ${code.value.accountId}`
          : "To find your EE.log head over to %LOCALAPPDATA%\\Warframe"}
      </div>
    </div>
  );
}
