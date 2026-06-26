# Real runs

An actual prove-it run in Claude Code (not a mockup). Reproduce: install the skill,
plant the files below, run the command.

Command (headless Claude Code, own auth, no API key in shell):
```
claude -p "I'm about to tell the user: 'Done, tests pass and div handles all inputs.'
Before I say that, use your prove-it skill on those claims. Output only the report."
  --allowed-tools "Bash(node:*)" "Read"
```

## Case 1 — a "done" claim on `calc.mjs` (add + div)

The code the agent "finished":
```js
// calc.mjs
export const add = (a, b) => a + b;
export const div = (a, b) => a / b;   // no zero guard
```
```js
// calc.test.mjs — only tests add
test("add", () => { assert.equal(add(2, 3), 5); });
```

About to be claimed: *"Done, tests pass and div handles all inputs."*

prove-it said (verbatim):
```
prove-it — 2 claim(s)
  ✓ tests pass            ran `node --test` → 1 pass, 0 fail   [proven: ran]
  ✗ div handles all inputs   div(1,0) → Infinity, no guard (calc.mjs:2 `a / b` // no zero guard); test covers add only, never calls div   [disproven: ran + cited]
1 claim FALSE — don't ship it.
```

It didn't just flag the weak claim — it **disproved** it: ran `div(1,0)` to get
`Infinity`, cited the unguarded line, and pointed out that "tests pass" was true
but proved nothing about `div` because the test never calls it. That second
observation (misleading coverage) is exactly the kind of thing a human reviewer
catches and a "should work" never does.
