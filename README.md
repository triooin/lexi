# Lexi - Structured Indian Legal Information

Lexi is a modern, clean, and structured interface for reading public-domain Indian legal texts (Bare Acts). It is designed strictly for educational and informational purposes, prioritizing legal safety, compliance, and risk minimization.

## Core Principles

- **Educational Focus:** Provides structured access to public-domain laws with non-authoritative, plain-English explanations.
- **Strict Compliance:** Does NOT scrape proprietary databases (like Indian Kanoon or eCourts), does NOT copy proprietary headnotes, and does NOT misrepresent itself as an official government source.
- **Source Transparency:** Clearly attributes all statutory text to public domain sources (e.g., Government of India – India Code).
- **Risk Minimization:** Avoids any features that could be construed as providing legal advice or replicating restricted platforms.

## Features

- **Browse Acts:** View a list of available Bare Acts.
- **Structured Sections:** Read legal sections formatted for readability.
- **Simplified Explanations:** Non-authoritative summaries to help understand the basic premise of a section.
- **Penalties & Fines:** Clear extraction of punishments and fines where applicable.
- **Search:** Find specific sections using keywords.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Lucide React

## Data Management

The application uses a manual update system (currently mocked in `lib/data.ts`) to ensure that no automated scraping of restricted platforms occurs. All data is structured and formatted specifically for this platform.

## Legal Disclaimer

This platform provides structured access to Indian legal information for educational and informational purposes only. The content presented is based on publicly available legal texts. This website is not an official government source and does not claim ownership of any statutory text. For authoritative and legally binding versions, users must refer to official government publications. No proprietary legal databases are copied or reproduced. This platform does not provide legal advice.
