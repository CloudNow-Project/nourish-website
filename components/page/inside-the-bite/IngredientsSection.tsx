import React from "react";
import { ingredients } from "@/data/inside-the-bite";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import { IconProps } from "@/components/ui/Icons";
import {
  GingerPowder,
  ChiaSeeds,
  FlaxSeeds,
  Pumpkin,
  Beef,
  SweetPotato,
  Spirulina,
  RiceFlour,
  Oats,
  Peanuts,
  BeetRootPowder,
  Egg,
  PumpkinSeeds,
  Carrot,
  Strawberry,
  Rice,
} from "@/components/ui/IngredientIcon";

type IconMapType = {
  [key: string]: React.FC<IconProps>;
};

const iconMap: IconMapType = {
  Rice,
  GingerPowder,
  ChiaSeeds,
  FlaxSeeds,
  Pumpkin,
  Beef,
  SweetPotato,
  Spirulina,
  RiceFlour,
  Oats,
  Peanuts,
  BeetRootPowder,
  Egg,
  PumpkinSeeds,
  Carrot,
  Strawberry,
};

export function IngredientsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedElement variant="fadeInUp" delay={0.1}>
          <div className="text-center mb-6 md:mb-8">
            <div className="max-w-4xl mx-auto">
              <ShadowedHeading
                text="Nourishing Goodness<br>One Ingredient at a Time"
                as="h2"
                size="lg"
                textColor="#ae431e"
                shadowColor="#E5E7EB"
                shadowOffset={3}
                className="text-center"
              />
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement variant="fadeInUp" delay={0.2}>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 md:mb-16 text-base md:text-lg px-4 font-semibold">
            Every ingredient we pick has a job to do — to nourish your pup from the inside out.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => {
            const IconComponent = iconMap[ingredient.icon];
            return (
              <AnimatedElement key={ingredient.id} variant="fadeInUp" delay={0.1 * index}>
                <div className="flex items-start space-x-4 p-4 transition-transform hover:scale-105">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 text-chile-rojo">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-chile-rojo mb-2">{ingredient.heading}</h3>
                    <p className="text-gray-600">{ingredient.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
