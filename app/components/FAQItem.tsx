interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="bg-white rounded-xl shadow-sm border border-green-200">
      <summary className="p-6 cursor-pointer font-semibold text-gray-900 hover:bg-green-50 transition-colors">
        {question}
      </summary>
      <div className="px-6 pb-6 text-gray-600">
        {answer}
      </div>
    </details>
  );
} 