import Link from "next/link"
import { cn } from "@/components/utils"
import { TMember } from "./members-data"
import React, { useState } from "react"

const MemberCard = ({ member }: { member: TMember }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const ArrowIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg
      className={`transform transition-transform ${
        isExpanded ? "rotate-180" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="20"
      height="20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )

  return (
    <div
      className={cn(
        "gap-2 flex flex-col items-center justify-center p-10 bg-base-200 rounded-xl w-full sm:w-1/2 md:w-1/3 self-start"
      )}
    >
      <img
        className="w-32 h-32 rounded-full object-cover"
        src={member.imagePath}
        alt={member.name}
      />
      <div className="text-xl font-bold">{member.name}</div>
      <div className="text-xl font-bold">{member.login}</div>
      <div className="badge badge-primary rounded-full font-bold">
        {member.role}
      </div>
      <div className="">{member.description}</div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-400 flex items-center justify-end"
        >
          <ArrowIcon isExpanded={isExpanded} />
        </button>
      </div>
      {isExpanded && (
        <>
          <div className="flex flex-wrap items-center justify-center mt-2">
            {member.links.map((link, index) => (
              <Link
                key={index}
                className="btn btn-primary btn-sm m-1 rounded-full"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center mt-2">
            {member.stat?.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center m-1"
              >
                <div className="text-sm">{stat.name}</div>
                <div className="w-32 h-2 bg-base-300 rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${(stat.value / stat.max) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default MemberCard
