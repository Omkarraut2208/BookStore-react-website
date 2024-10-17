import img1 from './assets/images/topseller/blog-3.png';
import img2 from './assets/images/topseller/blog-12.jpeg';
import img3 from './assets/images/topseller/blog-10.jpeg';
import img4 from './assets/images/topseller/blog-13.png';
// backgound image
import backimg from './assets/images/Backgound/backgoundbookimg.webp';
import BookCard from './BookCard';
import { FaHeart, FaEarthAfrica, FaMicrophone, FaPuzzlePiece } from "react-icons/fa6";
function TopBook() {
    return (
        <section className="container-fluid">
            <div className="container">
                <div className="topbook-info text-center">
                    <div className="topbook-title">
                        <h1>Top Book Categories</h1>
                    </div>
                    <div className="topbook-para">
                        <p>Explore our diverse range of categories and embark on a reading journey that suits your mood, passion, or curiosity.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="best-book">
                            <div className="bg-gray">
                                <img src={backimg} alt="" class="img-fluid" />
                                <div class="book-card-overlay"></div>
                                <div className='book-card-content'>
                                    <div className="best-book-info text-center">
                                        <p>
                                            up to 40% OFF
                                        </p>
                                        <h4>
                                            Bestselling Book
                                        </h4>
                                        <p>
                                            Explore our extensive collection of textbooks, workbooks, novels, and more. From preschool to post-grad, we have books for every age and academic level.
                                        </p>
                                        <button className="mx-auto">READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="row mt-4 book-category">
                            <div className="col-12 col-lg-6">
                                <BookCard
                                    icon={<FaHeart />}
                                    imgurl={img1}
                                    category="Fiction Books"
                                    discount="40%"
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <BookCard
                                    icon={<FaPuzzlePiece />}
                                    imgurl={img2}
                                    category="School Books"
                                    discount="60%"
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <BookCard
                                    icon={<FaEarthAfrica />}
                                    imgurl={img3}
                                    category="Non-Fiction Books"
                                    discount="30%"
                                />
                            </div>
                            <div className="col-12 col-lg">
                                <BookCard
                                    icon={<FaMicrophone />}
                                    imgurl={img4}
                                    category="SF & Fantasy Books"
                                    discount="20%"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TopBook;