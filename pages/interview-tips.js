
export default function InterviewTipsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Interview Tips</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tip 1: Research and Practice</h2>
        <p className="mb-2 text-gray-700">Research the company and practice common interview questions.</p>
        <div className="md:flex md:items-start gap-4">
          <div className="md:w-2/3">
            <video controls className="w-full mb-2">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              <track src="/captions/interview_tip1.vtt" kind="captions" srcLang="en" label="English" default />
            </video>
          </div>
          <div className="md:w-1/3">
            <p className="text-sm font-semibold mb-1">KSL Avatar:</p>
            <video controls muted className="w-full">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tip 2: Clear Communication</h2>
        <p className="mb-2 text-gray-700">Maintain eye contact and communicate clearly. Use accommodations if available.</p>
        <div className="md:flex md:items-start gap-4">
          <div className="md:w-2/3">
            <video controls className="w-full mb-2">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              <track src="/captions/interview_tip2.vtt" kind="captions" srcLang="en" label="English" default />
            </video>
          </div>
          <div className="md:w-1/3">
            <p className="text-sm font-semibold mb-1">KSL Avatar:</p>
            <video controls muted className="w-full">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
