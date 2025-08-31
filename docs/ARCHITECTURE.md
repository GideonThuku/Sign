
# Architecture Overview

- **Pages Router (Next.js)** for simplicity in a 48-hour MVP.
- **Data** is provided via `lib/data.js` (dummy). In production, back with Supabase tables:
  - users(id, name, email, role, created_at)
  - courses(id, title, level, slug, summary)
  - lessons(id, course_id, title, video_url, avatar_clip_url, captions_vtt_url, transcript_txt_url, duration)
  - progress(user_id, lesson_id, status, score, updated_at)
  - resumes(user_id, json_blob)

- **Accessibility**: captions `track` default, transcript toggle, keyboard-first UI, ARIA attributes.
- **Performance**: static generation, dynamic import for Avatar panel.
- **Security**: CSP and other headers set in `next.config.js`.
