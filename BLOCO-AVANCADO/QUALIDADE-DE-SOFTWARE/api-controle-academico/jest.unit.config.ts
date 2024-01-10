import config from "./jest.config";

export default {
    ...config,
    testMatch: ["**/*.spec.ts"],
    setupFilesAfterEnv: ["<rootDir>/tests/config/prisma.mock.ts"],
    clearMocks: true,
};