# Usage

## When it runs

- **Automatically** right before the agent reports a task as done / working /
  fixed / ready — any closing claim about what the code now does.
- **On demand** via `/prove-it`.

## What it looks at

The **claims you're about to make**, not the whole codebase. Each "tests pass /
it works / bug fixed / endpoint returns X / handles Y" is treated as a separate
claim that needs evidence.

## The output

```
prove-it — 3 claims
  ✓ tests pass            ran `npm test` → 14 passed, 0 failed   [proven: ran]
  ✓ /orders returns 200   ran `curl -w '%{http_code}'` → 200     [proven: ran]
  ⚠ "the bug is fixed"    couldn't reproduce the original bug    [not verified]
2 proven, 1 not verified. Said so, didn't claim it.
```

- `✓ [proven: ran]` — a command was actually executed; the real output is shown.
- `✓ [proven: cited]` — backed by an exact `file:line` quote (when running isn't
  possible).
- `⚠ [not verified]` — honestly couldn't be checked, with the reason. Not a
  failure — a flagged gap, far better than a confident guess.

## The rule

The agent does **not** close a task as done while a claim is unproven and
unflagged. If a claim can't be proven and can't be honestly downgraded to "not
verified", it isn't done.
