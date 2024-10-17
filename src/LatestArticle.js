import './LatestArticle.css';
import { lettestArticleData } from './DataBook';

// import icon
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
function LatestArticle() {
    return (
        <section className="container-fluid" id="LatestAtricle">
            <div className="container latest-article-container">
                <div className='LatestArticle-title'>
                    <p>Read Our Article</p>
                    <h1>Latest Article</h1>
                </div>

                <div className='row latest-article-content mx-md-auto'>
                    {
                        lettestArticleData.map(({ title, image, titLink, date, inspiration, fbLink, instLink, twitaLink }, index) => {
                            return (
                                <div className='col-sm-12 col-lg-4 latest-article' key={index}>
                                    <div className='article-image'>
                                        <img src={image} className='img-fluid' alt='' />
                                    </div>
                                    <div className='article-info'>
                                        <h5>{date}</h5>
                                        <a href={titLink} className='text-dark text-decoration-none'>
                                            <h3>{title}</h3>
                                        </a>
                                    </div>
                                    <div className='latest-article-social'>
                                        <p>{inspiration}</p>
                                        <div className='article-social'>
                                            <a href={fbLink}><ImFacebook /></a>
                                            <a href={instLink}><FiInstagram /></a>
                                            <a href={twitaLink}><RiTwitterXFill /></a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className='latest-article-btn'>
                    <a href='*' className='custome-btn'>
                        Read all Articles <span><BsArrowRight /></span>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default LatestArticle;