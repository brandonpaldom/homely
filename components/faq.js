import styles from './faq.module.css';

const faqs = [
  {
    question: '¿Cuál es el proceso de compra de una vivienda?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: '¿Cómo puedo saber cuánto puedo pagar?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: '¿Cómo puedo encontrar la casa adecuada para mí?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Faq() {
  return (
    <div className={styles.container}>
      {faqs.map(({ question, answer }) => (
        <div key={question} className={styles.faq}>
          <h3 className={styles.title}>{question}</h3>
          <p className={styles.paragraph}>{answer}</p>
        </div>
      ))}
    </div>
  );
}
