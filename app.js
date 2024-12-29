

const products = [
  {
    image: "images/Professional-Graphic-Designer.jpeg",
    title: "Graphic Design",
    description: "Creative and impactful designs tailored to your needs.",
  },
  {
    image: "images/Prototyping.jpg",
    title: "Prototyping",
    description:
      "Turn your ideas into reality with our prototyping services.",
  },
  {
    image: "images/web-design-header.jpg",
    title: "Web Design",
    description: "Modern and responsive websites for businesses.",
  },
  {
    image: "images/3D-Modeling.jpeg",
    title: "3D Modeling",
    description: "High-quality 3D models for various applications.",
  },
  {
    image: "images/Digital-Printing.jpg",
    title: "Printing",
    description: "Professional-grade printing services.",
  },
  {
    image: "images/Consulting.jpg",
    title: "Consulting",
    description: "Expert advice to help grow your business.",
  },
  {
    image: "images/marketing.png",
    title: "Marketing",
    description: "Strategic marketing solutions to boost your brand.",
  },
  {
    image: "images/video-editing.jpeg",
    title: "Video Editing",
    description: "Capture attention with stunning video content.",
  },
  {
    image: "images/photography.jpg",
    title: "Photography",
    description: "Professional photography services for all occasions.",
  },
  {
    image: "images/Building-Custom-Software.jpg",
    title: "Custom Software",
    description: "Tailored software solutions for unique needs.",
  },
];

const productsContainer = document.querySelector("#products .grid");
products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add(
    "card",
    "bg-white",
    "rounded",
    "shadow",
    "p-4",
    "transition-transform",
    "transform",
    "hover:scale-105",
    "text-center",
    "hover:shadow-md"
  );
  productCard.innerHTML = `
  <img src="${product.image}" alt="${product.title}"product-image class=" w-full object-cover rounded mb-4">
  <h3 class="text-xl font-bold">${product.title}</h3>
  <p class="text-gray-600">${product.description}</p>
  <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More...</button>
`;
  productsContainer.appendChild(productCard);
});

