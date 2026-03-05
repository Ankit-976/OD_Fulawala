import Card from "./Card"
import { flower, sun, tag, kalash, subscribe, flowerBasket, delivery } from "../assets/icons/icons";
import TransparentCard from "./TransparentCard";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


const HowItWorks = () => {
    const features = [
        {
            id: 1,
            image: flower,
            title: "Daily Fresh Flowers",
        },
        {
            id: 2,
            image: sun,
            title: "Early Morning Delivery",
        },
        {
            id: 3,
            image: tag,
            title: "Affordable Plans Available",
        },
        {
            id: 4,
            image: kalash,
            title: "Perfect for Pooja & Temples",
        }
    ]
    const working = [
        {
            id: 1,
            image: subscribe,
            title: "Subscribe",
        },
        {
            id: 2,
            image: flowerBasket,
            title: "We Prepare Fresh Flower",
        },
        {
            id: 3,
            image: delivery,
            title: "Delivered Before 8 AM Daily",
        }
    ]
    
    // gsap.registerPlugin(ScrollTrigger);

    // const featureSectionRef = useRef();

    // useGSAP(() => {
    //     gsap.fromTo(
    //         ".feature-card",
    //         { y: 50, opacity: 0 },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 0.9,
    //             // stagger: 0.2,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: featureSectionRef.current,
    //                 start: "top 60%",
    //                 toggleActions: "play reverse play reverse",
    //             },
    //         }
    //     );
    //     gsap.fromTo(
    //         ".workingText",
    //         { opacity: 0 },
    //         {
    //             opacity: 1,
    //             duration: 1,
    //             // delay: -1,
    //             duration: 0.9,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: featureSectionRef.current,
    //                 start: "top 35%",
    //                 toggleActions: "play reverse play reverse",
    //             },
    //         }
    //     );
    //     gsap.fromTo(
    //         ".working-Cards",
    //         { opacity: 0 },
    //         {
    //             opacity: 1,
    //             stagger: 0.5,
    //             // delay: 1.1,
    //             duration: 3,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: featureSectionRef.current,
    //                 start: "top 30%",
    //                 toggleActions: "play reverse play reverse",
    //             },
    //         }
    //     )
    // }, { scope: featureSectionRef });  ref={featureSectionRef}

  return (
    <>
    <div  className="flex h-fit flex-col gap-20 lg:pt-30 py-20 lg:px-25" style={{fontFamily:"var(--font-body)"}}>
        <div className="lg:h-[35%] px-5 gap-8 grid grid-cols-2 lg:flex lg:justify-evenly lg:flex-wrap">
            {features.map((item) => {
                return <Card image={item.image} title={item.title} key={item.id} />
            })}     
        </div>
        <div className="text-center flex flex-col lg:gap-3">
            <h1 className="workingText lg:text-2xl text-xl font-semibold" style={{fontFamily:"var(--font-heading)"}}>How It Works</h1>
            <div className="flex justify-center flex-wrap lg:gap-15 gap-10 px-10">
                {working.map((item) => {
                    return <TransparentCard image={item.image} title={item.title} key={item.id} id={item.id}/>
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default HowItWorks
