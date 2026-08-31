import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler((server) => {
  server.tool(
    "termux_status",
    "Return Termux / Android host status stub (extend with real Termux APIs or ADB)",
    {},
    async () => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                platform: "termux",
                status: "ready",
                note: "P0 skeleton — wire to termux-api / termux-exec or remote ADB",
                tools: ["termux_status", "termux_run", "termux_pkg"],
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "termux_run",
    "Run a shell command in Termux context (stub — implement via termux-exec or SSH/ADB bridge)",
    {
      command: z.string().describe("Shell command to execute"),
      timeout_ms: z.number().int().min(1000).max(120000).optional().default(30000),
    },
    async ({ command, timeout_ms }) => {
      return {
        content: [
          {
            type: "text",
            text: `STUB termux_run: would execute '${command}' (timeout ${timeout_ms}ms). Wire to Termux API or remote host.`,
          },
        ],
      };
    }
  );

  server.tool(
    "termux_pkg",
    "List or query Termux packages (stub)",
    {
      action: z.enum(["list", "search", "info"]).default("list"),
      query: z.string().optional(),
    },
    async ({ action, query }) => {
      return {
        content: [
          {
            type: "text",
            text: `STUB termux_pkg ${action}${query ? ` query=${query}` : ""}. Implement via pkg / apt in Termux.`,
          },
        ],
      };
    }
  );
});

export { handler as GET, handler as POST, handler as DELETE };
