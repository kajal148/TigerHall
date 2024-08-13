module.exports = {
    testDir: './tests',
    timeout: 30000,
    expect: {
      timeout: 10000,
    },
    reporter: [['list'], ['json', { outputFile: 'results.json' }]],
    use: {
      baseURL: 'http://localhost:1234',
      headless: true,
    },
  };