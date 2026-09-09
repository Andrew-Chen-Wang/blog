---
title: "LLM Human Context"
description: "Pointing out examples of LLMs not doing what you want"
pubDate: 2026-09-09 15:00
tags: ["AI"]
---

LLMs are improving at enormous rates with potential leaks of self improvements getting out of hand and mismanaged by
the frontier labs. However, as I said before, documentation will always be the bane of LLMs or really even any team
communication.

For example, I was asking Claude Code to scrape some content. In the middle, I asked for a progress update, and it
found a performance issue in SQLite, so it added an index. With 7 hours left from 3 days of the scrape, estimated by
Claude Code, I asked for another progress update, and it found another small progress improvement. I'm not in any rush,
but it decided to make another update. I have plenty of time to let it finish, especially with 7 hours left. I wanted 
to reduce the risk of any potential mistakes it introduces, especially with such short amount of time left. But Claude
isn't calculating the risk; sometimes, I do notice it does. But then it also doesn't know the time context.

The thing is, if I explicitly told Claude there is plenty of time, then it's fine. I think if someone copilots their
AI agents closely, because, nowadays, at least for me, I've become more reliant on its autonomy being mostly perfect,
then a user can input feedback that I've described above.

However, my point isn't that LLMs can't calculate risk and time context. It's all still up to documentation and
context, just as team communication requires.

The upper limits of LLMs (for digital tasks at least) may now just be humans and their context itself.
