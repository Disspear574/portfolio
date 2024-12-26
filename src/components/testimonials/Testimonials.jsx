import './testimonials.css'

import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
 return (
    <section>
      <h5>Review from client</h5>
      <h2>Testmonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
         delay: 500,
         // disableOnInteraction: false
     }}
      >
         {
      data.map(({id, image, name, review}) => {
         return (
            <SwiperSlide key={id} className="client">
               <div className="client__avatar">
                  <img src={image} alt="" />
               </div>
               <h5 className="client__name">{name}</h5>
               <div className="client__review">
                  <p>{review}</p>
               </div>
            </SwiperSlide>
              )
            })
         }
      </Swiper>
    </section>
 )
}

export default Testimonials

const data = [
   {
      id: 1,
      image: AVA1,
      name: "Tina Shiw",
      review: "Imaginary Cloud delivered the project on time and to the client expectations. The service provider ensured excellent project management and communication via email and virtual meetings. Their skill set, proactivity, and accommodation approach were key elements of their work."
   },
   {
      id: 2,
      image: AVA2,
      name: "Roberto Walle",
      review: "Thanks to help, the new dashboard was completed on time. As a result, the client notices an increase in terms of session time. The team seamlessly adapted to the clients workflow, allowing for a smooth and collaborative experience. They were also accessible, skilled, amd reliable."
   },
   {
      id: 3,
      image: AVA3,
      name: "Elon Mask",
      review: "The web app is currently under the final testing stages, but has already received positive feedback from the client. The team tracks and reports their progress via Google Sheets in real time. Overall, the team consists of highly-qualified experts that deliver quality results."
   },
   {
      id: 4,
      image: AVA4,
      name: "Brida Plumer",
      review: "Development and coding work is efficient and reliable. Using Slack and Jira as their main tools, Imaginary Cloud leads a communicative and proactive process. The Client also highly praises their ability to commit to their promises and deliver upon them."
   },
]