import { Book, GraduationCap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Stats() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          لماذا نحتاج إلى SkillsMap؟
          <span className="text-primary">📊</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-primary text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Book className="w-12 h-12" />
                <span className="text-3xl font-bold">30%</span>
              </div>
              <p>من الأشخاص يمتلكون مهارات، ولكنهم غير قادرين على العثور على وظائف مناسبة.</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-12 h-12" />
                <span className="text-3xl font-bold">70%</span>
              </div>
              <p>من الشباب في مصر لديهم وقت لتعلم مهارات جديدة، لكن لا يعرفون من أين يبدأون.</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-white md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-12 h-12" />
                <span className="text-3xl font-bold">40%</span>
              </div>
              <p>من الناس يريدون التعلم، لكنهم يواجهون صعوبة في العثور على الموارد المناسبة.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

