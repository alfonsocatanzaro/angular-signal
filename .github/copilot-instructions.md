# Angular Signal Project - AI Coding Agent Instructions

## Project Overview
**Angular 20 standalone application** with signal-based state management. This is a modern Angular app using the standalone API (no NgModules), bootstrapped via `main.ts` with `bootstrapApplication()`.

**Key entry points:**
- `src/main.ts` - Bootstrap entry point
- `src/app/app.ts` - Root component (uses Angular signals for reactivity)
- `src/app/app.config.ts` - Application configuration, providers setup
- `src/app/app.routes.ts` - Empty routes array; add new routes here

## Architecture Patterns

### Component Structure
- **Standalone components** only - all new components must include `imports: [...]` in decorator
- Components use Angular `signal()` API for reactive state (see `App` component in `app.ts`)
- Files follow colocation pattern: `component.ts`, `component.html`, `component.scss`, `component.spec.ts`
- Import `RouterOutlet` in parent components that render child routes

### Configuration & DI
- No traditional NgModules; use functional `ApplicationConfig` (see `app.config.ts`)
- All providers declared via functions: `provideBrowserGlobalErrorListeners()`, `provideZoneChangeDetection()`, `provideRouter()`
- Add new providers to `appConfig` providers array

### Styling
- **SCSS required by default** - Angular CLI configured in `angular.json` with `inlineStyleLanguage: "scss"`
- Global styles in `src/styles.scss`
- Component-scoped styles use `styleUrl` property (not inline)

## Development Workflows

### Core Commands
```bash
npm start          # ng serve (dev server on http://localhost:4200)
npm run build      # Production build → dist/
npm run watch      # Watch mode for development
npm test           # Karma + Jasmine test runner
```

### Code Generation
```bash
ng generate component <name>        # Creates component (auto SCSS)
ng generate directive <name>
ng generate pipe <name>
ng generate service <name>
```

### Testing
- **Test framework:** Jasmine + Karma
- Location: `src/**/*.spec.ts`
- Example test pattern in `app.spec.ts`: `TestBed.configureTestingModule()` with standalone imports
- Run tests: `npm test` (watch mode with coverage available)

## Project-Specific Conventions

1. **Signals for state**: Use `signal()` from `@angular/core` instead of RxJS observables where appropriate (consistent with `App` component pattern)
2. **Prettier formatting**: Single quotes, 100 char line width; HTML uses Angular parser
3. **Component naming**: PascalCase export class names (e.g., `export class App`)
4. **TypeScript config**: `typescript ~5.9.2` with strict mode enabled in `tsconfig.json`

## Build & Performance
- **Production budgets** (in `angular.json`):
  - Initial bundle: max 500kB warning, 1MB error
  - Component styles: max 4kB warning, 8kB error
- **Default config**: Production build with output hashing enabled
- **Development** includes source maps but no optimization

## Important Files
- `package.json` - Dependencies (Angular 20, RxJS 7.8, Karma/Jasmine)
- `tsconfig.app.json` - Application-specific TypeScript config
- `.angular/` - Angular CLI cache (exclude from edits)
- `public/` - Static assets copied to dist/

## When Adding Features
1. Create new routes in `app.routes.ts` as `Routes` array
2. Generate components with `ng generate component` for SCSS/TypeScript consistency
3. Import standalone components in parent component `imports` array
4. Add tests alongside components (`.spec.ts` files)
5. Update `appConfig` providers if new services or DI tokens needed
