const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^#/(.*)$': '<rootDir>/test/$1',
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/assetTransformer.js',
    // '\\.(css|less)$': '<rootDir>/test/unit/assetTransformer.js'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-inheritance-loader-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  //setupFiles: ['<rootDir>/test/unit/setup'],
  //coverageDirectory: '<rootDir>/test/unit/coverage',
  // collectCoverageFrom: [
  //   'src/**/*.{js,vue}',
  //   '!src/main.js',
  //   '!**/src/config/**',
  //   '!**/src/store/**',
  //   '!**/src/views/test/**',
  //   '!config/**',
  //   '!build/**',
  //   '!/__mocks__/**',
  //   '!**/node_modules/**'
  // ],
  transformIgnorePatterns: [
    'node_modules/(?!vue-bootstrap-typeahead)'
  ]
}
