import { objectType } from "nexus";

export const ExtensionsEntry = objectType({
  name: "ExtensionsEntry",
  definition(t) {
    t.string("key");
    t.field("value", { type: "Extension" });
  },
});

export const Diagnostics = objectType({
  name: "Diagnostics",
  definition(t) {
    t.field("armExtensions", { type: "ArmExtensions" });
    t.field("buildInfo", { type: "BuildInfo" });
    t.field("clusterInfo", { type: "ClusterInfo" });
    // Maps extensions: Record<string, Extension> to an array of { key, value: Extension } objects for GraphQL.
    t.list.field("extensions", {
      type: "ExtensionsEntry",
      resolve(diagnostics) {
        return Object.entries(diagnostics.extensions).map(([key, value]) => ({
          key,
          value,
        }));
      },
    });
    t.field("serverInfo", { type: "ServerInfo" });
  },
});
