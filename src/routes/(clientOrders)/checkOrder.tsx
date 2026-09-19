import { createFileRoute } from "@tanstack/react-router";
import CheckOrder from "../../components/clientOrders/CheckOrder";

export const Route = createFileRoute("/(clientOrders)/checkOrder")({
  validateSearch: (search: Record<string, unknown>) => ({
    mesaId: typeof search.mesaId === "string"
      ? search.mesaId
      : undefined,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <CheckOrder />;
}
