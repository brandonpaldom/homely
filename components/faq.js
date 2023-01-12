import styles from './faq.module.css';

const faqs = [
  {
    question: '¿Cuál es el proceso de compra de una vivienda?',
    answer:
      'El proceso de compra de una vivienda generalmente incluye encontrar una propiedad adecuada, hacer una oferta, negociar el precio y las condiciones, obtener un préstamo hipotecario (si es necesario), hacer una inspección de la propiedad, completar el trámite de cierre y finalmente, transferir la propiedad.',
  },
  {
    question: '¿Cómo puedo saber cuánto puedo pagar?',
    answer:
      'Para saber cuánto puede pagar, puede utilizar una calculadora de hipoteca en línea o consultar a un profesional de préstamos hipotecarios. También es importante tener en cuenta sus ingresos, gastos, y deudas existentes al evaluar su capacidad de pago.',
  },
  {
    question: '¿Cómo puedo encontrar la casa adecuada para mí?',
    answer:
      'Para encontrar la casa adecuada, puede utilizar nuestra plataforma de búsqueda de propiedades para filtrar por características importantes, como ubicación, tamaño, precio y características de la propiedad. También puede considerar trabajar con un agente inmobiliario para ayudarlo en su búsqueda.',
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
