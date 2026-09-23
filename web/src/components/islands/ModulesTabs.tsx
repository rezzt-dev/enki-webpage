import * as Tabs from "@radix-ui/react-tabs";
import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

/**
 * Pestañas de módulos (Radix Tabs: roles ARIA, flechas, Home/End). Todos los paneles se renderizan en el
 * HTML (`forceMount`) para que su texto sea indexable y visible sin JS; los inactivos se ocultan con CSS.
 *
 * Cada captura llega desde Astro como slot con nombre (= id del módulo) y React la recibe como prop.
 */
interface Module {
  id: string;
  label: string;
  title: string;
  body: string;
  points: string[];
}

type Props = {
  items: Module[];
  ariaLabel: string;
} & Record<string, unknown>;

export default function ModulesTabs({ items, ariaLabel, ...slots }: Props) {
  const first = items[0]?.id ?? "";

  return (
    <Tabs.Root defaultValue={first} onValueChange={(id) => track("modules_tab", { id })}>
      <Tabs.List
        aria-label={ariaLabel}
        tabIndex={0}
        className="modules-tabs-list border-ink/10 -mx-4 flex [scrollbar-width:none] overflow-x-auto border-b px-4 md:mx-0 md:px-0"
      >
        {items.map((item) => (
          <Tabs.Trigger
            key={item.id}
            value={item.id}
            className="text-ink/60 hover:text-ink data-[state=active]:border-ink data-[state=active]:text-ink -mb-px min-h-12 shrink-0 border-b-2 border-transparent px-4 font-mono text-[0.6875rem] font-bold tracking-[0.2em] uppercase transition-colors duration-200 md:px-6"
          >
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {items.map((item) => (
        <Tabs.Content
          key={item.id}
          value={item.id}
          forceMount
          className="modules-tabs-panel data-[state=active]:animate-panel-in grid gap-10 pt-10 data-[state=inactive]:hidden md:pt-14 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-4 lg:pt-4">
            <h3 className="text-subheading font-bold uppercase">{item.title}</h3>
            <p className="text-text-2 mt-4 leading-relaxed">{item.body}</p>
            <ul className="border-ink/10 mt-8 flex flex-col border-t">
              {item.points.map((point) => (
                <li key={point} className="border-ink/10 flex gap-3 border-b py-3.5 text-sm leading-snug">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-px size-4 shrink-0" fill="currentColor">
                    <path d="M9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">{slots[item.id] as ReactNode}</div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
