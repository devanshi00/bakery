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
          <h1>Welcome to Sweet Cravings Bakery</h1>
          <p>Where Every Bite is a Taste of Happiness!</p>
          <button className="order-now-btn">Order Now</button>
        </div>
      </header>

      {/* About Us Section */}
      <section className="about" style={{ backgroundColor: "#f9f9f9", padding: "40px 0" }}>
        <div className="container">
          <h2>About Us</h2>
          <p>
            At Sweet Cravings Bakery, we take pride in creating the finest cakes, pastries, and bread. Whether you're celebrating a special occasion or simply treating yourself, our treats are made with love and the best ingredients. Come visit us and taste the difference!
          </p>
          <img src={aboutUsImage} alt="About Sweet Cravings Bakery" className="about-img" />
        </div>
      </section>

      {/* Video Slideshow Section */}
      <section className="video-section" style={{ padding: "40px 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2>Our Bakery Process</h2>
          <p>Take a sneak peek into the magic behind our delicious creations. Watch how we bake with love and care!</p>
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
          <h2>Our Bestsellers</h2>
          <p>Indulge in our most loved baked goods — freshly made with premium ingredients every day.</p>
          <div className="menu-items">
            <div className="menu-item">
              <Link to="/products/Cakes">
                <img src={chocolateImage} alt="Chocolate Delight" className="menu-item-img" />
                <h3>Chocolate Delight</h3>
                <p>Rich and decadent, our signature chocolate cake is a true crowd favorite!</p>
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/products/Croissants">
                <img src={croissantImage} alt="Buttery Croissants" className="menu-item-img" />
                <h3>Flaky Croissants</h3>
                <p>Golden, buttery layers that melt in your mouth — a French classic!</p>
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/products/Macarons">
                <img src={macaronImage} alt="Colorful Macarons" className="menu-item-img" />
                <h3>Macarons</h3>
                <p>Light, crispy, and perfectly sweet, our macarons are a delightful treat for every occasion.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" style={{ backgroundColor: "#f0f0f0", padding: "40px 0" }}>
        <div className="container">
          <h2>Why Customers Love Us</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>"Sweet Cravings Bakery is simply the best! Their chocolate cake is the ultimate indulgence."</p>
              <h4>&ndash; Sarah L.</h4>
            </div>
            <div className="testimonial">
              <p>"The croissants are buttery perfection. I feel like I’m in Paris every time I have one!"</p>
              <h4>&ndash; John D.</h4>
            </div>
            <div className="testimonial">
              <p>"Every dessert I’ve tried is beyond amazing. I can't recommend Sweet Cravings Bakery enough!"</p>
              <h4>&ndash; Emily R.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="featured-recipes" style={{ padding: "40px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2>Featured Recipes</h2>
          <p>Explore some of our most popular recipes, from decadent cakes to mouthwatering pastries.</p>
          <div className="recipes-container">
            <div className="recipe-item">
              <h3>Chocolate Cake Recipe</h3>
              <p>Learn how to make our famous chocolate cake at home with this step-by-step guide.</p>
              <Link to="https://youtu.be/Xj3aZog5iA8?si=Y5OFi2SKjc2ICKuw" className="recipe-link">See Recipe</Link>
            </div>
            <div className="recipe-item">
              <h3>Macaron Recipe</h3>
              <p>Discover the art of making perfect macarons with this easy-to-follow recipe.</p>
              <Link to="https://youtu.be/MjVgIXccYXA?si=psWkJSp5stkirEmR" className="recipe-link">See Recipe</Link>
            </div>
            <div className="recipe-item">
              <h3>Flaky Croissants Recipe</h3>
              <p>Our buttery croissants are a fan favorite — learn how to make them at home.</p>
              <Link to="https://youtu.be/mT4cqHc4HqU?si=0WvuufXlGnmZcFjR" className="recipe-link">See Recipe</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="special-offer" style={{ padding: "40px 0", textAlign: "center" }}>
        <h2>Special Offer for You!</h2>
        <p>For a limited time, get 10% off your first order! Don’t miss out on this sweet deal.</p>
        <button className="order-now-btn">Claim Your Discount</button>
      </section>
    </div>
  );
};

export default BakeryHomePage;
