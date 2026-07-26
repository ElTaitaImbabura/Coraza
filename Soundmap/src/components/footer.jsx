import React from "react";

function Footer() {
  return (
    <footer className="bg-black px-6 py-10">
      <div className="mx-auto flex max-w-5xl items-start justify-between">
        {/* Left */}
        <div className="text-left">
          <p className="text-lg font-semibold text-[#B8A03A]">
            Lorena Mancero
          </p>

          <p className="mt-1 text-sm tracking-wide text-[#B8A03A]">
            Directora del Proyecto
          </p>
        </div>

        {/* Right */}
        <div className="text-right">
          <p className="text-lg font-semibold text-[#B8A03A]">
            Xavier Lopez
          </p>

          <p className="mt-1 text-sm tracking-wide text-[#B8A03A]">
            Edición de sonido
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;