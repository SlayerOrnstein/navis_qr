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

    let accountId: string | undefined;
    if (file) {
      const regex = /AccountId: (\S+)/g;

      const logs = await file.text();
      const matches = regex.exec(logs);
      if (!matches) return;

      accountId = matches[1];
    }

    if (isValidId(text)) accountId = text;

    if (!accountId || !isValidId(accountId)) return;

    codeSignal.value = getAccountIdQr(accountId);
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
