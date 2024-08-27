export function shortenAddress(address, chars = 4) {
  const start = address.slice(0, chars + 2); // 처음 2자리는 '0x'를 포함하므로 2를 더함
  const end = address.slice(-chars);
  return `${start}...${end}`;
}
