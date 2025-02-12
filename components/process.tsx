import { Monitor, GraduationCap, Briefcase } from "lucide-react"

export function Process() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">01. Learn</h3>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec massa aliqua.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">02. Graduate</h3>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec massa aliqua.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">03. Work</h3>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec massa aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

