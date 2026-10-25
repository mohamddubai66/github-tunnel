// --- GitHub Tunnel feature facade ---
// A disposable Windows Cloud Session (GitHub Actions runner + Tailscale relay), wired up
// to feel like a native MLMVPN Connector / Exit Node.
//
// This module is the public surface for the rest of the stack.  All real work is
// delegated to the specialised modules under ./ (gt-*.js).

"use strict";

module.exports = {
  // Core session lifecycle
  ...require("./gt-core"),

  // GitHub / Actions interaction
  ...require("./gt-github"),

  // Network / Tailscale / relay
  ...require("./gt-net"),

  // Crypto / secrets
  ...require("./gt-crypto"),
  ...require("./gt-secret"),
  ...require("./gt-session-crypto"),

  // Quota / slot management
  ...require("./gt-quota"),
  ...require("./gt-slots"),
  ...require("./gt-allocator"),

  // Speed / verification
  ...require("./gt-speed"),
  ...require("./gt-speedtest"),
  ...require("./gt-verify"),

  // Guard / security
  ...require("./gt-guard"),

  // Deploy / broker
  ...require("./gt-deployer"),
  ...require("./gt-broker"),
  ...require("./gt-broker-deploy"),

  // Accounts / config / cleanip
  ...require("./gt-accounts"),
  ...require("./gt-config"),
  ...require("./gt-cleanip"),

  // Engine / dataplane / workflow
  ...require("./gt-engine"),
  ...require("./gt-dataplane"),
  ...require("./gt-workflow-template"),
};
