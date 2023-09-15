import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen-react';

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about__container">
          <h3
            style={{
              color: '',
            }}
          >
            Co je Mana?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odio
            debitis minima est accusantium veritatis exercitationem non ipsam
            cumque inventore magni similique iste, error ab quidem possimus.
            Architecto, similique ex.
          </p>
        </div>
        <div className="about__image-container">
          <div className="about__image">
            <Image src="https://cdn.shopify.com/s/files/1/0827/3163/0896/files/Lime_3b397bad-a437-4ba9-8e6d-ce26fe3d7c01.webp?v=1694514267" />
          </div>
          <div className="about__image">
            <Image src="https://cdn.shopify.com/s/files/1/0827/3163/0896/files/Choco_1341728b-fd91-431f-a8a5-90389425e9d7.webp?v=1694514263" />
          </div>
          <div className="about__image">
            <Image src="https://cdn.shopify.com/s/files/1/0827/3163/0896/files/Berries_7fc738e7-192c-4bc7-8159-eeff476d9492.webp?v=1694514258" />
          </div>
        </div>
      </div>
      <Link className="button primary" prefetch="intent" to="/collections/all">
        Chci manu !
      </Link>
    </section>
  );
}

export default About;
