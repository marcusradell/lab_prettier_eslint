async function setup() {
  return Promise.resolve(true);
}

async function main() {
  const result = await setup();

  console.log({ result });
}

main();
