# Customizing

prove-it is one file of instructions: `skill/SKILL.md` (installed at
`~/.claude/skills/prove-it/SKILL.md`). Edit it to change behavior — no build, no code.

## Stack-specific proof commands

Edit "The discipline" in `SKILL.md` so the example commands match your stack:
`pytest -q`, `go test ./...`, `cargo test`, `bin/rails test`, a `curl` against
your dev server, etc. The more concrete the prompt, the more reliably the agent
actually runs something.

## Tune the strictness

The default bans the escape-hatch phrases and requires a proof line per claim. To
loosen (allow "cited" without "ran" for everything) or tighten (require a run for
any claim about runtime behavior), edit the "Banned without evidence" and "The
hard rule" sections.

## Scope

By default it checks the claims in the closing message. To also re-verify earlier
claims in a long session, add a line telling it to re-prove any claim it made that
later code could have invalidated.

## Project-specific rules

Use `--project` install to commit a tuned `./.claude/skills/prove-it/SKILL.md` so
your team shares the same behavior.
