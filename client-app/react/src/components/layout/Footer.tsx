import { cn } from "@/lib/utils";

type FooterProps = {
  className?: string;
};

const Footer = ({ className } : FooterProps) => {
  return (
    <>
      <footer className={cn("fixed bottom-0 left-0 right-0 justify-center", className)}>
        <div className="container mx-auto text-center text-sm">
          © 2026 Dann All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
