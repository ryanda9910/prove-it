# FAQ

### What is this, exactly?

A skill (plain instructions) your coding agent follows. It adds no network calls,
no telemetry, no account — your code goes wherever your agent already sends it and
nowhere new.

### How is it different from a "be honest" instruction in CLAUDE.md?

A line like "don't claim things work" is a vibe; prove-it is a procedure with an
output format and a hard rule. It forces the agent to enumerate its claims and
attach a proof (a real command + output, or a `file:line` cite) to each one, and
it bans the escape-hatch phrases ("should work", "done") unless evidence backs
them in the same message. Structure beats good intentions.

### Will it slow me down?

It runs once, at the "done" moment, over the handful of claims you were about to
make. If everything's already proven, it's a quick confirmation. The time it
costs is far less than a round-trip of "it doesn't actually work."

### Does it nag?

No. It checks the claims you make, not the whole repo, and it never invents work.
If your claims are all proven, it says so and gets out of the way.

### What languages / stacks?

Language-agnostic — it's about evidence, not syntax. The example commands are
JS/TS-flavored (`npm test`, `curl`); swap in `pytest`, `go test`, `cargo test`,
etc. in `skill/SKILL.md` if you want stack-specific prompts.

### Which agents?

Claude Code (native), plus Codex, Cursor, Gemini CLI, opencode, Aider, Copilot CLI.

### It missed / mis-flagged something.

Open an issue with the example and the output — the checklist is a living file.
