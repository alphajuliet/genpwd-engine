# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GenPwd SLS — a serverless password generator deployed on AWS Lambda via the Serverless Framework v3. It exposes HTTP API endpoints that generate random pronounceable words using four different generator algorithms.

## Commands

- **Install dependencies**: `npm install`
- **Deploy**: `serverless deploy` (requires AWS credentials and Serverless Framework CLI)
- **Invoke locally**: `serverless invoke local -f generate -d '{"queryStringParameters":{"genId":"3","nwords":"5"}}'`

There are no test, lint, or build scripts configured.

## Architecture

**Entry points** (defined in `serverless.yml`):
- `GET /` → `index.handler` — simple health/info endpoint
- `GET /generate` → `src/genpwd.generate` — generates random words
- `GET /generators` → `src/genpwd.generatorList` — lists available generators

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

- **Functional style**: heavy use of Ramda (`R.compose`, `R.map`, `R.filter`, etc.) for function composition and data transformation
- **All `const`**: no `var` or `let`
- **Lambda response format**: handlers use `callback(null, { statusCode, headers, body })` pattern
- **CORS**: manually set in response headers within each handler (in addition to framework-level config)
- **Type signatures in comments**: e.g. `// crunch :: [() -> String] -> String`
