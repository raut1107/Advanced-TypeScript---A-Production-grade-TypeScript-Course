type Action = "READ" | "WRITE";
type Target = "order" | "customer";

type EndpointName = `${Lowercase<Action>}${Capitalize<Target>}`;

type ApiService = Record<EndpointName, (...args: any[]) => any>;

const apiEndpoints = {
  readOrder: () => Promise.resolve({ id: 101, total: 250 }),
  readCustomer: () => Promise.resolve({ name: "Charlie" }),
  writeOrder: (order: { id: number; total: number }) => Promise.resolve(),
  writeCustomer: (customer: { name: string }) => Promise.resolve(),
} satisfies ApiService;

