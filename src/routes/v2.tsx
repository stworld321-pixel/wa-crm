import { createFileRoute } from "@tanstack/react-router";
import { LandingV2 } from "@/components/landing-v2/landing-v2";

export const Route = createFileRoute("/v2")({
  head: () => ({
    meta: [{ title: "Landing v2 preview" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: LandingV2,
});
