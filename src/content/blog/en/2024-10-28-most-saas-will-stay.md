---
title: Most SaaS Will Stay
description: The notion good AI will replace SaaS by having AI Agents ignores the tenets of scaled business
pubDate: 2024-10-28 03:53
---

There is a notion in the tech bubble that, assuming AI agents are super knowledgeable,
that SaaS businesses will die because clients can use AI agents to build the necessary
software instead of purchasing.

Here are reasons from a business perspective that this hypothesis is not applicable to
most businesses:

1. Businesses would rather have something working and served immediately than build themselves

Take the open source movement: plenty of great **free** software apps have been built, yet not
many are adopted by businesses. Notable exceptions are DBT, Airflow, etc., and I'll go over the
exceptions. However, there was an assumption by open source developers that businesses could
simply take their software and run with it. However, it misses two crucial steps:

a) Deployment and maintenance

Companies don't want to spend time deploying and maintaining software. What if an open source
product is unscalable for a company's needs? They now need to build the software to make it
scalable; they also need to consider from the infrastructure side how to make it scalable.
An IT team that uses Gen AI can ask an LLM for a scalable solution, but having Gen AI know
what that means and to do it cost efficiently is not worth the hassle of continually prompting
it to set up a data orchestration pipeline.

People would much rather purchase an end product, not a tool that requires continual maintenance
and time. People have limited time and expertise. Outsource that time to a business whose incentivized
to do it well and become an expert in whatever the product they're build is.

b) Economies of scale

The premise of SaaS businesses is that they can serve multiple clients with the same software.
Sure, some features are built to alleviate pains for certain customers. But that's the beauty
of companies; consider the car industry. There are few automotive manufacturers because building
a car is hard. At scale, the cost of development is spread across its many customers.

Product managers at SaaS do centralized planning: if each client built their own custom software,
they might all repeat what others are doing while having to wait for the Gen AI to build and
for the full QA cycle to be completed. This is not an efficient use of time for most people.

Open source developers also argue that businesses want to customize their software, and open
source software allows them to do that. However, businesses don't want to spend time customizing;
they want someone else to do it. Additionally, forking projects and maintaining the fork with upstream
takes time. That's why forks are usually a result of an abandonment of a project.

2. SaaS businesses are not just about software

Consumer software is a perfect example of "it's not just software":
- Spotify requires collecting a ton of songs and negotiating with each record label
- Netflix requires negotiating with movie studios and even creating its own content

Even B2B SaaS companies need to aggregate their people resources to acquire data:
- Negotiate getting sandboxes access to create integrations in order to make automated workflows
- Collecting resources to serve businesses
  - Proxy IP services send out reward mechanisms to incentivize giving their IP addresses
  - Clearbit tries accessing a ton of data everywhere to help you find contact information
- The Cloudflare network, CAPTCHAs and WAF rely on collective data from interactions to ensure security

Even ensuring compliance and regulations are satisfied:
- Gusto requires integrating with banks to deposit properly. They also require conforming to
  legal frameworks to ensure they're not breaking any laws. Having Gen AI figure all that out
  and QA-ing the Gen AI requires expertise of which you might as well purchase Gusto and not waste
  any more time.

3. Required network effects

There's also the community effects; again, the consumer model is easy to understand this:
- Facebook and other network-based companies need lots of people for the value to be ripe
- Google Docs and Sheets have community helpers because people have all sorts of complicated
  wants and needs; these flexible software can do a lot, so other people who are also familiar
  with the product can help. Having Gen AI build individual software means siloed systems
  where no one, including the creator themselves, except Gen AI will know what's going on.
- Collaborator based software like Figma or Google doc requires some form of account based
  management to invite others to collaborate.
- Uber requires a lot of drivers to be available for the service to be useful, but that marketplace
  also means there need to be a lot of consumers/demand for there to be plentiful supply. This also
  means there needs to be marketing and sway for consumers to join the platform.

But B2B SaaS also requires similar effects:
- You need Tableau data science experts. If data scientists had to create their own Tableau,
  they'd have to figure out the necessary integrations from Point 2 above, create the visualizations,
  set a standard for what language to use (SQL is now the language, but imagine if it wasn't? It'd be
  hard to set a standard. You can think similarly to how web developers choose from an assortment of
  frameworks)
- There are dedicated Salesforce admins and contractor agencies/dev shops
- In the auto industry, some software have "internal forums" where AI can't learn about the
  software since it's not public. Companies will need experienced people who've worked with
  a specific, e.g. CAD, software to be a viable candidate in certain roles.
- Consider customer service for a company: if a customer identifies a bug in the software,
  the product team will fix it before another customer identifies the same bug. This network
  effect demonstrates collectivity from the standpoint of being able to resolve issues quickly
  and more widespread when there are more people using your software.

Software can be complex; people take the time to get certificates just to understand complex
software. Let businesses create complex, flexible software that have easy interfaces for users
or even Gen AI.

4. The stakes and economies of scale are highly incentivizing and properly distributed by the market

HRIS like Rippling are complex beasts with an underlying centralized plan. Platform SaaS companies
revolve around a thesis, and build their platforms around that thesis. Every company needs HRIS,
but almost all companies don't want to worry about breaking regulations like ensuring wages are
deposited on time into bank accounts.

Complex software can be built by Gen AI, but the deployment may also be too custom. Gen AI may
know that to send email notifications require a workflow, but should it go through a long-running
background job or a fast running asynchronous background worker with no cold start? Every time
you create a workflow, should it use existing infrastructure or deploy new infrastructure?

Will it get its solution right the first go? Probably not. Why not let a business that serves
you, the target client with the target (enterprise) company size, to do it for you?

How will Gen AI know how to prevent its emailing to be marked as spam?

The stakes from, for example regulations, makes software costly. The economies of scale
of businesses that serve clients the same product are highly incentivized to do it well and
deliver quality and affordability compared to making it yourself. They are incentivized
to continually reinvent itself to reach the business's objective (in the case of SaaS, that's
optimizing clients for efficiency and automation). That is a fundamental tenet of business.

5. People are creative

Solutions to the "preventing emails from being marked as spam" problem is tough for people to already come up with.
Innovative solutions like [instantly.ai](https://instantly.ai) was built from years of experience
and deep understanding of a market. This is something Gen AI just can't do without a lot of machine
learning on not just the internet but people's literal brains -- and all of it.

6. AI allows customers to customize products

Customers want to customize products to their likings, maybe with AI, maybe by ranting to a CSM,
but the base product comes from someone deeply thinking about the problem and how to address it
most effectively.

The most AI aligned argument is that AI will replace SaaS apps because businesses will make their own
solution in no time with AI and customized to their liking. The existing products on the market are
not made up by customers; they're made by product thinkers. If you need contextual reference, that's
the entire "Steve Jobs" argument of what do customers actually know. Product owners don't ask "what
do you, the customer want?" Owners ask questions that lead to insights guiding them to make the dream
product that is efficient and tied into a business's core objective in an integrated platform.

## Conclusion

Software is complex to build and maintain; there are externalities to consider like regulations, so
even with unlimited money to pay for software engineers, it's more worthwhile to access a product
that's already been tested and has time to be built and conform to regulations. It requires more than
just an engineer to build a product; it could also require network effects or a community or centralized
resource collection.

SaaS is not just about writing code. There are so many factors that go into a business that are people
oriented like conforming to regulations (potentially breaking some too like Uber) or marketing to
increase the viability and decrease the cost of a marketplace SaaS. AI can't replace the creativity of
people and markets will favor the economies of scale of businesses and their market size.
