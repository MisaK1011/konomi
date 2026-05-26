export function getMemberBadgeColor(role: string) {
  return role === "owner"
    ? "bg-blue-100 text-blue-800"
    : "bg-gray-100 text-gray-800";
}
