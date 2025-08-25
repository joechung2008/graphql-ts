import { objectType } from "nexus";

export const ExtensionsEntry = objectType({
  name: "ExtensionsEntry",
  definition(t) {
    t.string("key");
    t.field("value", { type: "Extension" });
  },
});
