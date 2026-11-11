
# Architecture

## Overview

Claude Code Workshop is an educational repository
for experimenting with AI-assisted development.

The repository currently contains project instructions
and documentation.

No application framework has been initialized yet.

## Current Structure

```text
claude-code-workshop/
├── README.md
├── CLAUDE.md
└── docs/
    ├── project-overview.md
    ├── architecture.md
    └── decisions/
        └── 0001-separate-instructions-from-documentation.md
```

The structure above shows the main documentation files.
Additional repository files may exist.

## Components

### Claude Code Configuration

`CLAUDE.md` defines repository-specific instructions
for Claude Code.

Global developer instructions are maintained separately
in `~/.claude/CLAUDE.md`.

### Project Documentation

The `docs/` directory contains project knowledge,
architecture documentation and technical decisions.

Documentation is written in Markdown and tracked by Git.

### Workshop Exercises

Practical exercises will be added incrementally.

Their directory structure will be defined when
the first implementation exercise is introduced.

## Preferred Technologies

The preferred technologies for future exercises are:

- TypeScript
- React
- Next.js
- Node.js
- pnpm

These are preferences, not installed dependencies.

## Architectural Principles

- Keep the repository easy to understand.
- Separate instructions from project documentation.
- Prefer incremental development.
- Avoid unnecessary architectural complexity.
- Document important technical decisions.
- Validate implementations before considering them complete.

## Future Evolution

The repository may eventually contain:

- Example web applications
- Reusable Claude Code skills
- AI agent configurations
- Automation examples
- Architecture Decision Records (ADRs)

These components are planned possibilities,
not existing implementations.
