import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen-react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <Image src="https://cdn.shopify.com/s/files/1/0827/3163/0896/files/mana.webp?v=1694502616" />
      </div>

      <div className="hero-text__container">
        <div className="hero__text back">Mana</div>
        <div className="hero__text front">Drink</div>
      </div>

      <div className="hero-button__container">
        <Link
          className="button primary"
          prefetch="intent"
          to="/collections/all"
        >
          Chci Manu!
        </Link>
        <a className="button secondary" href="#about">
          Co je Mana?
        </a>
      </div>
    </section>
  );
}

export default Hero;
