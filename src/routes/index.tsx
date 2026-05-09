import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/dashboard.html"
      title="NEXUS AI — Crisis Navigation Dashboard"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
