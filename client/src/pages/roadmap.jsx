import Footer from "../components/footer/footer";
import { OtherNav } from "../components/navbar/navbar";
import propStar from '../assets/icons/propella Star.svg'
import Button from "../components/button/button";
import '../assets/styles/roadmap.css'
export default function Roadmap() {

    const roadmapjson = [
        {
            year: "Year 2021",
            month: "November - December",
            detail: `feasibility study and market research
            about Propella product within Emab and Banx plaza Abuja.`,
            imgUrl:"https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2022",
            month: "January - March",
            detail: `Co founder search and formation of proppella culture and vision.`,
            imgUrl:"https://images.unsplash.com/photo-1606586740500-a98d83e65d1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2023",
            month: "January ",
            detail: `Development of propella proto type`,
            imgUrl:"https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2023",
            month: "February - March",
            detail: `Hired a Legal Team`,
            imgUrl:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2023",
            month: "April",
            detail: `Employed Emab & Banex represntative to engage vendors`,
            imgUrl:"https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2023",
            month: "May ",
            detail: `Negotiations with Emab for an exclusive license to be part of propella`,
            imgUrl:"https://images.unsplash.com/photo-1590232918080-66313d51bd9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2023",
            month: "July ",
            detail: `Exclusive license secured for Emab plaza, Banex agreed on our operation snd potential exclusive license deal`,
            imgUrl:"https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2023",
            month: "August ",
            detail: `Registration agreed on our operation and potential exclusive license deal`,
            imgUrl:"https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            year: "Year 2024",
            month: "January ",
            detail: `Operation to commence by 2024`,
            imgUrl:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <>
            <OtherNav />

            <section className="roadmap-Page">




                <div className="roadmap-Wrap">


                    <div className="roadmap-textArea">
                        <div className="roadmap-WrapText">
                            <div className="lefttext">
                                <h1>
                                    The <br /> roadmap <br /> for propella
                                </h1>
                                {/* <div className="roadmap-BttnWrap">
                                    <Button className='secondary-bttn'>
                                        Get started
                                    </Button>
                                </div> */}
                            </div>

                            <div className="subtext-simLayout">
                                <p>
                                    a short story on propella and any other story dim fit or relating to the story of propella.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="roadmap-cards">
                {
                    roadmapjson.map((e)=>{
                        return(
                            <div className="card ca-1" style={{
                                backgroundImage: `url(${e.imgUrl})`
                            }}>
                            <div className="cardOverlay"></div>
                            <div className="header">
                                <p> {e.year}</p>
                                <h2 className="roadYear">{e.month}</h2>
                                <p className="card_info">
                                    {e.detail}
                                </p>
                            </div>
                        </div>
                        )
                    })
                }
            </section>

            <section className="roadmap-bigtext">
                <div className="btext-wrap">
                    <h1>
                        We are built <br /> to <span className="bigColor">stand out</span> from the rest
                    </h1>
                </div>
            </section>

            <Footer />
        </>
    )
}