interface ProgramHighlightProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function ProgramHighlight({ icon, title, description, bgColor }: ProgramHighlightProps) {
  return (
    <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors border border-green-200">
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 