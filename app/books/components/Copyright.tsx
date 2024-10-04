export default function CopyrightClaim() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <span>Copyright © {new Date().getFullYear()} Next Library.</span>
      <div className="flex gap-1">
        <span>Contact support:</span>
        <a href="support@nextlibrary.com" className="underline text-blue-600">
          support@nextlibrary.com
        </a>
      </div>
    </div>
  );
}
