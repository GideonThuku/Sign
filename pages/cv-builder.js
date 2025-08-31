
import { useEffect, useRef, useState } from 'react';

export default function CvBuilderPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [summary, setSummary] = useState('');
  const [errors, setErrors] = useState({});
  const [resumeData, setResumeData] = useState(null);

  const [listening, setListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
    if (SR) {
      const rec = new SR();
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.onresult = (e) => {
        const t = e.results[0][0].transcript;
        setSummary((prev) => (prev ? prev + ' ' + t : t));
      };
      rec.onend = () => setListening(false);
      rec.onerror = () => setListening(false);
      recognitionRef.current = rec;
      setSpeechSupported(true);
    }
  }, []);

  const toggleListen = () => {
    if (!speechSupported || !recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      setListening(true);
      recognitionRef.current.start();
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required.';
    if (!email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errs.email = 'Please enter a valid email.';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const resume = { name, email, skills, summary };
    localStorage.setItem('resume', JSON.stringify(resume));
    setResumeData(resume);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CV Builder</h1>
      <form onSubmit={submit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Full Name<span className="text-red-600"> *</span></label>
          <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} className={`w-full border px-3 py-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">Email<span className="text-red-600"> *</span></label>
          <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className={`w-full border px-3 py-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="skills" className="block font-medium mb-1">Skills <span className="text-sm text-gray-500">(comma-separated)</span></label>
          <input id="skills" type="text" value={skills} onChange={(e)=>setSkills(e.target.value)} className="w-full border px-3 py-2 rounded border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="block font-medium mb-1">Summary / Profile</label>
          <div className="relative">
            <textarea id="summary" rows="4" value={summary} onChange={(e)=>setSummary(e.target.value)} className="w-full border px-3 py-2 rounded border-gray-300" placeholder="Brief summary about you..." />
            {speechSupported && (
              <button type="button" onClick={toggleListen} className="absolute right-2 bottom-2 bg-gray-200 rounded px-2 py-1 text-sm" aria-label="Use speech input for summary">
                {listening ? 'Stop 🛑' : '🎙️ Speak'}
              </button>
            )}
          </div>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded font-medium hover:bg-blue-700">Save CV</button>
      </form>

      {resumeData && (
        <div className="mt-8 bg-gray-50 p-4 border rounded" role="region" aria-label="Resume Preview">
          <h2 className="text-xl font-semibold mb-3">Resume Preview:</h2>
          <p><strong>Name:</strong> {resumeData.name}</p>
          <p><strong>Email:</strong> {resumeData.email}</p>
          {resumeData.skills && <p><strong>Skills:</strong> {resumeData.skills}</p>}
          {resumeData.summary && <p><strong>Summary:</strong> {resumeData.summary}</p>}
          <p className="text-sm text-gray-600 mt-2">*Saved locally. Use this info when applying for jobs.</p>
        </div>
      )}
    </div>
  );
}
