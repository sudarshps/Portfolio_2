import React from "react";
import { CarouselWithContent } from "./MUI/Carousel";
import QwLandPage from "../assets/qwlandpage.PNG";
import ApolloLandPage from "../assets/apollolandpage.PNG";
import PdfExtractor from "../assets/pdfextractor.PNG";

const Projects = () => {
  const projectContents = [
    {
      name: "Quick Wheels",
      description: `QuickWheels is an innovative and feature-rich car rental platform
         that caters to the needs of both users and hosts, offering a 
         seamless and efficient experience. The platform ensures a responsive and user-friendly interface,
          showcasing a perfect balance between functionality and performance, making 
          QuickWheels a comprehensive solution for modern car rental needs.`,
      image: QwLandPage,
      link: "https://quickwheels.vercel.app/",
    },
    {
      name: "Apollo Furniture E-Commerce",
      description: `An E-Commerce platform specializing in the sale of furnitures, offering various features such as shopping cart,
wishlist, digital wallet, image cropping functionality, user profiles, category management. Additional features
encompass live blocking, discount coupons, detailed sales reports and an administrative dashboard with dynamic
graph representations.`,
      image: ApolloLandPage,
      link: "https://apollo-ecommerce.onrender.com/",
    },
    {
      name: "Pdf Extractor",
      description: `Online Pdf Extractor is a user-friendly tool designed to extract specific 
      pages from a PDF document and save them as a new file. Whether you're a student, professional, or casual user, this tool simplifies
       the task of managing large PDF files by allowing you to focus only on the pages you need.
With a clean and intuitive interface (or CLI), users can select the desired pages, extract them effortlessly,
 and store the results in a separate PDF. This tool can be used for preparing reports, creating custom PDFs, or reducing file size by removing unnecessary pages.`,
      image: PdfExtractor,
      link: "https://pdf-extractor-phi.vercel.app",
    },
  ];

  return (
    <div className="mt-36" id="projects">
      <h1 className="text-2xl headfont">Projects</h1>
      <div className="max-w-64 lg:max-w-full text-lg mt-20 lg:ms-20">
        <CarouselWithContent contents={projectContents} />
      </div>
    </div>
  );
};

export default Projects;
