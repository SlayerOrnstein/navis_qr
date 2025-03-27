import { qrcode } from "@libs/qrcode";
import { signal } from "@preact/signals";
import { encodeBase64 } from "jsr:@std/encoding/base64";

export const codeSignal = signal<QrCode | undefined>(undefined);

export const isValidId = (id: string) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

export const processInput = async (event: Event) => {
  event.preventDefault();
  if (event.target) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    const text = (event.target as HTMLInputElement).value;

    if (!file || !text) return;

    if (file) {
      const regex = /AccountId: ([0-9a-fA-F]{24}$)/m;

      const logs = await file.text();
      const matches = regex.exec(logs);
      console.log(matches);
      if (!matches) return;

      codeSignal.value = getAccountIdQr(matches[1]);
      return;
    }

    if (isValidId(text)) {
      codeSignal.value = getAccountIdQr(text);
    }
  }
};

export interface QrCode {
  id: string;
  code: string;
}

export function getAccountIdQr(
  id: string,
): QrCode {
  const base64Encoded = encodeBase64(
    qrcode(id, { output: "svg" }),
  );

  return {
    id,
    code: `data:image/svg+xml;base64,${base64Encoded}`,
  };
}
