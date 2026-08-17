/**
 * A one-line channel between whatever opens a full-screen overlay and the
 * component that owns the Lenis instance.
 *
 * Locking `document.body` stops native scrolling, but Lenis runs its own
 * loop over the scroll position and keeps going regardless — so an open
 * overlay would still drag the page along behind it. SmoothScroll listens
 * for this and parks Lenis for the duration.
 *
 * An event rather than shared state or context: the two components have no
 * other reason to know about each other, and a context provider around the
 * whole tree would be a lot of apparatus for one boolean.
 */
export const SCROLL_LOCK = "pivora:scroll-lock";
