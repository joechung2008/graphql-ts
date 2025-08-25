import { objectType } from "nexus";

export const StageDefinitionEntry = objectType({
  name: "StageDefinitionEntry",
  definition(t) {
    t.string("key");
    t.list.string("value");
  },
});
