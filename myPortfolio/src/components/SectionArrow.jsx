function SectionArrow({ direction = "down" }) {
  return (
    <svg
      className="section-arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {direction === "up" ? (
        <path d="m5 15 7-7 7 7" />
      ) : (
        <path d="m5 9 7 7 7-7" />
      )}
    </svg>
  );
}

export default SectionArrow;
