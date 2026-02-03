# Splendor

**To Kepler and beyond**

---

## Hero

### Splendor

## An AI Kernel for Self-Managed Neuro-Symbolic Agents

Splendor is a open-souce **kernel-grade runtime** (Rust core + Python
interfaces) that turns autonomous agents from ad-hoc application code into
**first-class compute**. It provides the primitives to run **persistent,
governable agent loops**—with explicit **state**, **feedback/reward channels**,
**neural policies**, **symbolic constraints**, and **verified action
boundaries**—so agents can operate safely and continuously on one machine or
across a fleet.

- **Runs on top of Unix-based systems** (Linux/macOS and other Unix-like environments)
- **Not a bare-metal OS kernel** (see FAQ)
- Built to **augment** modern neural AI systems, not replace them
- Built to **define and enforce agent primitives** for autonomy, coordination, and long-term evolution (see **Primitives**)



---

## Why This Exists

### Today’s systems have OS primitives—agents don’t.

Modern operating systems standardized primitives like **processes, threads, memory, IPC, permissions, and scheduling**. That shared substrate is a major reason we can build reliable software at scale.

Autonomous AI systems don’t have an equivalent foundation. “Agents” are typically assembled ad-hoc in user space: a model, a prompt, a vector store, a tool wrapper, a planner, a retry loop—plus bespoke glue for safety and observability. The result is fragmented, hard to verify, and difficult to run consistently across devices or across teams.

### Splendor’s thesis

The next “kernel” won’t primarily schedule processes. It will schedule **agent loops**:

- **perceiving** (kernel adapters that normalize sensors/tools into structured percepts),
- **deciding** (hybrid routing across neural generalization and symbolic control),
- **acting** (kernel adapters that execute actions through verified boundaries),
- **learning from feedback** (reward and evaluation channels),
- **coordinating** (multi-tenancy, messaging, and resource allocation),
- and **remaining constrained** by explicit rules and guarantees.

Splendor aims to provide the missing **kernel-level primitives for agents**, so we can build the next 100 years of autonomous systems on a stable, auditable foundation.


---

## What Splendor Is (and Isn’t)

### Splendor is:

- A **Rust kernel-runtime for agents** that provides primitives most agent
  frameworks don’t, see primitives.

- **Interpreters as managed compute**: Splendor can host one or more **sandboxed
  interpreter instances** per agent/tenant. The interpreter is a controlled
  self-managed environment the agent can depend on.

- A runtime for **closed-loop autonomy**: the kernel standardizes how **percepts
  → policies → actions** flow, and how **reward/feedback channels** are recorded
  and routed back into state and policies. Environment interfaces are modeled
  through kernel primitives so agents can be portable and comparable across
  deployments.

- **Distributed by design**: agents can run across machines, exchange structured
  messages, and coordinate as a fleet, while **tenancy and constraints** remain
  enforceable across boundaries.

### Splendor is not:

- A replacement for Unix or your OS (it runs **on top of Unix-based systems**)
- A new neural architecture (bring your models)
- A single “agent framework” that dictates how you build (bring your stack)

Splendor is a **systems layer** that makes agent systems more consistent to run
and reason about, without claiming to solve autonomy by itself, splendor
enforces the primitives.


---

## The Core Idea: Neuro-Symbolic by Construction

Splendor treats “neuro-symbolic” as a **runtime property**, not an architecture choice you bolt on later.

In Splendor, an agent loop is built from four cooperating parts—each with explicit interfaces and enforcement points:

- **Neural policies** decide under uncertainty: they map structured percepts to candidate actions using learned representations.
- **Symbolic structure** constrains and composes behavior: planners/solvers/rules express what must hold, what is allowed, and how to decompose tasks.
- **Verification at the boundary** mediates execution: before an action reaches the outside world (tools, services, devices), it passes through checks on safety, permissions, resources, and invariants.
- **Feedback/reward channels** close the loop: outcomes and evaluations are captured as first-class signals and routed back into the agent’s state and learning interfaces.

The point is simple: **learning provides generalization; symbolic structure
provides control; verification provides guarantees; feedback provides
adaptation**. Splendor’s job is to make these pieces interoperable and
enforceable at the runtime level, without prescribing a single model, planner,
or training method.


---

## Vision: Agents as First-Class Compute

Operating systems separate **kernel space** (enforced invariants) from **user space** (fast-changing applications). Splendor applies the same idea to autonomy: separate what must be **stable and governable** from what should be **iterable and experimental**.

### System space vs. AI space

- **System space** (the kernel): the enforceable primitives—**tenancy/isolation**, **resource limits**, **scheduling**, **action gating + verification**, **constraint enforcement**, **messaging**, and **audit/observability**.
- **AI space** (the agent): the changeable parts—**models**, **policies**, **planners/solvers**, **tools**, **reward/evaluation logic**, and domain code.

**Adapters** sit at the boundary: they translate environments into **structured
percepts**, expose **actuators/actions**, and attach **constraints and
verification**. This makes autonomy composable: teams can share adapters and
primitives while evolving their models and agent logic independently.


---

## Architecture

### Runs on top of Unix-based systems Splendor is a “kernel for AI” in the
architectural sense: it supplies the runtime primitives for agents, while **Unix
remains the OS**. Splendor runs in user space and leans on the host for
**drivers, filesystems, networking, and hardware access**. Concretely, the Rust
core manages **tenancy, state graphs, scheduling, messaging, and action
verification**, and delegates low-level device and I/O to the underlying system.

### Distributed by default

Splendor is designed to treat “one machine” as an implementation detail.

- **Multi-tenant isolation**: each tenant/agent runs inside an isolated runtime context with its own state graph, quotas, and policy boundaries.
- **Mobility + coordination**: agents communicate via structured messages and can be scheduled on different machines while retaining identity and state continuity.
- **Fleet feedback**: reward/feedback streams and traces can be aggregated across agents to support shared evaluation and learning—without dropping system-level constraints.
- **Boundary-aware safety**: actions are mediated at execution edges (tools/devices/services) through verification gates: permissions, invariants, and resource checks before side effects occur.


---

## The Primitives We Intend to Standardize

Splendor’s goal is to make agent-building look less like glue code and more like building on an OS.

### 1) Perception
- Perceptors (sensor + tool observation interfaces)
- Embeddings / representation stores
- Multi-modal encoders
- World-model and environment schemas

### 2) Policy & Learning
- Policy networks (pluggable)
- Reward functions + evaluators
- Value estimators / critics
- Feedback channels (human, automated, environment-derived)

### 3) Reasoning & Constraints
- Constraint solvers (hard/soft constraints)
- Planners (symbolic / hybrid)
- Rules and invariants (“never do X”, “always require Y”)
- Proof/trace artifacts where feasible

### 4) Execution
- Actuators (tool/action interfaces)
- State machines (structured control)
- Action verifiers (pre/post-conditions)
- Rollback / compensation patterns

### 5) Safety & Governance
- Guardrails as enforceable runtime objects (not just prompts)
- Alignment signals (first-class telemetry + reward shaping hooks)
- Kill switches / circuit breakers
- Audit logs and reproducibility primitives

### 6) Coordination & Distributed Systems
- Message passing (typed, traceable)
- Consensus & shared state mechanisms
- Resource allocation / scheduling (agent-aware)
- Multi-device identity, permissions, and trust boundaries

These primitives are meant to **augment** current AI systems—especially neural
nets—by adding structure, constraints, and operational guarantees.

---

## Why This Matters

### For researchers and engineers
Splendor targets the bottlenecks you hit when moving from demos to **persistent, deployed autonomy**:

- **Operational correctness**: a precise record of what ran, with what state, what feedback, and what constraints—so behavior is debuggable and reproducible.
- **Coordination at scale**: multi-agent, multi-tenant, multi-device execution with shared messaging, resource control, and consistent boundaries.
- **Verifiable execution edges**: explicit gating for actions and side effects (permissions, invariants, quotas), not post-hoc monitoring.
- **Standard primitives**: stable interfaces for percepts, actions, state, feedback, and constraints—so components can interoperate across teams and time.

If agents are going to run continuously and safely, they need an OS-like substrate for agent loops—not just higher-level frameworks.

### For everyone else
Today’s AI is impressive, but it’s often fragile when it has to act in the real world. Splendor focuses on the basics that make autonomous systems more dependable:

- **clear inputs and actions** (what the system can see and do),
- **hard safety boundaries** (what it must not do),
- **traceable decisions** (what happened and why),
- and **coordination across devices** without turning into a mess.

It doesn’t replace neural networks—it provides the runtime structure around them.


---

## Docs

**Go to Docs** → /docs

---

## FAQ

### Is Splendor a real OS kernel? Does it run on bare metal?

No. Splendor is a open-source “kernel” in the **runtime** sense: it defines and
enforces primitives for agent loops (state, feedback, action gates, tenancy). It
runs **on top of Unix-based systems** and uses the host OS for drivers,
filesystems, and networking. Bare-metal support is **not a near-term goal**.

### Why Rust?
The core runtime needs systems properties: **memory safety**, **performance**, and **concurrency control**, plus strong typing for critical boundaries like **isolation**, **resource limits**, **verification gates**, and **auditing**.

### Why interpreters too (e.g., Python)?
Agents need a flexible execution environment for model calls, tools, planners, and domain code. Splendor hosts **sandboxed interpreter instances** as managed compute, so researchers can iterate quickly while the Rust runtime enforces **limits, mediation, and traces**.

### Does Splendor replace existing agent frameworks?
No. Splendor is meant to **augment** them. Agent frameworks can keep providing agent logic (planners, tool selection, memory strategies, orchestration), while Splendor provides the **runtime substrate** beneath: standardized **adapters** for percepts/actuators, **kernel messaging/coordination**, **state graphs**, **feedback channels**, and **verification gates**.

Frameworks that integrate with Splendor do so by **targeting these primitives**—i.e., communicating through the kernel interfaces rather than bypassing them—so safety, tracing, and resource constraints remain enforceable.


### What does “multi-device” mean?
Agents can run across machines and exchange structured messages. State and identity can be carried across boundaries, while **tenancy, constraints, and action gates** remain enforceable across the fleet.

### What’s “system space vs AI space”?
**System space** is what must stay stable and enforceable (tenancy, scheduling, resource limits, verification, logging). **AI space** is what changes often (models, policies, planners, tools). **Adapters** connect the two with structured percepts/actions and attached constraints.

### What’s the end goal?
A runtime where **execution and alignment are coupled**: feedback channels, constraints, and verification gates are first-class parts of how agents act and adapt—not external patches added after deployment.


---

## Community

### Help design the blueprint If you work on **agent runtimes, neuro-symbolic
systems, verification, distributed systems, RL/reward modeling,
safety/alignment, or operating systems**, we’d love your contribution to
standardize the primitives that matter.

**Start a Conversation** → /contact  
**Join the Discussion** → /community  
**View on GitHub** → https://github.com/<org>/<repo>
