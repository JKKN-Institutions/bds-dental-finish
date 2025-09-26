interface TrustBadgeProps {
  icon: string;
  text: string;
  bgColor: string;
  iconColor: string;
}

export default function TrustBadge({ icon, text, bgColor, iconColor }: TrustBadgeProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-green-200">
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center`}>
          <span className={`${iconColor} font-bold`}>{icon}</span>
        </div>
        <span className="text-sm font-medium text-gray-700">{text}</span>
      </div>
    </div>
  );
} 