import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Category images 
  const categoryImages = {
    'Evening Wear': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ohhmymy.com%2Fwp-content%2Fuploads%2F2016%2F04%2Fclassy-evening-gowns.jpg&f=1&nofb=1&ipt=eadf4443c655e3e9c3e3bf23aec36d61594066f7de2d271bd30b73ac7f48a5a3&ipo=images',
    'Outerwear': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F5f%2F66%2F64%2F5f6664cffef8b581f02bbe8dab95bfbe.jpg&f=1&nofb=1&ipt=aedda07682d625eeb184ae499e317c95338097800069f5a96e54a8eafcf97ee9&ipo=images',
    'Bottoms': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2F7n9J7X3HTI29Bf3IwASP0pnteJk%2Ffit-in%2F1024x1024%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%2F2023%2F03%2F23%2F964%2Fn%2F1922564%2F9e444a90641ccded620672.76106922_Screen_Shot_%2Fi%2FBest-Bottoms-For-Women.png&f=1&nofb=1&ipt=1979c37b3b230c8a0c151940d8c2057d4c8fd1d9f613d1dad78dcd66ec1f0adc&ipo=images',
    'Skirts': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F6811060%2Fr%2Fil%2F61a269%2F1440511322%2Fil_fullxfull.1440511322_linr.jpg&f=1&nofb=1&ipt=31b7f62ac5374b7d1314317aa3bc6f10e990e2380e2315f53b2d862dd2e649cf&ipo=images',
    'Jackets': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images.prettylittlething.com%2F6%2F4%2F7%2F0%2F6470c9c8409fd36231217ba90401451183803cf6_clp8999_main.jpg&f=1&nofb=1&ipt=d6c8c15c24a7ee99ed28898f2574459ddeaf173be200712ac283f19a06cfaf13&ipo=images',
    'Tops': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F19162967%2Fr%2Fil%2Feef68d%2F2264975832%2Fil_fullxfull.2264975832_i8tl.jpg&f=1&nofb=1&ipt=fbf8f5b1be05df34967b834d730fbacf7da1c746288bf1c3f75a28c6e37d0a38&ipo=images'
  };

  // Carousel Images with additional metadata
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const featuredImages = [
    {
      url: 'https://i.pinimg.com/originals/93/43/39/934339dce5096906e2537c129180103c.gif',
      width: 1920,
      height: 650
    },
    {
      url: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/17393c144016253.6284e6ee54fd9.gif',
      width: 1920,
      height: 650
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fcc%2Fb3%2F4f%2Fccb34f51bba6597deec3bf36ed654315.gif&f=1&nofb=1&ipt=5cda4edc34f41aae2f0d2473b20600e798fbe4e0ce5517145b18c0f6cd2be4eb&ipo=images',
      width: 1920,
      height: 650
    },
    {
      url: 'https://img.ltwebstatic.com/images3_ccc/2023/04/14/1681463235918428e4fffe3b4f3d405efefc75ed47.gif',
      width: 1920,
      height: 650
    }
  ];

  // Carousel Effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % featuredImages.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [featuredImages.length]);

  // Rest of the existing useEffects remain the same
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCategoryIndex((prevIndex) => 
        (prevIndex + 1) % categories.length
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [categories.length]);

  useEffect(() => {
    const dummyProducts = [
      { 
        id: 1, 
        name: 'Ethereal Blush Dress', 
        price: 49.99, 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lulus.com%2Fimages%2Fproduct%2Fxlarge%2F3099630_391492.jpg%3Fw%3D560&f=1&nofb=1&ipt=2e309217a03dcd018d699d6be875e98ae41b8e5d545f4bf0abf25cf447e6c67c&ipo=images',
        category: 'Evening Wear',
        isNewArrival: true,
        isTrending: false
      },
      { 
        id: 2, 
        name: 'Classic Denim Jacket', 
        price: 79.99, 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F92%2Fc7%2F34%2F92c7347bdf8072a464471a9b646a580b.jpg&f=1&nofb=1&ipt=378e59bc10d86d018e615e68ca7e185f0f92d9ecd273067202d87270ea324094&ipo=images',
        category: 'Outerwear',
        isNewArrival: false,
        isTrending: true
      },
      { 
        id: 3, 
        name: 'Silk Palazzo Pants', 
        price: 89.99, 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.perniaspopupshop.com%2Fcatalog%2Fproduct%2Fr%2Fr%2FRRKC112202_1.jpg%3Fimpolicy%3Ddetailimageprod&f=1&nofb=1&ipt=67a112998063d4e53a3d9a8edc6ede4d6e50b4437300996597e0d22a0e9bd8a5&ipo=images',
        category: 'Bottoms',
        isNewArrival: true,
        isTrending: true
      },
      { 
        id: 4, 
        name: 'Bohemian Maxi Skirt', 
        price: 59.99, 
        image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.shein.com%2Fimages%2Fshein.com%2F201605%2F1464071200281472125.jpg&f=1&nofb=1&ipt=5d4f699fcf2cb7915cfb6488a79a87d8f2e75697fc07571c17d999de2a3314e7&ipo=images',
        category: 'Skirts',
        isNewArrival: true,
        isTrending: false
      },
      { 
        id: 5, 
        name: 'Chic Blazer', 
        price: 99.99, 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lulus.com%2Fimages%2Fproduct%2Fxlarge%2F2998480_580282.jpg&f=1&nofb=1&ipt=99a41bdb5cb1e9c2606b4d8f2b27f6f102788411b102bf5caffc50e59ed7147e&ipo=images',
        category: 'Jackets',
        isNewArrival: false,
        isTrending: true
      },
      { 
        id: 6, 
        name: 'Summer Crop Top', 
        price: 29.99, 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.bustle.com%2Fuploads%2Fimage%2F2019%2F6%2F14%2F90073241-e78c-4b78-b285-341c6581363d-original.jpg&f=1&nofb=1&ipt=9b71336ecde17ae9b6294856c6c893e4bbf6449d2decbf58a556617174c6c5a0&ipo=images',
        category: 'Tops',
        isNewArrival: true,
        isTrending: true
      }
    ];

    const uniqueCategories = [...new Set(dummyProducts.map(product => product.category))];
    const newArrivalProducts = dummyProducts.filter(product => product.isNewArrival);
    const trendingProducts = dummyProducts.filter(product => product.isTrending);

    setProducts(dummyProducts);
    setCategories(uniqueCategories);
    setNewArrivals(newArrivalProducts);
    setTrendingItems(trendingProducts);
  }, []);

  

  return (
    <div className="home-page">
    {/* Full-Width Carousel */}
    <section className="featured-carousel">
      <div className="featured-images-container">
        {featuredImages.map((image, index) => (
          <div 
            key={index} 
            className={`featured-image 
              ${index === currentImageIndex ? 'active' : ''}
              ${index === (currentImageIndex - 1 + featuredImages.length) % featuredImages.length ? 'prev' : ''}
              ${index === (currentImageIndex + 1) % featuredImages.length ? 'next' : ''}`}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
        ))}
      </div>
    </section>

      {/* Featured Products */}
      <section className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Category with Animated Showcase */}
      <section className="container category-section">
        <h2>Shop by Category</h2>
        <div className="category-showcase">
          <div className="category-grid">
            {categories.map((category, index) => (
              <div 
                key={category} 
                className={`category-card ${index === activeCategoryIndex ? 'active' : ''}`}
              >
                <Link to={`/products?category=${category.toLowerCase().replace(' ', '-')}`}>
                  {category}
                </Link>
              </div>
            ))}
          </div>
          <div className="category-image-showcase">
  {categories.map((category, index) => (
    <div 
      key={category} 
      className={`category-image ${index === activeCategoryIndex ? 'active' : ''}`}
    >
      <img 
        src={categoryImages[category] || 'https://via.placeholder.com/500'}
        alt={category} 
        onLoad={(e) => {
          // Optional: Log image dimensions for debugging
          console.log(`${category} image dimensions:`, 
            `width: ${e.target.naturalWidth}px, 
             height: ${e.target.naturalHeight}px`
          );
        }}
      />
    </div>
  ))}
</div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container new-arrivals-section">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/products?filter=new-arrivals" className="featured-cta">View All New Arrivals</Link>
        </div>
      </section>

      {/* Trending Items Section */}
      <section className="container trending-section">
        <h2>Trending Items</h2>
        <div className="product-grid">
          {trendingItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/products?filter=trending" className="featured-cta">View All Trending</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container about-section">
        <h2>About SAVITHA</h2>
        <p>
          SAVITHA is more than just a fashion brand. We're a celebration of individual style, 
          crafting pieces that empower and inspire. From timeless classics to trendsetting designs, 
          our collection is curated to help you express your unique personality.
        </p>
        <Link to="/about" className="featured-cta">Learn More</Link>
      </section>
    </div>
  );
}

export default HomePage;