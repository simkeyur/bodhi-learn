// Splits a worked explanation into steps a child can reveal one at a time.
// Sentences end with ". " followed by a capital, a digit, a fraction or a bracket; decimals like 0.5 never split.
export function explainSteps(text: string): string[] {
  return text.split(/(?<=[.!?])\s+(?=[A-Z0-9{($[])/).map((s) => s.trim()).filter(Boolean);
}
