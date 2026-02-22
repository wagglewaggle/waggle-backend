export function fillTemplate(template: string, data: Record<string, any>): string {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return data[key] || match;
  });
}
