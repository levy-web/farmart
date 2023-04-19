module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
  };
  