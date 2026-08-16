"use client";

import { useRef, useState } from "react";
import { DOORS } from "@/lib/content";
import Cited from "./Cited";

/**
 * Three routes, selected vertically.
 *
 * Deliberately a different geometry from the BOS(T) handover, which runs
 * horizontally. Two signature interactions on one site should not feel
 * like the same widget wearing different labels.
 */
export default function Doors() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent) {
    const last = DOORS.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  }

  const door = DOORS[active];

  return (
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Routes to India revenue"
        onKeyDown={onKeyDown}
        className="self-start border-t border-rule"
      >
        {DOORS.map((d, i) => {
          const selected = i === active;
          return (
            <button
              key={d.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`door-tab-${d.id}`}
              aria-selected={selected}
              aria-controls={`door-panel-${d.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className="group block w-full cursor-pointer border-b border-rule py-6 text-left"
            >
              <div className="flex items-baseline gap-5">
                <span
                  className={`ev transition-colors ${
                    selected ? "text-blue" : "text-ink-2"
                  }`}
                >
                  {d.n}
                </span>
                <span
                  className={`flex-1 font-display text-[clamp(1.375rem,2.4vw,1.875rem)] leading-tight tracking-[-0.02em] transition-colors ${
                    selected
                      ? "text-blue"
                      : "text-ink-2 group-hover:text-ink"
                  }`}
                >
                  {d.name}
                </span>
              </div>
              {/* The selected route extends a rule toward its detail. */}
              <span
                aria-hidden
                className={`mt-4 block h-0.5 w-full origin-left bg-blue transition-[transform,opacity] duration-300 ease-out ${
                  selected ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`door-panel-${door.id}`}
        aria-labelledby={`door-tab-${door.id}`}
        tabIndex={0}
        className="lg:pt-6"
      >
        <p className="max-w-measure text-[1.125rem] leading-relaxed text-ink">
          {door.thesis}
        </p>

        <p className="ev mt-10 border-b border-rule pb-3 text-ink-2">
          How we actually work this route
        </p>
        <ul>
          {door.motion.map((m) => (
            <li
              key={m}
              className="flex gap-4 border-b border-rule py-4 text-[0.9375rem] leading-snug"
            >
              <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-blue" />
              {m}
            </li>
          ))}
        </ul>

        {door.proof && (
          <div className="mt-10">
            <Cited stat={door.proof} size="sm" />
          </div>
        )}
      </div>
    </div>
  );
}
