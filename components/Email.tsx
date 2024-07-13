import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function Email() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 relative">
      <Input type="email" placeholder="Email" className="border-black rounded-none w-[40vw]" />
      <Button type="submit" className="bg-transparent text-black absolute right-0"><ArrowRight strokeWidth={1.2} /></Button>
    </div>
  )
}
