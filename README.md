<p align="center">
  <img src="assets/logo.svg" alt="prove-it" width="96" height="96" />
</p>

<h1 align="center">prove-it</h1>

<p align="center"><b>Your agent can't say done without proof.</b></p>

<p align="center">
  🇺🇸 English · <a href="README.id.md">🇮🇩 Bahasa Indonesia</a> · <a href="README.zh-CN.md">🇨🇳 简体中文</a>
</p>

<p align="center">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-34D399" />
  <img alt="skill" src="https://img.shields.io/badge/Claude%20Code-skill-34D399" />
  <img alt="harness" src="https://img.shields.io/badge/also-Codex%20·%20Cursor%20·%20Gemini%20·%20opencode-blue" />
  <img alt="install" src="https://img.shields.io/badge/install-one%20line-34D399" />
</p>

<p align="center">
  <img src="demo.gif" alt="prove-it demo" width="760" />
</p>

A skill for your coding agent (Claude Code — also Codex, Cursor, Gemini CLI,
opencode). Right before the agent says a task is **done**, it makes every
done-claim earn its place: run it and paste the real output, or cite the exact
`file:line`. What it can't verify, it says so. "This should work now" stops being
an acceptable ending.

"Should work" is the phrase that wastes the most human time in AI coding. It's a
guess wearing the costume of a result. prove-it turns every claim into a checked
claim.

## Before / After

**Without prove-it** — the agent guesses and hands it back:

```
"This should work now. Tests pass and the endpoint is fixed. Done!"
```
(…tests were never run, the endpoint never hit, the "fix" never reproduced.)

**With prove-it** — it proves each claim first, and flags what it can't:

```
prove-it — 3 claims
  ✓ tests pass           ran `npm test` → 14 passed, 0 failed         [proven: ran]
  ✓ /orders returns 200  ran `curl -w '%{http_code}'` → 200           [proven: ran]
  ⚠ "the bug is fixed"   couldn't reproduce the original bug          [not verified]
2 proven, 1 not verified. Said so, didn't claim it.
```

Same work. "Done" now means *checked*, and "I'm not sure" is sayable out loud.

## Real runs

Not a mockup. Actual prove-it runs in Claude Code — see **[CASES.md](CASES.md)**.

## Install

```bash
# macOS / Linux / WSL
curl -fsSL https://raw.githubusercontent.com/ryanda9910/prove-it/main/install.sh | bash

# Windows (PowerShell)
irm https://raw.githubusercontent.com/ryanda9910/prove-it/main/install.ps1 | iex
```

Finds every coding agent you have and installs the skill into each. ~10 seconds,
safe to re-run. `--project` also installs into the current repo's `.claude/`. No
key, no account, no dependency.

Manual: copy [`skill/SKILL.md`](skill/SKILL.md) into your agent's skills/rules dir
(Claude Code: `~/.claude/skills/prove-it/SKILL.md`).

## Documentation

Full docs in **[docs/](docs/)** — [usage](docs/usage.md) · [reference](docs/checklist.md) ·
[install](docs/install.md) · [customizing](docs/customizing.md) · [FAQ](docs/faq.md) ·
[real runs](CASES.md) · [contributing](CONTRIBUTING.md).

## Works in

Claude Code (native skill), plus any agent that loads a rules/skill file — Codex,
Cursor, Gemini CLI, opencode, Aider, GitHub Copilot CLI.

## License

MIT.
