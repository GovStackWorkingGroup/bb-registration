---
description: >-
  This section will highlight important requirements or describe any additional
  cross-cutting requirements that apply to this Building Block.
---

# 5 Cross-Cutting Requirements

The cross-cutting requirements described in this section are an extension of the cross-cutting requirements defined in the Architecture specification document ([here](https://govstack.gitbook.io/specification/architecture-and-nonfunctional-requirements)) and Security requirements ([here](https://govstack.gitbook.io/specification/building-blocks/security-requirements)). This section will highlight important requirements or describe any additional cross-cutting requirements that apply to this Building Block.

**Inclusion issues** - Multiple languages, assisted model, differently-abled people, etc.

The cross-cutting requirements described in this section are an extension of the cross-cutting requirements defined in the [Architecture specification](https://govstack.gitbook.io/specification/architecture-and-nonfunctional-requirements) and [Security requirements](https://govstack.gitbook.io/specification/security-requirements). This section will highlight important requirements or describe any additional cross-cutting requirements that apply to this Building Block.

**Secure ingress and egress access mechanisms** (Information Mediator and API gateway)

Egress, in the world of networking, implies traffic that exits an entity or a network boundary, while Ingress is traffic that enters the boundary of a network. Private networks here refer to resources inside the network boundary of a data center or cloud environment and its IP space is completely under the control of an entity that operates it.

## 5.1 Overarching Requirements <a href="#docs-internal-guid-5b083c0e-7fff-0396-fba2-8a081b3bbff8" id="docs-internal-guid-5b083c0e-7fff-0396-fba2-8a081b3bbff8"></a>

This section describes Registration Building Block requirements that must be fulfilled in all components.

| **REQ-#** | **Requirement**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | **Type** |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| REQ-2     | <p>System audit log functionality</p><ul><li>The system must log all user activity in the system.</li><li>User action log is visible for admin users.</li><li>By default user action log is stored for 1 year after which the system will delete the log automatically. The storage length is configurable in rules engine.</li></ul><p><br></p><p><strong>IDENTIFY</strong>: Each building block MUST implement access and authorization audit, logging, tracing, and tracking with alerts (minimally proxied or implemented through the API Management and Gateway services).</p><p><br></p><p>See detailed Audit logging requirements in the <a href="https://docs.egovstack.net/v1.1.0/Security_Requirements_v1.1.0.pdf">Security Requirements specification</a>.</p> | Required |
| REQ-3     | <p>Each building block MUST implement the ability to provision, deprovision and manage Identities and access rights (this may or may not be centralized for the whole architecture as a unified provisioning process).</p><p><br></p><p>See the <a href="https://govstack.gitbook.io/specification/building-blocks/security-requirements">Security Requirements specification</a>.</p>                                                                                                                                                                                                                                                                                                                                                                                    | Required |
