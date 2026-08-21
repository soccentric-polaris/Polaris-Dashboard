# Polaris-Dashboard

## Project Summary

- Polaris-Dashboard is the operator-facing web application for the Polaris
  validation platform. Its main implementation lives in `webui/`, a
  Next.js/TypeScript application with an application shell, workspace
  routes, shared UI components, API client helpers, module catalogs, and
  live-run state management. Routes cover the dashboard, runs and live-run
  detail, logs, reporting, modules and module workspaces, AI/LLM, and
  general, host-OTA, and device-OTA settings. Shell components provide
  navigation, connection status, mode switching, start/stop actions, and
  operator chrome.

- The data layer includes typed API contracts, a platform helper, a
  server-sent-events client, and a reducer plus hook for live-run updates.
  `lib/modules/catalog.ts` and `hal-derived-catalog.ts` connect the visible
  module workspace to the platform vocabulary. The web package uses its
  lockfile and declares Next, React, Vitest, and lint/type tooling; the
  root Makefile and `docker/` helpers provide higher-level development and
  container entry points. Contract tests under `contract-tests/tests/`
  exercise smoke behavior, runs, settings, and streaming against the
  server-facing API. The web package has focused tests for utilities and
  live-run reduction.

- The repository is more than a placeholder, but coverage is not uniform.
  Pages and controls are implemented in source, while browser end-to-end
  behavior, API compatibility in every route, authentication behavior, and
  production deployment require additional verification. The docs folder
  contains requirements, audit, and API findings that explain known
  boundaries. This inventory records implementation evidence; it does not
  claim that a live Polaris server has been connected successfully.

## Feature Inventory

| # | Name / Description | Implemented? | Test Coverage? | Manual Test |
|---:|---|---|---|---|
| 1 | Next.js application shell and workspace layout | Implemented | No full browser suite found | [ ] Manual verification required |
| 2 | Dashboard overview page | Implemented | Contract smoke test; page-specific test not found | [ ] Manual verification required |
| 3 | Runs list and run detail pages | Implemented | `contract-tests/tests/test_02_runs.py` | [ ] Manual verification required |
| 4 | Live-run stream and reducer | Implemented | `webui/lib/live-run/reducer.test.ts`, streaming contract test | [ ] Manual verification required |
| 5 | Logs and SSE client | Implemented | `contract-tests/tests/test_04_streaming.py`; client coverage partial | [ ] Manual verification required |
| 6 | Module catalog and module workspace | Implemented | Module contract coverage partial | [ ] Manual verification required |
| 7 | Reporting view | Implemented | No focused reporting test found | [ ] Manual verification required |
| 8 | General and OTA settings routes | Implemented | `contract-tests/tests/test_03_settings.py` | [ ] Manual verification required |
| 9 | Connection indicator, mode switcher, and run controls | Implemented | No focused component tests found | [ ] Manual verification required |
| 10 | Typed REST API client and platform helpers | Implemented | `webui/lib/utils.test.ts`; API contract tests | [ ] Manual verification required |
| 11 | Docker development/build helpers | Implemented | Build targets declared; image run unverified | [ ] Manual verification required |
| 12 | Authentication/session integration | Unknown | Contract smoke coverage exists; full auth behavior unclear | [ ] Manual verification required |

## Validation

```bash
make test
make lint
cd webui && npm test
```

Browser rendering, responsive behavior, server connectivity, and OTA actions remain manual.
