const getCoverageOptions = () => {
    return process.env.COVERAGE === "include"
        ? {
            collectCoverage: true,
            testMatch: ["**/*.test.tsx", "**/*.test.ts", "**/*.test.js"],
            coverageThreshold: {
                global: {
                    branches: 40,
                    functions: 40,
                    lines: 40,
                    statements: 40,
                },
            },
            coverageDirectory: "./coverage",
        }
        : {
            collectCoverage: false,
        };
};

module.exports = {
    ...getCoverageOptions(),
    testMatch: ["**/*.test.tsx", "**/*.test.ts", "**/*.test.js"],
    setupFilesAfterEnv: ["<rootDir>src/setupTests.tsx"],
    coveragePathIgnorePatterns: [
        ".*\\.mock.ts$",
        ".*\\.module.ts$",
        ".*\\.config.ts$",
        ".*\\.models.ts$",
        "setupTests.tsx",
        "index.tsx",
        "index.ts",
        "index.tsx",
        "/environments/",
        "/utils/",
        "/assets/",
        "/icons/",
    ],
};
