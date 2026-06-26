# Install

## One line

```bash
# macOS / Linux / WSL
curl -fsSL https://raw.githubusercontent.com/ryanda9910/prove-it/main/install.sh | bash
# Windows (PowerShell)
irm https://raw.githubusercontent.com/ryanda9910/prove-it/main/install.ps1 | iex
```

Idempotent — re-run to update. Needs `curl` or `wget` (macOS/Linux); no other deps.

## Where it installs

| Agent | Location |
|---|---|
| **Claude Code** (native skill) | `~/.claude/skills/prove-it/SKILL.md` |
| Codex | `~/.codex/prove-it/prove-it.md` |
| Cursor | `~/.cursor/prove-it/prove-it.md` |
| Gemini CLI | `~/.gemini/prove-it/prove-it.md` |
| opencode / Aider / Copilot CLI | manual (paste into the rules file) |

## Global vs project

- **Global** (default) — home agent dirs; applies to every repo.
- **Project** — add `-- --project` (sh) / `-project` (ps1) to also install into
  `./.claude/skills/prove-it/SKILL.md` so the skill travels with the repo.

## Manual

```bash
mkdir -p ~/.claude/skills/prove-it
cp skill/SKILL.md ~/.claude/skills/prove-it/SKILL.md
```

## Uninstall

```bash
rm -rf ~/.claude/skills/prove-it ~/.codex/prove-it ~/.cursor/prove-it ~/.gemini/prove-it
```
