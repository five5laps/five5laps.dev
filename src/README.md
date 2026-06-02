# Feature-Sliced Design

```
src/
├── app/           # Entry, router, global styles
├── pages/         # Route pages (home, projects, contacts, memories, nohello, …)
├── widgets/       # Composite blocks (header, footer, page-layout)
├── features/      # User scenarios (memory-album, memory-lightbox)
├── entities/      # Business entities (project, memory-album, product, discord-message)
└── shared/        # UI kit, assets, config
```

## Import rules

Layers can only import from layers **below**:

`app → pages → widgets → features → entities → shared`

Use public API via slice `index.ts` files:

```ts
import { projects } from "@entities/project";
import { Header } from "@widgets/header";
import { Button } from "@shared/ui/button";
```

## Aliases

| Alias        | Path                |
|-------------|---------------------|
| `@app`      | `src/app`           |
| `@pages`    | `src/pages`         |
| `@widgets`  | `src/widgets`       |
| `@features` | `src/features`      |
| `@entities` | `src/entities`      |
| `@shared`   | `src/shared`        |
| `@images`   | `src/shared/assets/images` |
| `@styles`   | `src/shared/assets/styles` |

## Adding content

- **New page** → `src/pages/<name>/ui/` + export in `index.ts`, register route in `app/providers/router.tsx` and `widgets/page-layout/ui/PageLayout.tsx`
- **New project** → `entities/project/model/projects.ts`
- **New memory album** → `entities/memory-album/model/albums.ts`
- **Navigation link** → `shared/config/navigation.ts`
