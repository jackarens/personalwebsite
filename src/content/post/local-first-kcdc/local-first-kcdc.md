---
title: "Local-first Web Apps (KCDC 2026)"
description: "Slides from my KCDC 2026 talk on building offline-capable web apps with Replicache."
publishDate: "2026-09-08"
updatedDate: "10 Sep 2026"
tags:
  ["software-architecture", "local-first", "web-development", "offline", "kcdc"]
slidesUrl: "/slides/local-first-kcdc"
draft: false
pinned: false
---

This is the talk version of Layer's local-first architecture: **"Stop Waiting for the Server"**, presented at KCDC 2026. The slides are the artifact here — [view the deck](/slides/local-first-kcdc).

## What the Talk Covers

- What local-first actually means, and the spectrum between CRUD and local-only
- Why [Layer](https://layer.team) needed it, and what we tried before reaching for a sync engine
- Choosing [Replicache](https://replicache.dev), and the constructor options that matter (`kvStore`, `indexes`, `pullInterval`, `schemaVersion`, a custom `puller`)
- Mutator design: why every mutator runs twice, what actually collides, and how mutator granularity quietly decides your conflict behavior
- Per-space versioning and the pull protocol
- The hard parts we hit in production — bootstrapping large projects with pre-serialized bundles, reads off the main thread, filtering and sorting through an in-memory index, and update contention

## The Long-form Version

I already wrote this story up in full, and there's no sense in maintaining two copies of it. For the narrative version — the same architecture with more prose and fewer bullet points — read [Local-first Web Apps](/posts/local-first-nebraska-code/local-first-nebraska-code).

## Resources

- ["Local-first software: you own your data, in spite of the cloud"](https://www.inkandswitch.com/local-first/) — Ink & Switch
- ["Scaling the Linear Sync Engine"](https://linear.app/now/scaling-the-linear-sync-engine)
- ["The Offline-first Landscape"](https://marcoapp.io/blog/offline-first-landscape)
- [Replicache](https://replicache.dev), [Zero](https://zero.rocicorp.dev), [ElectricSQL](https://electric-sql.com), [PowerSync](https://powersync.com), [Automerge](https://automerge.org), [Yjs](https://yjs.dev)
