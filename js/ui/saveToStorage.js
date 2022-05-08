import { listKey } from "../secondScript.js";

export function saveToStorage(valueToSave) {
  localStorage.setItem(listKey, JSON.stringify(valueToSave));
}
