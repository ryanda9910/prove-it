---
name: prove-it
description: >-
  Don't say a task is done until you can prove it. Triggers right before you'd
  report work finished (or on /prove-it). For every claim you're about to make —
  "it works", "tests pass", "the bug is fixed" — it makes you show evidence: run
  it and paste the real output, or cite the exact file:line. No proof, no "done";
  what you couldn't verify, you say so plainly.
---

# prove-it — your agent can't say "done" without proof

You're about to tell the user the task is finished. Before you do, **prove it.**
"This should work now" is the phrase that wastes the most human time in AI
coding — it's a guess wearing the costume of a result. prove-it turns every
done-claim into a checked claim.

## When to run

- **Automatically**, right before you report a task as done / working / fixed /
  ready — any closing claim about what the code now does.
- **On demand** when the user types `/prove-it`.

## The discipline

1. **List the claims** you're about to make. Each "it works / tests pass / bug
   fixed / endpoint returns X / handles Y" is a separate claim.
2. **Back each claim with evidence — one of:**
   - **Ran it.** A command you actually executed plus its **real, pasted output**
     (test run, the script, a curl, a REPL check). Not a description of what it
     would print — the actual lines.
   - **Cited it.** The exact `file:line` (or diff hunk) that makes the claim true,
     quoted, when running isn't possible.
3. **If you can't verify it, say so.** "Not verified: no DB to run the migration
   against" / "couldn't run tests: missing env var". An honest gap beats a
   confident guess every time.
4. **Banned without evidence:** "should work", "this works now", "done", "fixed",
   "verified", "I've tested", "looks good", "ready to ship" — none of these may
   appear unless a proof line backs them in the same message.

## The hard rule

Do **not** close the task as done while any claim is unproven and unflagged. If a
claim can't be proven and can't be honestly downgraded to "not verified", it isn't
done — keep working or hand the user a clear, specific gap.

## Output format

```
prove-it — N claim(s)
  ✓ tests pass            ran `npm test` → 14 passed, 0 failed   [proven: ran]
  ✓ /orders returns 200   ran `curl -s -o /dev/null -w '%{http_code}'` → 200  [proven: ran]
  ✓ null guard added      payments.ts:42 `if (!user) return 401`  [proven: cited]
  ⚠ handles 1M rows       not verified — no dataset that large locally  [flagged]
1 claim could not be verified — said so, not claimed.
```

Keep it tight. Real evidence only. The point isn't ceremony — it's that "done"
should mean *checked*, and "I'm not sure" should be sayable out loud.
