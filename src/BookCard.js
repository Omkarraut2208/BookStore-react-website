

function BookCard(props) {
    return (
        <>
            <div class="book-card">
                <img src={props.imgurl} alt="" class="img-fluid" />
                <div class="card-overlay"></div>
                <div class="card-content">
                    <div className="book-icon">
                    <i>{props.icon}</i>
                    </div>
                    <div>
                    <h5 class="card-title">{props.category}</h5>
                    <p class="card-subtitle">Up to {props.discount} OFF</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BookCard;