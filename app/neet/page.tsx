import AnimatedHeader from "../components/AnimatedHeader";
import NeetCutoffs from "../components/NeetCutoffs";

export const metadata = {
  title: "NEET Cut-Offs | JKKN Dental College",
  description:
    "Modern overview of NEET cut-off trends for General, OBC, SC/ST, and Management Quota (2022–2024).",
};

export default function NeetPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />
      <NeetCutoffs />
    </div>
  );
}


