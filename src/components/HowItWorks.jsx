import Card from "./Card"
import { flower, sun, tag, kalash, subscribe, flowerBasket, delivery } from "../assets/icons/icons";
import TransparentCard from "./TransparentCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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

    gsap.registerPlugin(ScrollTrigger);

    const featureSectionRef = useRef();

    useGSAP(() => {
        gsap.fromTo(
            ".feature-card",
            { y: 50, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: featureSectionRef.current,
                start: "top 40%",
                toggleActions: "play reverse play reverse",
            },
            }
        );
    }, { scope: featureSectionRef });  

  return (
    <>
    <div ref={featureSectionRef} className="flex flex-col gap-20 pt-30 px-25" style={{fontFamily:"var(--font-body)"}}>
        <div className="h-[35%] flex justify-evenly">
            {features.map((item) => {
                return <Card image={item.image} title={item.title} key={item.id} />
            })}     
        </div>
        <div className="text-center flex flex-col gap-3">
            <h1 className="text-2xl font-semibold" style={{fontFamily:"var(--font-heading)"}}>How It Works</h1>
            <div className="flex justify-center gap-15">
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
