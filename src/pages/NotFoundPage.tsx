import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-dvh">
        <p>The page you are looking for doesn't exist</p>
      </div>
      <Footer />
    </>
  );
}
