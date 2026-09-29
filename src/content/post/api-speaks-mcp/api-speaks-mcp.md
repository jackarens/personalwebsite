---
title: "Your API Already Speaks MCP (Lincoln.Code 2026)"
description: "Slides from my Lincoln.Code() talk on turning an existing API into an MCP server, and what building for an agent taught us about the API."
publishDate: "2026-09-29"
tags: ["mcp", "ai", "api-design", "software-architecture", "lincoln-code"]
slidesUrl: "/slides/api-speaks-mcp"
draft: false
pinned: true
---

**"Your API Already Speaks MCP, You Just Haven't Shipped It"**, presented at Lincoln.Code() on 29 September 2026. The slides are the artifact here — [view the deck](/slides/api-speaks-mcp).

## The argument

Everyone has spent the past year wondering whether AI makes their application obsolete. The worry usually points at the wrong layer. What's hard to replicate isn't the UI. It's the data model, the domain rules, and the workflows your users have built their jobs around.

Your domain model knows things no frontier model does. A public API says an agent can reach it in principle. An MCP server says so in practice, and if you have the API, you've already built most of one.

## What the talk covers

- Why the "SaaS is dead" discourse mistook the UI for the product, with the 2026 selloff and the Airtable sale as exhibits
- What an MCP server actually is: tools, resources, prompts, and why they map so cleanly onto a REST API you already have
- How [Layer](https://layer.team) built one on its existing API, and why the same primitives serve a first-day user scaffolding a schema and a power user loading a 12,000-record project
- What building for an agent exposed about our API ergonomics: polymorphic write bodies, missing batch and search endpoints, docs that said "configure this in the app", and how each fix helped human users too
- A checklist to run against your own API

## Resources

- [Model Context Protocol](https://modelcontextprotocol.io)
- [Layer API docs](https://layer-api.readme.io)
- [Salesforce Headless 360 MCP Server beta](https://developer.salesforce.com/blogs/2026/07/announcing-the-headless-360-mcp-server-beta)
- [Stripe Sessions 2026 announcements](https://stripe.com/blog/everything-we-announced-at-sessions-2026)
- [The 2026 SaaS Crash: It's Not What You Think](https://www.saastr.com/the-2026-saas-crash-its-not-what-you-think/) — SaaStr
- [Bending Spoons to buy Airtable for $1.28B](https://techcrunch.com/2026/08/04/bending-spoons-to-buy-airtable-for-1-28b/) — TechCrunch
