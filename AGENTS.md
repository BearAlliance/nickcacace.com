# Repository Guidelines

## Project Structure & Module Organization

Application code lives under `src/`. Feature areas are grouped in `src/app/` (`home/`, `contact/`, `projects/`, shared UI under `shared/`). Global styles are in `src/styles.scss` and `src/app/variables.scss`. Static assets such as photos and project thumbnails live in `src/assets/`. Environment-specific settings are in `src/environments/`. Deployment files are at the repo root: `Dockerfile`, `docker-compose.yml`, `nginx.conf`, and Angular workspace config in `angular.json`.

## Build, Test, and Development Commands

- `npm install`: install dependencies and Husky hooks.
- `npm run dev`: start the Angular dev server on `http://localhost:4200/`.
- `npm run build:dev`: create a non-production build in `dist/`.
- `npm run build`: create the production bundle.
- `npm start`: serve the built `dist/` output with `http-server`.
- `npm run lint`: run Angular ESLint checks.
- `ng test`: run Jasmine/Karma unit tests.
- `npm test`: run the repo’s gate checks (`prettier --check` and `ng lint`).

## Coding Style & Naming Conventions

Use 2-space indentation, UTF-8, and final newlines per `.editorconfig`. Prettier enforces formatting and single quotes; run `npm run prettier-fix` before submitting large edits. Follow Angular conventions already used in `src/app/`: component files use `feature-name.component.ts|html|scss|spec.ts`, classes use PascalCase, and selectors use the `app-` prefix with kebab-case. Keep shared constants and reusable UI in `src/app/shared/`.

## Testing Guidelines

Unit tests sit beside source files as `*.spec.ts` and use Jasmine with Karma. Add or update specs whenever component behavior, routing, or shared data changes. Use `ng test` for behavior checks and `npm test` before opening a PR. There is no documented coverage threshold in the repo, so focus on meaningful assertions around changed code.

## Commit & Pull Request Guidelines

Recent history follows Conventional Commit style, for example `build(deps): bump hono from ...` and `build(deps-dev): bump ...`. Prefer `type(scope): summary` such as `feat(projects): add modal keyboard close`. PRs should include a short description, linked issue when applicable, testing notes, and screenshots for visible UI changes.

## Configuration & Deployment Notes

Production assets are generated into `dist/`. When changing runtime or hosting behavior, review `Dockerfile`, `docker-compose.yml`, and `nginx.conf` together so local and deployed environments stay aligned.
