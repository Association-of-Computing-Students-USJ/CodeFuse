import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/execute
 *
 * Placeholder API route for secure code execution.
 *
 * Future implementation should:
 * 1. Validate and sanitize the incoming code payload.
 * 2. Forward the code to an isolated sandbox environment
 *    (e.g., Docker container, Firecracker VM, or a third-party
 *    service such as Judge0 / Piston).
 * 3. Return the sandbox output (stdout, stderr, exit code) to the client.
 *
 * SECURITY NOTE: Never execute user-supplied code directly on the
 * server process. Always use a sandboxed environment with strict
 * resource and network limits.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.code !== "string") {
    return NextResponse.json(
      { error: "Invalid request body. Expected { code: string }." },
      { status: 400 }
    );
  }

  // TODO: Integrate with a secure code-execution sandbox here.
  return NextResponse.json(
    {
      message: "Code execution endpoint is not yet implemented.",
      received: { language: body.language ?? "unknown", codeLength: body.code.length },
    },
    { status: 501 }
  );
}
