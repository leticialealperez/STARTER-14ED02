export default {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        ".+\\.ts$": "ts-jest",
    },
    roots: ["<rootDir>/tests"],
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    setupFilesAfterEnv: ["<rootDir>/tests/config/prisma.mock.ts"],
};
