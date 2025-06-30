

// import React from 'react';
// import '../../src/Galary/Galary.css'; // Import external CSS
// import { Image } from 'antd';

// const imageData = [
//   {
//     id: 1,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62b9e93556c3b4215045ca57_benigno-hoyuela-vECZ5tm5lNQ-unsplash-p-500.jpeg',
//     alt: 'Outdoor Wedding Setup',
//     caption: 'Julia & Nolan',
//     subcaption: 'Outdoor',
//   },
//   {
//     id: 2,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62b9df5fb1ff7025d71f76d0_kelsey-curtis-8ezfg5oYHNY-unsplash-p-500.jpeg',
//     alt: 'Bride & Groom',
//     caption: 'Emily & Jack',
//     subcaption: 'Destination',
//   },
//   {
//     id: 3,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62ac90845b85b7adaf115e44_aneta-voborilova-Hps0j8Uu8Us-unsplash-p-500.jpeg',
//     alt: 'Bride Holding Bouquet',
//     caption: 'Sophia & Liam',
//     subcaption: 'Indoor',
//   },
//   {
//     id: 4,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62b9e93556c3b4215045ca57_benigno-hoyuela-vECZ5tm5lNQ-unsplash-p-500.jpeg',
//     alt: 'Floral Table Setting',
//     caption: 'Ella & Noah',
//     subcaption: 'Outdoor',
//   },
//   {
//     id: 5,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62ac900ae9a5321da04566ab_angelo-pantazis-A8WIBd73a6E-unsplash%20(1)-p-500.jpeg',
//     alt: 'First Dance',
//     caption: 'Olivia & James',
//     subcaption: 'Ballroom',
//   },
//   {
//     id: 6,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62ac90845b85b7adaf115e44_aneta-voborilova-Hps0j8Uu8Us-unsplash-p-500.jpeg',
//     alt: 'Cake Cutting',
//     caption: 'Mia & Lucas',
//     subcaption: 'Indoor',
//   },
//   {
//     id: 7,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62b9df5fb1ff7025d71f76d0_kelsey-curtis-8ezfg5oYHNY-unsplash-p-500.jpeg',
//     alt: 'Hair Accessories',
//     caption: 'Grace & Leo',
//     subcaption: 'Garden',
//   },
//   {
//     id: 8,
//     src: 'https://cdn.prod.website-files.com/62a1a1f441d88c40884aede2/62b9df5fb1ff7025d71f76d0_kelsey-curtis-8ezfg5oYHNY-unsplash-p-500.jpeg',
//     alt: 'Romantic Kiss',
//     caption: 'Ava & Ethan',
//     subcaption: 'Sunset',
//   },
// ];

// export default function ImageGallery() {
//   return (
//     <div className="gallery-container">
//       <h2 className="gallery-title">Wedding Gallery</h2>
//       <div className="gallery-grid">
//         {imageData.map((img) => (
//           <div key={img.id} className="gallery-card">
//             <Image
//               src={img.src}
//               alt={img.alt}
//               className="gallery-image"
//               preview={true}
//             />
//             <div className="gallery-caption">
//               <h3>{img.caption}</h3>
//               <p>{img.subcaption}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
