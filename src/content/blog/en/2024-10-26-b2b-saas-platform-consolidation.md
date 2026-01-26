---
title: B2B SaaS Platform Consolidation -- Explained
description: My Perspective on the Platform Approach
pubDate: 2024-10-26 05:08
---

Draft: 2024-10-26 05:28a EST

The following are notes that I'm compiling for a more formal blog post.

Overall, B2B SaaS is all about making clients more efficient by creating well-designed systems/websites
that collect and summarize data concisely or by creating automated processes. The platform approach
is creating multiple products under one brand that use an underlying thesis powered by a single
platform that all these products usually create. In Rippling's case, their thesis is that employee
data are sometimes siloed between products -- usually created by several point solution companies.
That data tends to be communicated between products using APIs and workflows, but many products,
out of company protection, may not open up all their APIs. Integrations are also expensive to
make and maintain. Rippling creating a platform that aggregates all data such that there's no
obstacle in managing data and automating workflows between products means you can create one
product with multiple SKUs; all these point solutions in enterprise SaaS create the same underlying
platform like workflows and reporting. The creation of a platform from the get go means you skipped
the most crucial and repeated step in B2B SaaS every time you create a new SKU, meaning more engineering
time is dedicated to the product itself.

On LinkedIn, many sales people are starting to notice Outreach and Gong have similar "business intelligence"
products. This is a great example of a competitive market looking for consolidation. If you look up the
B2B Sales SaaS wars, those two companies are the prime examples (I think Gong will go out of business though
considering its main product is expensive and cheaply replicable). Their single point solution products,
as they grow in features, start looking the same, but their data is spread thinly and integrating the data
between the two is costly. It's time for a new player with no tech debt, learnings from both these companies,
and a single platform meaning reduced engineering resources spent.

In Rippling's case, the thesis is data automation.
Parker Conrad mentions data automation examples all the time like tackling SFDC.
There are other forms of automation outside of data which I don't think anyone has spoken about
yet including Conrad. I think another form of automation is process automation. If a company is
run by lots of workflows, how do you aggregate these under one hood such that it touches every
process? I'm thinking a Zapier that revolves around the entire company; you could say that's
like UIPath, but UIPath only takes care of technical automation. Process automation can be specialized
for each department's use case. The reason process/workflow automation can be a thesis is because
every company has sprawling workflows; with mismanagement, several infinite loops, dead ends, potential
for workflow collisions that are somehow interdependent on each other, etc. cause a lot of inefficiencies.
Solving how to aggregate workflows for an employee in an HRIS, the workflows in a sales process, etc.
can unblock organizations from having to manually craft workflows and check that there are no collisions.

https://youtu.be/dJ3DT_7jzds?t=2383

Basically, B2B SaaS is undergoing consolidation of technologies because businesses need greater automation. A lot of point solutions makes it difficult to surface data and actionable things, making automation limited. I also realized B2B SaaS clients care WAY WAY WAYYYY too much on analytics. I think they’re useful, but I believe the reason why clients care so much is because they see so much shit to do, that they are looking for their B2B SaaS software to come up with reasons why they’re job is tiresome.

So two things that Rippling my fav company does well is automate and having a ton of data because they have a lot of segmented SaaS products bundled into their one platform.

Rippling is pitched similarly to the flexibility of Salesforce, but Rippling has a tougher job because they need to do the Salesforce data model on top of building out their own features. But I have high conviction of them (so much so that a Japanese startup is copying them)

But I also don’t think a lot of founders understand Rippling’s story and why it’s so core to B2B SaaS. I’ve been with a couple B2B SaaS ”platform” companies, and I think “platform” is a buzzword that the founders don’t understand and connect back to core principles

> Platform companies happen when u horizontally scale these control surfaces (e.g. atlassian, rippling slaesforce). this can come from an internally created collection or a free market

It’s the underlying platform like SFDC workflows. SFDC’s free market solution integrates nicely which makes it great, but that also meant a ton of dedicated personnel for SFDC

> analytics is the debug log of software and processes but for non tech ppl. at a high level, most ppl only need 1 or 2 numbers to do their job.
> and just like software debugging, debug logs are great for drill downs but they dont actually solve the problem by themselves (assist at best) and u only need them when u are actually debugging. loglevel=warning/critical in production.

Agree, but the high level insight is that that’s the thing they care about. I’ve noticed so long as there are analytics, people love it (obviously they have to be good). But the analytics are hand crafted by product managers (unless it’s like Rippling where you have all the data). This is why Greenhouse was successful; it is a classic ATS but with analytics because they connected to other SaaS products like your HRIS/HCM

There’s an assumption that you know the large problem of the industry you’re tackling and why the disconnection is inhibiting the incumbents from doing what software is supposed to do: automation

He’s a great founder, but the reason why that platform is so important is because that’s the backbone for the rest of your products to be built on. Tech debt is SV is crazy.

The other thing about businesses trying to reinvent an industry is that they all start off with tons of VC capital, but they actually don’t reinvent from the get go. They have to build their clientele, get the data, get the people, then actually figure out how to tackle.

This is what a bunch of unicorn B2B founders have told me. None of them knew the right solution until a PM figured it out, and NOT the CEO btw lmfao

The software is loaded with tech debt already; the platform can't move forward because they need to grow their clientele before knowing exactly how to tackle an industry since they don't know how to tackle it in the first place. Once they figure it out, they can reorient the code base to focus on the new idea. The code base was very hard to move around in that code base and shit is half broken all the time

I think Parker Conrad’s approach is unique to the space he’s tackling; it’s not often you can collect holistic data, but to be able to perform deep automations like SFDC or Rippling, you needed that platform

You can’t execute on product strategy if you’re full of tech debt. You have existing clientele, so if you try to start fresh, you lost reputation. If you try to move forward ignoring tech debt, you have high churn
And both are basically death sentences which is why a lot of platform companies have failed so far.
This is also why almost every startup I know has an eng department of 15:85. Rippling is unique; so much capital… they do 50:50 eng and sales headcount split
But most startups know about this death sentence, especially Gong, so they ramped up sales a ton from the get go to raise more capital. Eventually the founders simply sell secondaries.
Even hired CFOs can’t get secondaries; it’s very difficult outside the founders to sell them

Fwiw, Rippling’s platform is also not great; I’ve done Rippling customer interviews, and a lot do complain that it’s also broken a lot of the time. The approach is right; the engineering is not meeting customer expectations.

I think Rippling is a form of reincarnation of the ERP but more targeted

I think Salesforce will never have as a great of a competitor. I do think they will have better competition, but nothing overly surpassing them
The problem is that their acquisitions are great, but their integration with existing data (e.g. Snowflake), analytics (e.g. Tablaeu), and their existing products like their cold call system and their classic “Accounts” table are its downfall
It’s poor integration of their acquired products
Mulesoft is a classic, but Tablaeu and their Data Warehouse solution is their greatest missed opportunity
Salesforce automation is also fairly primal
There’s a great solution that I found fascinating called Workbase which was acquired (https://medium.com/workbase-data-platform/modern-gtm-will-break-the-crm-3b5356f9891e)
Salesforce is really slow to reinvent itself to match the sales funnel of B2C, modern GTM sales strategies, and general reinvention of sales products e.g. cold emailing (Outreach.io), Gong for transcription, etc.
There are definitely new inventions in point solution SaaS though. DBT and FiveTran as products found it interesting to combine a bunch of roles that take advantage of their product really well to make a lot of processes more efficient.
