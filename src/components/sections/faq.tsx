import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quem nós somos?",
      answer: "Somos uma empresa focada em oferecer soluções práticas e inovadoras.",
    },
    {
      question: "O que oferecemos?",
      answer: "Oferecemos diversos serviços para facilitar sua vida.",
    },
    {
      question: "Quão práticos somos?",
      answer: "Nosso objetivo é tornar tudo mais simples e eficiente.",
    },
  ];

  return (
    <div className="m-10 px-4 sm:px-6 lg:px-8">
      <h2 className="font-bold text-4xl text-center mb-10">FAQ</h2>

      <div className="mx-auto max-w-full md:max-w-6xl flex flex-col bg-button p-4 md:p-6 rounded-2xl text-white">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex items-center justify-between py-3 cursor-pointer focus:outline-none"
            >
              <span className="text-lg">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-100">{faq.answer}</p>
            </div>

            {index < faqs.length - 1 && <hr className="border-gray-500 my-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
