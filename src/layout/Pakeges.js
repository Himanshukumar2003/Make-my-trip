import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './layout.css';

const destinations = [
  { name: "Europe", price: "", image: "/path/to/europe.jpg" },
  { name: "Thailand", price: "₹52,100", image: "/path/to/thailand.jpg" },
  { name: "Malaysia", price: "₹84,000", image: "/path/to/malaysia.jpg" },
  { name: "Bali", price: "₹94,400", image: "/path/to/bali.jpg" },
  { name: "Dubai", price: "₹60,600", image: "/path/to/dubai.jpg" },
  { name: "Singapore", price: "₹68,900", image: "/path/to/singapore.jpg" },
  { name: "Maldives", price: "", image: "/path/to/maldives.jpg" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

