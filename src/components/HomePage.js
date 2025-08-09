import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Image imports
import aboutUsImage from "../assets/images/img/aboutus.jpg";
import chocolateImage from "../assets/images/img/joy.jpeg";
import croissantImage from "../assets/images/img/butter.jpg";
import macaronImage from "../assets/images/img/macrons.jpg";

// Slideshow images for hero section
import heroImage1 from "../assets/images/img/hero3.webp";
import heroImage2 from "../assets/images/img/hero2.webp";
import heroImage3 from "../assets/images/img/heri1.webp";
import heroImage4 from "../assets/images/img/he.webp";
import heroImage5 from "../assets/images/img/h.avif";

// Video imports
import bakeryProcessVideo1 from "../assets/images/img/video.mp4";
import bakeryProcessVideo2 from "../assets/images/img/video6.mp4";
import bakeryProcessVideo3 from "../assets/images/img/video5.mp4";
import bakeryProcessVideo4 from "../assets/images/img/video3.mp4"; // Add more videos if needed

const BakeryHomePage = () => {
  // Manage background image slider
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage5, heroImage4];

  // Manage video slideshow
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoArray = [bakeryProcessVideo1, bakeryProcessVideo2, bakeryProcessVideo3, bakeryProcessVideo4]; // Add more video sources

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);  // Update the image
      setCurrentVideo((prev) => (prev + 1) % videoArray.length);  // Update the video
    }, 3000);  // Change image and video every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="bakery-homepage">
      {/* Hero Section with Background Image Slideshow */}
      <header className="hero" style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}>
        <div className="hero-content">
          <h1>Welcome to Kiran's Kitchen</h1>
          <p>Home Cook👩🏻‍🍳 and Baker🍰 - Where Every Creation is Made with Love!</p>
          <button className="order-now-btn">Order Now</button>
        </div>
      </header>

      {/* About Us Section */}
      <section className="about" style={{ backgroundColor: "#f9f9f9", padding: "40px 0" }}>
        <div className="container">
          <h2>About Us</h2>
          <p>
            Welcome to Kiran's Kitchen! I'm a passionate home cook and baker specializing in delicious cakes, brownies, cheesecakes, and gourmet delicacies. Based in Gondal and Rajkot, I create customized cakes, muffins, brownies, and dessert jars that are perfect for any celebration. Every creation is made with love and the finest ingredients. DM me for ordering your favorite treats! 😋
          </p>
          <img src={aboutUsImage} alt="About Sweet Cravings Bakery" className="about-img" />
        </div>
      </section>

      {/* Video Slideshow Section */}
      <section className="video-section" style={{ padding: "40px 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2>Kiran's Kitchen Process</h2>
          <p>Take a sneak peek into the magic behind our delicious homemade creations. Watch how we bake with love and care!</p>
          <div className="video-container">
            <video 

key={videoArray[currentVideo]} // Use the key prop to make React treat it as a new element
width="100%"
height="auto"
controls
autoPlay // Ensure the video starts automatically
muted // Mute the video for autoplay to work without restrictions
preload="auto" // Preload video for faster playback
loop // Key prop forces the video to restart on each change
            >
              <source src={videoArray[currentVideo]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="menu-highlights" style={{ backgroundColor: "#fff", padding: "40px 0" }}>
        <div className="container">
          <h2>Our Specialties</h2>
          <p>Indulge in our signature creations — customized cakes, brownies, cheesecakes, and gourmet delicacies made fresh to order.</p>
          <div className="menu-items">
            <div className="menu-item">
              <Link to="/products/Cakes">
                <img src={chocolateImage} alt="Chocolate Delight" className="menu-item-img" />
                <h3>Customized Cakes</h3>
                <p>Beautiful customized cakes for engagements, birthdays, and special occasions - made exactly how you want them!</p>
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/products/Croissants">
                <img src={croissantImage} alt="Buttery Croissants" className="menu-item-img" />
                <h3>Gourmet Brownies</h3>
                <p>Rich, fudgy brownies with premium toppings and decorations that are simply irresistible!</p>
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/products/Macarons">
                <img src={macaronImage} alt="Colorful Macarons" className="menu-item-img" />
                <h3>Dessert Jars & Treats</h3>
                <p>Individual dessert jars, cupcakes, and gourmet delicacies perfect for gifting or personal indulgence.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" style={{ backgroundColor: "#f0f0f0", padding: "40px 0" }}>
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>"Kiran's customized engagement cake was absolutely stunning! The taste was as amazing as the design."</p>
              <h4>&ndash; Priya S.</h4>
            </div>
            <div className="testimonial">
              <p>"The dessert jars are my favorite! Perfect portion size and so beautifully presented. Highly recommend!"</p>
              <h4>&ndash; Rahul M.</h4>
            </div>
            <div className="testimonial">
              <p>"The brownies are to die for! Kiran's attention to detail and quality is unmatched. Will definitely order again!"</p>
              <h4>&ndash; Neha P.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="featured-recipes" style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2>Our Signature Creations</h2>
          <p>Discover the art behind our most popular creations, from customized cakes to gourmet desserts.</p>
          <div className="recipes-container">
            <div className="recipe-item">
              <h3>Engagement Cakes</h3>
              <p>Beautiful multi-tier cakes with elegant decorations, perfect for your special moments.</p>
              <Link to="https://youtu.be/Xj3aZog5iA8?si=Y5OFi2SKjc2ICKuw" className="recipe-link">See Recipe</Link>
            </div>
            <div className="recipe-item">
              <h3>Dessert Jars</h3>
              <p>Layered dessert jars with rich flavors and beautiful presentation - perfect for any occasion.</p>
              <Link to="https://youtu.be/MjVgIXccYXA?si=psWkJSp5stkirEmR" className="recipe-link">See Recipe</Link>
            </div>
            <div className="recipe-item">
              <h3>Gourmet Brownies</h3>
              <p>Rich, decadent brownies with premium toppings and artistic decorations.</p>
              <Link to="https://youtu.be/mT4cqHc4HqU?si=0WvuufXlGnmZcFjR" className="recipe-link">See Recipe</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="special-offer" style={{ padding: "40px 0", textAlign: "center" }}>
        <h2>Ready to Order?</h2>
        <p>DM us for custom orders! Based in Gondal and Rajkot - we create personalized treats just for you.</p>
        <button className="order-now-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default BakeryHomePage;
