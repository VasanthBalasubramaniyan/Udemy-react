import sale from "../assets/images/sale-image.jpg"

function Sale() {
    return(
        <div className="sale-image">
        <img src={sale} alt="Sale Image"></img>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top courses for 499. Just one day to save but lifetime to learn</p>
        </div>
     </div>
    )
}

export default Sale