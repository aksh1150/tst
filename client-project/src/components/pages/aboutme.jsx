import React, { Component } from "react";
import LayerOne from "../layerone";
class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <LayerOne aboutLayerOne>
          <h2>ABOUT ME</h2>
          <p className="hypnocol">
            "Life will give you whatever experience is most helpful for the
            evolution of your consciousness."
          </p>
          <i className="hypnocol">- Eckhart Tolle</i>
        </LayerOne>
        <div className="layerOnes">
          <p className="abotTxtCol">
            Hi, and thanks for visiting my website. I am from Australia, but I
            have spent most of my adult life living in other countries. Dubai
            has been my home since 2011.
          </p>
          <p className="abotTxtCol">
            I have always been a sensitive and intuitive soul, but for most of
            my life, I explored other aspects of myself. I was a court reporter
            for over 25 years. This gave me the opportunity to live in various
            countries and explore many other cultures, all of which I am
            grateful for. But for many years, I had a sense that life wanted to
            take me elsewhere and wanted me to explore other aspects of my
            being.
          </p>
          <p className="abotTxtCol">
            So I began my journey in my mid-40s to see what else life had to
            offer me. It wasn't until I had a profound awakening and healing
            experience through hypnosis that I finally felt able to begin the
            journey of making significant changes in my life and begin on the
            path of becoming a hypnotherapist and energy healer. This new path
            has brought about many uplifting changes in my thinking and life
            experience. I welcome the opportunity to work with a variety of
            people and assist them on their healing journey. My experience was
            one of "I'm not sure why I feel like this and how to change my
            thinking patterns, but I know I need some guidance and assistance to
            help me on my journey."
          </p>
          <p className="abotTxtCol">
            As we all know, the most profound guidance comes from within
            ourselves. Allow me to help you find your inner voice, so you can
            better navigate the outer world. The techniques I have learnt are
            about helping you to feel empowered, so you can recognise and listen
            to your intuition.
          </p>
          <p className="abotTxtCol">
            If you are looking to make profound changes, I know this experience
            intimately. I welcome the opportunity to work alongside you to
            explore new possibilities of a meaningful life.
          </p>
        </div>
        <div className="aboutContact">
          <div className="blackglass">
            <h5>My Skills:</h5>
            <p>
              I continue to upgrade my skills and pursue knowledge, as I
              understand the value of healing myself:
              <br />
              <br />
            </p>
            <p>
              300 hours of traning with
              <br />
              <u>
                <a href="https://thefourwinds.com/">The Four Winds</a>
              </u>{" "}
              in Germany.
              <br />
              <i>
                My teachers:{" "}
                <u>
                  <a href="//albertovilloldophd.com/">Alberto Villoldo</a>
                </u>
                ,{" "}
                <u>
                  <a href="https://www.marcelalobos.com/">Marcela Lobos</a>
                </u>
                ,{" "}
                <u>
                  <a href="https://www.purerevitalizingenergy.com/">
                    Stephen Feely
                  </a>
                </u>
                , <u>Moritz Reimann</u>,{" "}
                <u>
                  <a href="https://sites.google.com/site/urgesundenglish/ueber-mich">
                    Dirk Zschocke
                  </a>
                </u>
                ,{" "}
                <u>
                  <a href="https://www.isabella-marker.com/">Isabella Marker</a>
                </u>
                ,{" "}
                <u>
                  <a href="https://www.mariaclaracastaneda.com/">
                    Maria Clara Castaneda
                  </a>
                </u>{" "}
                and shamans of the{" "}
                <u>
                  <a href="https://shamaniceducation.org/qero-ancient-andean-tribe/">
                    Q'ero Tribe of Peru
                  </a>
                </u>
                .
              </i>
              <br />-
            </p>
            <p>
              <u>
                <a href="//ekaa.co.in/">EKAA Foundation</a>
              </u>{" "}
              in Dubai
              <br />
              <i>
                My teachers:{" "}
                <u>
                  <a href="//essentiawellbeing.com/about">Sherebanu Katawala</a>
                </u>
                , <u>Irina Khanna</u> and <u>Zankhana Mistry</u>
              </i>
              <br />-
            </p>
            <p>
              <u>
                <a href="https://ukhypnosisacademy.co.uk/">
                  UK Hypnosis Academy
                </a>
              </u>
              <br />
              in Oxford, England.
              <br />
              <i>
                My teachers:{" "}
                <u>
                  <a href="https://www.tamsinmorgan.co.uk/">Tamsin Morgan</a>
                </u>{" "}
                and{" "}
                <u>
                  <a href="https://www.mlmindandbody.co.uk/hypnosis">
                    Matthew Long
                  </a>
                </u>
              </i>
              <br />-
            </p>
            <p>
              Reiki I and II in Dubai
              <br />
              <i>
                My teacher:{" "}
                <u>
                  <a href="//blessingssands.com/">Nadia Siddiqui</a>
                </u>
              </i>
            </p>
          </div>
          <p className="hypnocol aboutForm p-4">
            "I am happy to answer any questions you might have.
            <br />
            Simply fill out the form below:"
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
