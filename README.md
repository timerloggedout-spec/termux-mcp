# termux-mcp (P0)

Vercel-hosted Model Context Protocol server for **Termux / Android agentic ops**.

Parallel to the `gh*` MCP stack (github-mcp-server, gh-mcp, gh-aw-mcpg). Primary objective: give LLM agents a remote, auth-ready MCP endpoint for Termux-side actions without requiring local stdio on every host.

## Deploy (Vercel)

1. Connect this repo to Vercel (or use `vercel` CLI).
2. Enable **Fluid Compute** for efficient idle/burst MCP traffic.
3. Deploy. Endpoint: `https://<project>.vercel.app/mcp` (or `/api/server` depending on rewrite).

Docs: https://vercel.com/docs/mcp/deploy-mcp-servers-to-vercel

## Tools (stubs — extend)

| Tool | Purpose |
|------|---------|
| `termux_status` | Host / Termux readiness |
| `termux_run` | Shell command bridge (wire to termux-exec / SSH / ADB) |
| `termux_pkg` | Package list/search/info |

## MCP client config

```json
{
  "mcpServers": {
    "termux": {
      "url": "https://your-deployment.vercel.app/mcp"
    }
  }
}
```

## Related

- Upstream gh stack forks: `gh-aw_fork`, `gh-aw-mcpg_fork`, `gh-mcp_fork`, `gh_mcp_server_fork`
- Sibling: [android-mcp](https://github.com/timerloggedout-spec/android-mcp)
- Monorepo context: [termux-monorepo](https://github.com/timerloggedout-spec/termux-monorepo)

## License

MIT
