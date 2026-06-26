/**
 * Self-driving demo for the README recording (VHS). Key-free and deterministic.
 * Report content is faithful to the real run in CASES.md. Run: node examples/demo.mjs
 */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const C = {
  reset: "\x1b[0m", dim: "\x1b[2m", b: "\x1b[1m",
  green: "\x1b[38;5;42m", red: "\x1b[38;5;203m", yellow: "\x1b[38;5;221m",
  grey: "\x1b[90m", cyan: "\x1b[36m",
};
async function line(s = "", d = 55) { process.stdout.write(s + "\n"); await sleep(d); }
async function type(s, speed = 12) { for (const ch of s) { process.stdout.write(ch); await sleep(speed); } process.stdout.write(C.reset + "\n"); }

async function main() {
  await line(`${C.green}${C.b}  prove-it${C.reset} ${C.dim}— your agent can't say "done" without proof${C.reset}\n`, 400);

  await type(`${C.dim}  (agent finishes a task…)${C.reset}`, 18);
  await sleep(150);
  await line(`${C.red}  ✗ "This should work now. Tests pass and the endpoint is fixed. Done!"${C.reset}`, 80);
  await line();
  await sleep(300);

  await type(`${C.cyan}$${C.reset} ${C.b}/prove-it${C.reset}`, 24);
  await sleep(300);
  await line(`${C.dim}  proving each claim…${C.reset}`, 700);
  await line();

  await line(`${C.b}prove-it${C.reset} ${C.dim}— 3 claims${C.reset}`, 250);
  await line(`  ${C.green}✓${C.reset} tests pass           ran ${C.cyan}npm test${C.reset} → ${C.green}14 passed, 0 failed${C.reset}  ${C.green}[proven: ran]${C.reset}`, 340);
  await line(`  ${C.green}✓${C.reset} /orders returns 200  ran ${C.cyan}curl -w '%{http_code}'${C.reset} → ${C.green}200${C.reset}  ${C.green}[proven: ran]${C.reset}`, 340);
  await line(`  ${C.yellow}⚠${C.reset} "the bug is fixed"   couldn't reproduce the original bug — ${C.yellow}not verified${C.reset}  ${C.yellow}[flagged]${C.reset}`, 340);
  await line();
  await line(`${C.b}2 proven, 1 not verified. Said so, didn't claim it.${C.reset}`, 200);
  await line();
  await sleep(400);
  await line(`${C.dim}  "done" should mean checked. "not sure" should be sayable.${C.reset}`, 120);
  await line(`${C.green}  github.com/ryanda9910/prove-it${C.reset}`, 100);
  await line();
}
main();
