export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>&copy; {currentYear} Mini Blog. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
