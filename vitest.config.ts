import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    server: {
      deps: {
        inline: ["react-native", "@react-native-async-storage/async-storage"],
      },
    },
  },
});
