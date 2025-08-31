
export default function AvatarVideo({ src }) {
  return (
    <video controls muted className="w-full">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support the video tag.
    </video>
  );
}
