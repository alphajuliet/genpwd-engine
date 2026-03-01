# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GenPwd — a password generator deployed on Cloudflare Workers. It exposes HTTP API endpoints that generate random pronounceable words using four different generator algorithms.

## Commands

- **Install dependencies**: `npm install`
- **Local dev server**: `npm run dev` (starts wrangler dev on port 8787)
- **Deploy**: `npm run deploy` (requires Cloudflare auth via `wrangler login`)

There are no test, lint, or build scripts configured.

## Architecture

**Entry point** (`src/index.js`): Cloudflare Worker `fetch` handler with URL-based routing.

**Routes**:
- `GET /` → app info JSON
- `GET /generate` → generates random words (via `src/genpwd.js`)
- `GET /generators` → lists available generators
- `OPTIONS *` → CORS preflight (204)

**Query parameters** for `/generate`:
- `genId` (0–3, default 3): which generator algorithm to use
- `nwords` (default 10): number of words
- `strength` (0=simple, 1=medium, 2=complex): controls word length/complexity
- `punctuation`, `numbers`, `capitals` (0 or 1): post-processing options

**Generator algorithms** (`src/generator_*.js`):
- Generator 1: Weighted phonetic consonant-vowel patterns
- Generator 2: Pseudo-Japanese phonetics with transformations
- Generator 3: English-style consonant-vowel patterns
- Generator 4 (default): Markov chain using a pre-computed 29×42 transition matrix from English text

**Shared utilities** (`src/gen_common.js`): `RandomList`, `WeightedList`, `randomNumericString`, `capitalise`, `trRandElement`, `crunch`, and a symbol library. Each function has a Haskell-style type signature in comments.

## Code Conventions

- **ESM modules**: all files use `import`/`export`
- **Functional style**: heavy use of Ramda (`R.compose`, `R.map`, `R.filter`, etc.) for function composition and data transformation
- **All `const`**: no `var` or `let`
- **Worker response format**: handlers return `Response` objects with JSON body and CORS headers
- **CORS**: centralized headers in `src/genpwd.js` (`corsHeaders`), preflight handled in router
- **Type signatures in comments**: e.g. `// crunch :: [() -> String] -> String`
