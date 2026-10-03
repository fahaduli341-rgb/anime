/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DarkSoulsHoloCard, type DarkSoulsHoloCardVariant } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { Flame, Shield, Sparkles, RotateCw, ZoomIn, Eye, Layers } from "lucide-react";

export function Scene({ variant = "ashen-one" }: { variant?: DarkSoulsHoloCardVariant }) {
  return (
    <div className="shader-frame">
      <DarkSoulsHoloCard variant={variant} />
    </div>
  );
}

export default function App() {
  const [activeVariant, setActiveVariant] = useState<DarkSoulsHoloCardVariant>("ashen-one");
  const [showControlsHint, setShowControlsHint] = useState(true);

  return (
    <div className="relative w-full h-full min-h-screen bg-[#050404] text-[#c8b48f] font-serif select-none overflow-hidden flex flex-col">
      {/* Cinematic Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />

      {/* Atmospheric Top Header */}
      <header className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#050404]/90 via-[#050404]/40 to-transparent backdrop-blur-xs">
        <div className="flex items-center space-x-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-[#c8b48f]/40 bg-[#120e0d]">
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-[0.28em] uppercase text-[#e4d4ba] drop-shadow-md">
              Dark Souls
            </h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8a7c68]">
              {activeVariant === "ashen-one" ? "The Ashen One • Sword Shrine" : "Cindermane • Flame foil"}
            </p>
          </div>
        </div>

        {/* Variant Preset Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg border border-[#c8b48f]/20 bg-[#0c0a0a]/80 backdrop-blur-md shadow-2xl">
          <button
            type="button"
            onClick={() => setActiveVariant("ashen-one")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs tracking-wider transition-all duration-300 uppercase cursor-pointer ${
              activeVariant === "ashen-one"
                ? "bg-gradient-to-r from-amber-950/80 to-[#2a1a12] text-[#ffddaa] border border-amber-600/50 shadow-inner"
                : "text-[#8a7c68] hover:text-[#c8b48f] hover:bg-white/5"
            }`}
          >
            <Shield className="w-3 h-3 text-amber-400" />
            <span>Ashen One</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveVariant("cindermane")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs tracking-wider transition-all duration-300 uppercase cursor-pointer ${
              activeVariant === "cindermane"
                ? "bg-gradient-to-r from-amber-950/80 to-[#2a1a12] text-[#ffddaa] border border-amber-600/50 shadow-inner"
                : "text-[#8a7c68] hover:text-[#c8b48f] hover:bg-white/5"
            }`}
          >
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span>Cindermane</span>
          </button>
        </div>
      </header>

      {/* Main 3D Card Scene */}
      <main className="relative flex-1 w-full h-full">
        <Scene variant={activeVariant} />
      </main>

      {/* Bottom HUD: Legend and Instructions */}
      <footer className="absolute bottom-4 inset-x-0 z-20 flex flex-col sm:flex-row items-center justify-between px-6 gap-2 pointer-events-none">
        <div className="flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-[#8a7c68] drop-shadow">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
            Holographic GLSL Foil
          </span>
          <span className="hidden sm:inline text-[#4a4238]">•</span>
          <span className="hidden sm:inline">Three.js r180 Pipeline</span>
        </div>

        {showControlsHint && (
          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 py-1.5 rounded-md border border-[#c8b48f]/15 bg-[#090808]/85 backdrop-blur-md text-[10px] tracking-wider text-[#bdaa89]">
            <span className="flex items-center gap-1">
              <RotateCw className="w-3 h-3 text-amber-400" />
              <span>Drag / Tilt</span>
            </span>
            <span className="text-[#3d3630]">|</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-amber-400" />
              <span>Double-Click or <kbd className="px-1 py-0.5 rounded bg-white/10 text-white font-mono text-[9px]">F</kbd> Flip</span>
            </span>
            <span className="text-[#3d3630]">|</span>
            <span className="flex items-center gap-1">
              <ZoomIn className="w-3 h-3 text-amber-400" />
              <span>Scroll Zoom</span>
            </span>
            <span className="text-[#3d3630]">|</span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded bg-white/10 text-white font-mono text-[9px]">R</kbd> Reset
            </span>
            <button
              onClick={() => setShowControlsHint(false)}
              className="ml-1 text-[#6a5e52] hover:text-[#c8b48f] cursor-pointer"
              title="Dismiss hints"
            >
              ✕
            </button>
          </div>
        )}
      </footer>
    </div>
  );
}
