import { motion } from "framer-motion";
import MainButton from "@/components/atoms/Buttons/main_button/MainButton";

export const BannerLastRecipe: React.FC = () => {
  const images = [
    {
      id: 1,
      src: "/img/illustration_lasagne.svg",
      className: "svg-1",
      position: { top: "50%", left: "10%" },
      scale: 1,
      rotateFinal: -10,
    },
    {
      id: 2,
      src: "/img/illustration_ramen.svg",
      className: "svg-2",
      position: { top: "25%", left: "40%" },
      scale: 1.5,
      rotateFinal: 10,
    },
    {
      id: 3,
      src: "/img/illustration_soupe.svg",
      className: "svg-3",
      position: { top: "70%", left: "55%" },
      scale: 1.2,
      rotateFinal: -2,
    },
    {
      id: 4,
      src: "/img/illustration_salade.svg",
      className: "svg-4",
      position: { top: "20%", right: "40%" },
      scale: 1,
      rotateFinal: -12,
    },
    {
      id: 5,
      src: "/img/illustration_curry.svg",
      className: "svg-5",
      position: { top: "45%", right: "15%" },
      scale: 1.5,
      rotateFinal: 10,
    },
    {
      id: 6,
      src: "/img/illustration_tacos.svg",
      className: "svg-6",
      position: { top: "75%", right: "55%" },
      scale: 1,
      rotateFinal: 0,
    },
  ];

  return (
    <section className="banner-last-recipe">
      {/* LEFT IMAGES */}
      <div className="banner-last-recipe__left">
        {images.slice(0, 3).map((img, index) => (
          <motion.img
            key={img.id}
            src={img.src}
            alt=""
            aria-hidden="true"
            className={`falling-img ${img.className}`}
            style={img.position}
            initial={{ y: -200, opacity: 0, rotate: 0, scale: 0.5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              rotate: img.rotateFinal,
              scale: img.scale,
            }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          />
        ))}
      </div>

      {/* CENTER CONTENT */}
      <div className="banner-last-recipe__content">
        <h1>DERNIÈRE RECETTE AJOUTÉE</h1>
        <div className="fake_recipe_card"></div>
        <MainButton
          className="main-button--light"
          icon="/icons/pink-arrow-right.svg"
          label="TOUTES LES RECETTES"
          ariaLabel="Voir la page des recettes"
          onClick={() => console.log("A CHANGER")}
        />
      </div>

      {/* RIGHT IMAGES */}
      <div className="banner-last-recipe__right">
        {images.slice(3).map((img, index) => (
          <motion.img
            key={img.id}
            src={img.src}
            alt=""
            aria-hidden="true"
            className={`falling-img ${img.className}`}
            style={img.position}
            initial={{ y: -200, opacity: 0, rotate: 0, scale: 0.5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              rotate: img.rotateFinal,
              scale: img.scale,
            }}
            transition={{ duration: 1, delay: (index + 3) * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};
