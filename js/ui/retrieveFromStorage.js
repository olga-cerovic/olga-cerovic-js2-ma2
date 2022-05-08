import { listKey } from "../secondScript.js";

export function retrieveFromStorage() {
  const currentList = localStorage.getItem(listKey);
  if (!currentList) {
    return [];
  }
  return JSON.parse(currentList);
}
