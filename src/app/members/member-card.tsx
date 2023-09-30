import Link from "next/link"
import { cn } from "@/components/utils"
import { TMember } from "./members-data"

const MemberCard = ({ member }: { member: TMember }) => (
  <div
    className={cn(
      "gap-2 flex flex-col items-center justify-center p-10 bg-base-200 rounded-xl max-w-[400px]"
    )}
  >
    <img
      className="w-32 h-32 rounded-full"
      src={member.imagePath}
      alt={member.name}
    />
    <div className="text-xl font-bold">{member.name}</div>
    <div
      className="text-content font-bold text-xs text-center"
    >
      A.K.A.
    </div>
    <div className="text-xl font-bold">{member.login}</div>
      <div
        className={cn(
          "flex flex-wrap items-center justify-center mt-2 gap-1"
        )}
      >
      {member.roles.map((role, index) => {
        return (
          <span key={index} className="badge badge-primary rounded-full">
            {role}
          </span>
        )
      })}
      </div>
    <blockquote
      className="text-sm text-center bg-base-100 border-l-4 border-primary border-solid rounded-lg px-4 py-2 mt-2 font-semibold"
    >
      {member.description}
    </blockquote>
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
  </div>
)

export default MemberCard
