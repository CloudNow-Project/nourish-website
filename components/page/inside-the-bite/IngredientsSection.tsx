import { IngredientSection } from "./IngredientSection";
import { ingredients } from "@/data/inside-the-bite";

export function IngredientsSection() {
  return (
    <>
      {ingredients.map((ingredient, index) => (
        <IngredientSection
          key={ingredient.id}
          heading={ingredient.heading}
          description={ingredient.description}
          benefits={ingredient.benefits}
          quality={ingredient.quality}
          imageSrc={ingredient.imageSrc}
          isReversed={index % 2 !== 0}
        />
      ))}
    </>
  );
}
