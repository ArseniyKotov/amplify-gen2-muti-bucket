import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "testing",
  isDefault: true
});

export const storageTwo = defineStorage({
  name: "testingsecond"
});