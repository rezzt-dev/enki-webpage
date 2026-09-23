#!/bin/sh
# Ejecuta Playwright dentro de la imagen oficial, la misma que usa el CI (.github/workflows/web.yml).
# Así las capturas de regresión visual se generan y se comparan con el mismo renderizado, y WebKit
# funciona también en distribuciones sin soporte oficial de Playwright (Arch, Fedora…).
#
#   pnpm test:docker                                         # toda la suite
#   pnpm test:docker --project=visual --update-snapshots     # regenerar las capturas de referencia
#
# La versión de la imagen sale de @playwright/test instalado: al actualizar el paquete, la imagen le sigue.
set -eu

version=$(node -p 'JSON.parse(require("fs").readFileSync("node_modules/@playwright/test/package.json")).version')

# node_modules es el del host, montado tal cual. pnpm no debe verificarlo antes de `exec`/`run`: dentro del
# contenedor la ruta del store es otra, y su "arreglo" sería borrar y reinstalar el node_modules del host.
exec docker run --rm --init --ipc=host \
  --user "$(id -u):$(id -g)" --env HOME=/tmp --env CI \
  --env pnpm_config_verify_deps_before_run=false \
  --volume "$PWD":/work --workdir /work \
  "mcr.microsoft.com/playwright:v$version-noble" \
  sh -c 'mkdir -p /tmp/bin && corepack enable --install-directory /tmp/bin && PATH="/tmp/bin:$PATH" pnpm exec playwright test "$@"' \
  playwright "$@"
