export type ISeries = Serie[];

interface Serie {
  title: string;
  disabled?: boolean;
  data?: Array<{ x: number; y: number }>;
}
