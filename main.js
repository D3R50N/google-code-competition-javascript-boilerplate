const fs = require('fs');

async function solve(input)
{
  return input;
}

async function main()
{
  const inputs = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n')
    .slice(1)
    .filter((_, i) => i % 2);

  const outputs = (await Promise.all(
    inputs.map(async (input, i) => (
      `Case #${i + 1}: ${await solve(input)}`
    ))
  )).join('\n');

  console.log(outputs);
}

main();