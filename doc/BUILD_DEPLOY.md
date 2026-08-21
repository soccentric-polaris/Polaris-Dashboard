# Polaris-Dashboard Build and Deployment

## Purpose and scope

Polaris-Dashboard is the `webui` Next.js application. The root Makefile wraps npm installation, development, production build, Vitest, ESLint, and Docker image/container operations.

## 1. Prerequisites

- Node.js/npm compatible with the checked-in `webui/package.json` (Next 16, React 19, TypeScript, and Vitest).
- Docker for container targets.
- Network access to npm on first install unless dependencies are already cached.

## 2. Setup

```bash
make install                # cd webui && npm install
```

Run all commands from `Polaris-Dashboard`; the Makefile supplies `webui` as the working directory for npm commands.

## 3. Build and compile

```bash
make dev                    # Next dev server
make build                  # npm run build, production bundle
make docker-build           # image polaris-dashboard:latest by default
make docker-build IMAGE=my-dashboard TAG=dev
```

The development server uses the Next package defaults. Docker image naming is controlled by `IMAGE` and `TAG`.

## 4. Test and lint

```bash
make test                   # npm test, Vitest unit tests
make lint                   # npm run lint, Next ESLint
```

The package manifest also declares `npm run type-check`, but the root Makefile has no `type-check` target; invoke it manually with `cd webui && npm run type-check` when needed.

## 5. Packaging and artifacts

`make build` produces the Next production output in `webui/.next`. `make docker-build` produces a Docker image, not a registry push. No package archive or cloud publishing target is declared.

## 6. Deployment, install, and run

```bash
make docker-run             # detached container, port 3010 by default
make PORT=8080 docker-run
make docker-logs
make docker-shell
make docker-stop
```

`docker-run` delegates to `docker/Makefile` and maps the configured host `PORT` to the container. The commands operate locally; registry credentials, cloud ingress, TLS, and production environment variables must be supplied by the deployment platform and are not defined here.

## 7. Cleanup

```bash
make clean                  # remove webui/.next
make docker-clean           # remove the configured image via docker/Makefile
```

## 8. Verification caveats

No hardware integration is defined. Manually verify the production bundle in the intended browser, API endpoint configuration, authentication/session behavior, and container health. A successful local Docker run is not a cloud deployment or registry push.