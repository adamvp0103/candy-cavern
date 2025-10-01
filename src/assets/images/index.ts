// TODO: Add and import all product images
import milkChocolateBarImage from './products/milk-chocolate-bar.png';
import darkChocolateTrufflesImage from './products/dark-chocolate-truffles.png';
import chocolateCoveredAlmondsImage from './products/chocolate-covered-almonds.png';
import caramelFilledSquaresImage from './products/caramel-filled-squares.png';
import whiteChocolateBarkWithSprinklesImage from './products/white-chocolate-bark-with-sprinkles.png';
import sourGummyWormsImage from './products/sour-gummy-worms.png';
import fruityGummyBearsImage from './products/fruity-gummy-bears.png';
import chewyFruitSlicesImage from './products/chewy-fruit-slices.png';
import rainbowSwirlLollipopsImage from './products/rainbow-swirl-lollipops.png';
import butterscotchDiscsImage from './products/butterscotch-discs.png';
import peppermintRoundsImage from './products/peppermint-rounds.png';
import fruitFlavoredJollyDropsImage from './products/fruit-flavored-jolly-drops.png';
import chocolateCoveredPretzelsImage from './products/chocolate-covered-pretzels.png';
import peanutButterCandyCoatedPiecesImage from './products/peanut-butter-candy-coated-pieces.png';
import crispyRiceChocolateClustersImage from './products/crispy-rice-chocolate-clusters.png';
import softChewyCaramelsImage from './products/soft-chewy-caramels.png';
import seaSaltCaramelSquaresImage from './products/sea-salt-caramel-squares.png';
import chocolateFudgeImage from './products/chocolate-fudge.png';
import peanutButterFudgeImage from './products/peanut-butter-fudge.png';
import type { ProductName } from '../../types/types';

// TODO: Add all product keys and image references
const imageDictionary: Record<ProductName, string> = {
  'Milk Chocolate Bar': milkChocolateBarImage,
  'Dark Chocolate Truffles': darkChocolateTrufflesImage,
  'Chocolate-Covered Almonds': chocolateCoveredAlmondsImage,
  'Caramel-Filled Squares': caramelFilledSquaresImage,
  'White Chocolate Bark with Sprinkles': whiteChocolateBarkWithSprinklesImage,
  'Sour Gummy Worms': sourGummyWormsImage,
  'Fruity Gummy Bears': fruityGummyBearsImage,
  'Chewy Fruit Slices': chewyFruitSlicesImage,
  'Rainbow Swirl Lollipops': rainbowSwirlLollipopsImage,
  'Butterscotch Discs': butterscotchDiscsImage,
  'Peppermint Rounds': peppermintRoundsImage,
  'Fruit-Flavored Jolly Drops': fruitFlavoredJollyDropsImage,
  'Chocolate-Covered Pretzels': chocolateCoveredPretzelsImage,
  'Peanut Butter Candy-Coated Pieces': peanutButterCandyCoatedPiecesImage,
  'Crispy Rice Chocolate Clusters': crispyRiceChocolateClustersImage,
  'Soft Chewy Caramels': softChewyCaramelsImage,
  'Sea Salt Caramel Squares': seaSaltCaramelSquaresImage,
  'Chocolate Fudge': chocolateFudgeImage,
  'Peanut Butter Fudge': peanutButterFudgeImage
};

export default imageDictionary;
