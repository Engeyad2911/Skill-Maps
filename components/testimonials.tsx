import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ronald Richards",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%82%D8%B7%D8%A9%20%D8%B4%D8%A7%D8%B4%D8%A9%202025-02-07%20141341-j1fTbv9C7Xb8UP9ohWOlpS3MUD74fU.png",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec massa aliqua.",
    },
    {
      name: "Wade Warren",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%82%D8%B7%D8%A9%20%D8%B4%D8%A7%D8%B4%D8%A9%202025-02-07%20141341-j1fTbv9C7Xb8UP9ohWOlpS3MUD74fU.png",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec massa aliqua.",
    },
    {
      name: "Jacob Jones",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%82%D8%B7%D8%A9%20%D8%B4%D8%A7%D8%B4%D8%A9%202025-02-07%20141341-j1fTbv9C7Xb8UP9ohWOlpS3MUD74fU.png",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis donec massa aliqua.",
    },
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-center text-gray-600 mb-12">What our student say about us</p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

