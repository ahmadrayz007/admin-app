import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuedInfo/FeaturedInfo"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart />
        </div>
    )
}
