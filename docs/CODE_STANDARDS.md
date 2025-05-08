# Code standards

## Changelog

_Locatin of the changelog file: `<project_root>/CHANGELOG.md`_

Simple guidle:

- Every time you add a specific feature, fix or change, a simple oneline description should added to the changelog.
- _TIP_: Name your git branches appropriately, so that the changelog entry can be easily derived from the branch name.

Organization:

- `##` Date
  - `YYYY-MM-DD`
- `***` Type of change:
  - `ADDED` New features
  - `CHANGES` Changes to existing features
  - `FIXES` Bug fixes
- `-` Bulletpoint entry for the change  made in your branch

```markdown
## YYYY-MM-DD

***ADDED***: 
- Feature: Description of the new feature

***CHANGES***:
- Description of the change

***FIXES***:
- Description of the bug fix
```
