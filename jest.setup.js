// jest.setup.js
global.import = global.import || {};
global.import.meta = {
  url: `file://${process.cwd()}/`,
};
