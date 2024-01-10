import config from "./jest.config";

export default {
    ...config,
    testMatch: ["**/*.spec.ts"],
    clearMocks: true,
    setupFilesAfterEnv: ["<rootDir>/tests/config/prisma.mock.ts"],
};