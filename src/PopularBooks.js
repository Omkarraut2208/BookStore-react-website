// Import CSS file
import './PopularBooks.css';
import { useState } from 'react';

// Import popular books data
import { galleryData } from './DataBook';

function PopularBooks() {
    const [activeButton, setActiveButton] = useState('all');

    const handleFilterChange = (category) => {
        setActiveButton(category);
    };

    // Filter gallery functionality
    const filterItems = activeButton === 'all'
        ? galleryData
        : galleryData.filter((item) => item.category === activeButton);

    return (
        <section className="container-fluid" id="popularbook-section">
            <div className="container">
                <div className="popularbook-heading text-center">
                    <p>SOME QUALITY ITEMS</p>
                    <h1>Popular Books</h1>
                </div>

                <div className="filter-buttons">
                <button
                    className={activeButton === 'all' ? 'active' : ''}
                    onClick={() => handleFilterChange('all')}
                >
                    All
                </button>
                <button
                    className={activeButton === 'Business' ? 'active' : ''}
                    onClick={() => handleFilterChange('Business')}
                >
                    Business
                </button>
                <button
                    className={activeButton === 'Technology' ? 'active' : ''}
                    onClick={() => handleFilterChange('Technology')}
                >
                    Technology
                </button>
                <button
                    className={activeButton === 'Adventure' ? 'active' : ''}
                    onClick={() => handleFilterChange('Adventure')}
                >
                    Adventure
                </button>
                <button
                    className={activeButton === 'Romantic' ? 'active' : ''}
                    onClick={() => handleFilterChange('Romantic')}
                >
                    Romantic
                </button>
                <button
                    className={activeButton === 'Fictional' ? 'active' : ''}
                    onClick={() => handleFilterChange('Fictional')}
                >
                    Fictional
                </button>
            </div>

            <div className="gallery row">
                {filterItems.map(({ name, writer, price, image }) => {
                    return (
                        <div className="gallery-item col-12 col-md-6 col-lg-3" key={name}>
                            <div className="popular-image">
                                <img src={image} alt="book cover" className='img-fluid' />
                            </div>
                            <div className="popularbook-info">
                                <h4>{name}</h4>
                                <div><small>{writer}</small></div>
                                <h5><span>{price}</span></h5>
                            </div>
                        </div>
                    );
                })}
            </div>
            </div>

            
        </section>
    );
}

export default PopularBooks;
