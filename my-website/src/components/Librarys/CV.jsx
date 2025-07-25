const ButtonHoverRight = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MP-CV.pdf';
    link.download = 'Mohamed_Paizal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button onClick={handleDownload} className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-yellow-500 font-medium text-neutral-200 border-2 border-yellow-600 transition-all duration-300 hover:w-36 active:w-36 md:hover:w-36">
        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100 group-active:-translate-x-3 group-active:opacity-100">
          Download CV
        </div>
        <div className="absolute right-3.5">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"></path>
          </svg>
        </div>
      </button>
    </>
  );
};
export default ButtonHoverRight;
