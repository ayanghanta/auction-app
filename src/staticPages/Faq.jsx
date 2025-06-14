import styles from "./FAQ.module.css";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useState } from "react";

const faqData = [
  {
    question: "What is Antique Bazzar?",
    answer:
      "Antique Bazzar is an online auction platform where users can buy and sell vintage and historical items like books, memorabilia, and more.",
  },
  {
    question: "How do I participate in an auction?",
    answer:
      "To participate in an auction, you must create an account, browse the available items, and place a bid on any item listed in ongoing auctions.",
  },
  {
    question: "How do I list an item for auction?",
    answer:
      "To list an item, navigate to the 'Sell an Item' section, fill out the required information, and upload the necessary documents. Once verified by the admin, your item will be listed for auction.",
  },
  {
    question: "What happens if I win an auction?",
    answer:
      "If you win an auction, you will be notified, and the payment process will begin. Once the payment is confirmed, the item will be shipped to your address.",
  },
  {
    question: "Is there any fee for listing an item?",
    answer:
      "Listing items on Antique Bazzar is free. However, we charge a small commission fee when an item is sold.",
  },
  {
    question: "How long does an auction last?",
    answer:
      "Typically, auctions on Antique Bazzar last between 3-5 days, giving users plenty of time to place their bids.",
  },
  {
    question: "How can I track my bids?",
    answer:
      "You can track your bids by navigating to the 'My Bids' section of your account, where all your active and past bids are listed.",
  },
  {
    question: "Can I withdraw my bid?",
    answer:
      "Once a bid is placed, it cannot be withdrawn. Make sure you only bid on items you are serious about purchasing.",
  },
  {
    question: "How do I contact the seller of an item?",
    answer:
      "All communication with sellers is handled through the platform. Once an auction is completed, you will receive the necessary information if you win the auction.",
  },
];

function Faq() {
  const [openQuestion, setOpenQuestion] = useState("");
  function handleClick(index) {
    if (openQuestion === index) return setOpenQuestion("");
    setOpenQuestion(index);
  }
  return (
    <div>
      <Header />
      <main className={styles.faqContainer}>
        <h1>Frequently Asked Questions</h1>
        {faqData.map((faq, i) => (
          <FaqCard
            question={faq.question}
            answer={faq.answer}
            key={faq.question}
            onOpenQuestion={handleClick}
            openFaq={openQuestion}
            index={i}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

function FaqCard({ question, answer, index, onOpenQuestion, openFaq }) {
  return (
    <div
      className={`${styles.faqItem} ${
        index === openFaq ? `${styles.open}` : ""
      }`}
    >
      <div
        className={styles.faqQuestionContainer}
        onClick={() => onOpenQuestion(index)}
      >
        <h3 className={styles.faqQuestion}>
          {index + 1}. {question}
        </h3>
        <span>{openFaq === index ? "-" : "+"}</span>
      </div>
      <p className={styles.faqAnswer}>{answer}</p>
    </div>
  );
}

export default Faq;
