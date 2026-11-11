
# ADR 0001: Separate Instructions from Project Documentation

## Status

Accepted

## Context

Claude Code needs instructions about how to work
and documentation about the project itself.

Storing all information in CLAUDE.md would make
the file unnecessarily large and difficult to maintain.

The workshop needs a structure that can grow as
new exercises, applications and architectural
decisions are introduced.

## Decision

We will separate operational instructions
from project documentation.

- `CLAUDE.md` contains repository-specific
  instructions for Claude Code.
- `docs/project-overview.md` describes the project.
- `docs/architecture.md` documents the architecture.
- `docs/decisions/` stores architectural decisions.

Global development instructions remain in
`~/.claude/CLAUDE.md`.

## Alternatives Considered

### Single CLAUDE.md file

Keep instructions and project documentation
in one file.

Rejected because the file would become harder
to maintain as the workshop grows.

### Documentation only in README.md

Store all project knowledge in README.md.

Rejected because README.md is better suited
to providing an entry point to the repository.

## Consequences

### Positive

- Clear separation of responsibilities.
- Easier maintenance.
- Less duplication of instructions.
- Documentation can grow independently.
- Claude Code can consult relevant documents.

### Negative

- More files to maintain.
- Documentation must be kept up to date.
- Claude Code may need to read additional files.

## Notes

This decision applies to the Claude Code Workshop
repository and may be revisited as the project grows.
