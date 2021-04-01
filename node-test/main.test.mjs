describe("@esm-bundle/markdown-it", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
});
