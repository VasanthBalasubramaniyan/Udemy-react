import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

function Popular() {
    return(
        <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="subtitle">Pick the best fit</p>

        <div className="popular__container">
            <div className="course-card">
                <img src={one} alt="one"></img>
                <h3>2024 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={two} alt="two"></img>
                <h3>Web Development Bootcamp 2024</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={three} alt="three"></img>
                <h3>Master UI/UX Designing using Figma</h3>
                <p>Col Steele</p>
                <p>3.5⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={four} alt="four"></img>
                <h3>Basic to Advance programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={two} alt="two"></img>
                <h3>Web Development Bootcamp 2024</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={two} alt="two"></img>
                <h3>Web Development Bootcamp 2024</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={two} alt="two"></img>
                <h3>Web Development Bootcamp 2024</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={three} alt="three"></img>
                <h3>Web Development Bootcamp 2024</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

        </div>
     </div>
    )
}

export default Popular