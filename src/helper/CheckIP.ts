function isIPv4(query: string) {
  const ipv4Regex =
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d|0)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d|0)){3}$/;
  return ipv4Regex.test(query);
}

function isIPv6(query: string) {
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::1)$/;
  return ipv6Regex.test(query);
}

export function isIP(query: string) {
  return isIPv4(query) || isIPv6(query);
}

export function isDomain(query: string): boolean {
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/;
  return domainRegex.test(query);
}
