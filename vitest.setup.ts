import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock next/font/google
vi.mock('next/font/google', () => ({
  Geist: () => ({
    variable: '--font-geist-sans',
    className: 'font-geist-sans',
  }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
    className: 'font-geist-mono',
  }),
}))

// Mock matchMedia for jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

// Mock ResizeObserver for Framer Motion / Lenis / Three.js
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock IntersectionObserver for Framer Motion viewport triggers
global.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []
  constructor(private callback: IntersectionObserverCallback) {}
  observe(target: Element) {
    this.callback([
      {
        isIntersecting: true,
        target,
        intersectionRatio: 1,
        boundingClientRect: target.getBoundingClientRect(),
        intersectionRect: target.getBoundingClientRect(),
        rootBounds: null,
        time: Date.now(),
      },
    ], this)
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}
