"use client";

import TextInput from "@/src/components/form/TextInput";
import BackButton from "@/src/components/ui/BackButton";
import ButtonWithIcon from "@/src/components/ui/ButtonWithIcon";
import Divider from "@/src/components/ui/Divider";
import { PATHS } from "@/src/constants/paths";
import { getFormattedMembers } from "@/src/lib/settings/getFormattedMembers";
import clsx from "clsx";
import { UserRoundX, RefreshCw, X, Copy, KeyRound, Trash2 } from "lucide-react";

export default function Page() {
  const members = getFormattedMembers();
  return (
    <div className="w-[92%] pt-6 md:w-[95%] lg:w-[92%] md:pt-10 mx-auto">
      <div className="flex flex-row gap-8 items-center justify-between">
        <BackButton path={PATHS.myRecipe} />
      </div>

      <div className="mt-2.5 mb-1.5">
        <Divider />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        {/* Members */}
        <section className="bg-mist-50 border border-gray-200 rounded-xl p-4">
          <h2 className="text-lg font-medium text-gray-800">Members</h2>
          <p className="text-xs text-gray-400">
            People who can view and edit your recipe and meal plans
          </p>
          <div className="mt-1.5 mb-2.5">
            <Divider />
          </div>
          <ul>
            {members.map((member) => {
              return (
                <li
                  key={member.id}
                  className="border-b border-gray-100 py-2 last:border-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex min-w-0 truncate">
                      <span className="text-lg font-bold text-gray-800 rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center shrink-0">
                        {member.name.charAt(0)}
                      </span>
                      <div className="ml-2">
                        {member.name}
                        {member.isCurrentUser && (
                          <p className="text-xs text-gray-400">You</p>
                        )}
                        {member.isPending && (
                          <p className="text-xs text-gray-400">Invited</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <span
                        className={clsx(
                          "text-xs font-medium px-2.5 py-0.5 rounded-lg",
                          member.badgeColor,
                        )}
                      >
                        {member.role}
                      </span>
                      {member.canResend && (
                        <>
                          <button className="text-gray-600 shrink-0 border border-gray-200 px-2 py-2 rounded-lg">
                            <RefreshCw className="size-4" />
                          </button>
                          <button className="text-gray-600 shrink-0 border border-gray-200 px-2 py-2 rounded-lg">
                            <X className="size-4" />
                          </button>
                        </>
                      )}
                      {member.canRemove && (
                        <button className="text-gray-600 shrink-0 border border-gray-200 px-2 py-2 rounded-lg">
                          <UserRoundX className="size-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Invite someone */}
        <section className="bg-mist-50 border border-gray-200 rounded-xl p-4">
          <h2 className="text-lg font-medium text-gray-800">Invite someone</h2>
          <p className="text-xs text-gray-400">
            Anyone with this link can join as a member
          </p>
          <div className="mt-1.5 mb-2.5">
            <Divider />
          </div>
          <div className="bg-[#eceae2]  px-2.5 py-5 rounded-lg flex justify-between items-center">
            <p className="text-xs text-gray-400">
              https://sample.app/signin/a8f3k2p9x1
            </p>
            <ButtonWithIcon
              name="Copy"
              icon={Copy}
              onClick={() => {}}
              className="text-xs"
              size="medium"
              variant="secondary"
            />
          </div>
        </section>

        {/* Password */}
        <section className="bg-mist-50 border border-gray-200 rounded-xl p-4">
          <h2 className="text-lg font-medium text-gray-800">Password</h2>
          <p className="text-xs text-gray-400">Change your login password</p>
          <div className="mt-1.5 mb-2.5">
            <Divider />
          </div>
          <TextInput
            id="current-password"
            name="Current Password"
            type="password"
          />
          <TextInput id="new-password" name="New Password" type="password" />

          <TextInput
            id="confirm-password"
            name="Confirm Password"
            type="password"
          />

          <div className="mt-2 flex justify-end">
            <ButtonWithIcon
              name="Update Password"
              icon={KeyRound}
              onClick={() => {}}
              className="text-xs"
              size="medium"
            />
          </div>
        </section>

        {/* Delete account */}
        <section className="bg-mist-50 border border-rose-400 rounded-xl p-4">
          <h2 className="text-lg font-medium text-gray-800">Delete account</h2>
          <p className="text-xs text-gray-400">
            Permanently delete your account and all associated data
          </p>
          <div className="mt-1.5 mb-2.5">
            <Divider />
          </div>

          <div className="mt-2 flex justify-end">
            <ButtonWithIcon
              name="Delete"
              icon={Trash2}
              onClick={() => {}}
              className="text-xs"
              size="medium"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
