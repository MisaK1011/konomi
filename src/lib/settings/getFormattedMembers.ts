import { members } from "../../mocks/members";
import { getMemberBadgeColor } from "./getMemberBadgeColor";

export function getFormattedMembers() {
  const formattedMembers = members.map((member) => ({
    ...member,
    badgeColor: getMemberBadgeColor(member.role),
    canRemove: member.role === "member" && !member.isPending,
    canResend: member.isPending,
  }));

  return formattedMembers;
}
