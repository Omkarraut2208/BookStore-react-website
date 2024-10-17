import book1 from './assets/images/hero-books/Rectangle8.svg'
import book2 from './assets/images/hero-books/Rectangle9.svg'
import book3 from './assets/images/hero-books/Rectangle10.svg'
import book4 from './assets/images/hero-books/Rectangle11.svg'
import book5 from './assets/images/hero-books/Rectangle12.svg'
import book6 from './assets/images/hero-books/Rectangle13.svg'
import book7 from './assets/images/hero-books/Rectangle14.svg'

function Herosection() {
    return (
        <section className="container-fluid" id='herosection'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 order-2 order-lg-1" id='info-div' >
                        <div className="hero-info">
                            <div className="heading">
                                <h1>Buy Your Favourite Book From Here</h1>
                            </div>
                            <div className="hero-para">
                                <p>Discover your next great read at BookBazaar! Whether you're into fiction, non-fiction, or academic books, we have something for every reader. Explore our vast collection and enjoy exclusive offers on bestsellers and new releases!</p>
                            </div>
                            <div className="offer-btn">
                                <button className="btn ">SEE OFFERS</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2" id='book-grid'>
                        <div className="hero-books">
                            <div className="row scatter-row1">
                                <div className="col-3">
                                    <img src={book1} alt='book1' className='img-fluid rounded' />
                                </div>
                                <div className="col-3">
                                    <img src={book2} alt='book2' className='img-fluid rounded' />
                                </div>
                                <div className="col-3">
                                    <img src={book3} alt='book3' className='img-fluid rounded' />
                                </div>
                                <div className="col-3">
                                    <img src={book4} alt='book4' className='img-fluid rounded' />
                                </div>
                            </div>
                            <div className="row scatter-row2">
                            <div className="col-3">
                                    
                                </div>
                                <div className="col-3">
                                    <img src={book5} alt='book5' className='img-fluid rounded' />
                                </div>
                                <div className="col-3">
                                    <img src={book6} alt='book6' className='img-fluid rounded' />
                                </div>
                                <div className="col-3">
                                    <img src={book7} alt='book7' className='img-fluid rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Herosection;