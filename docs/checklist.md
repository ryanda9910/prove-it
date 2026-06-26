# Reference

How prove-it turns a done-claim into a checked claim. Mirrors `skill/SKILL.md`.

## 1. List the claims

Every closing assertion is a separate claim: "tests pass", "the endpoint returns
200", "the bug is fixed", "it handles empty input", "the build is green".

## 2. Back each claim with evidence

Exactly one of:

**Ran it** — a command actually executed, with the **real pasted output**.
```
ran `npm test` → 14 passed, 0 failed          [proven: ran]
ran `curl -s -o /dev/null -w '%{http_code}' localhost:3000/orders` → 200
```
Not "this would print 200" — the actual line.

**Cited it** — the exact `file:line` (or diff hunk) that makes the claim true,
quoted, when running isn't possible.
```
null guard added   payments.ts:42  `if (!user) return res.status(401)`   [proven: cited]
```

## 3. Flag what you can't verify

```
⚠ handles 1M rows   not verified — no dataset that large locally   [flagged]
⚠ migration is safe not verified — no DB to run it against         [flagged]
```
An honest gap beats a confident guess. The user can decide what to do about it.

## Banned without evidence

"should work", "this works now", "done", "fixed", "verified", "I've tested",
"looks good", "ready to ship" — none may appear unless a proof line backs them in
the same message.

---

prove-it isn't ceremony. It's making "done" mean *checked*, and making "I'm not
sure" sayable out loud.
