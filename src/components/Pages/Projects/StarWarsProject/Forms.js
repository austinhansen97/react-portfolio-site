import React from "react";
import "./Forms.css";
import { useState } from "react";
import NavBar from "../../NavBar/NavBar";

function Forms({planets}) {
  const [selectedPlanet, setSelectedPlanet] = useState([]);
  const [selectedPlanetImage, setSelectedPlanetImage] = useState({});
  const findSelectedPlanet = (planetName) => {
   setSelectedPlanet(planets?.find(planet => planetName === planet.name))
  }
  const findPlanetImage = (planetName) => {
    setSelectedPlanetImage(planetImagesArray.find(planet => planetName === planet.name))
  }

  const planetImagesArray = [
    {
      name: "Tatooine",
      planetImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/deciixo-361a4934-1b45-49bf-b977-7415017f8343.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGVjaWl4by0zNjFhNDkzNC0xYjQ1LTQ5YmYtYjk3Ny03NDE1MDE3ZjgzNDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VRPuDLCb7ch5gOVFv3TnherBSvlWjDZrJOWU2CmO3j0",
    },
    {
      name: "Alderaan",
      planetImage:
        "https://zam.zamimg.com/images/e/8/e86ba81c42e39563675f248e8366f9b4.png",
    },
    {
      name: "Yavin IV",
      planetImage:
        "https://www.jediholo.net/wp-content/uploads/2019/08/YavinIV_Planet_Preview.png",
    },
    { 
      name: "Hoth",
      planetImage: "https://juraj336.github.io/hoth1.png" },
    {
      name: "Dagobah",
      planetImage: "http://theforcebewith.us/images/dagobah.png",
    },
    {
      name: "Bespin",
      planetImage:
        "https://img.swcombine.com//galaxy/planets/custom/large/651.gif",
    },
    {
      name: "Endor",
      planetImage:
        "http://custom.swcombine.com/static/8/4/34-13715-1558966795-large.png",
    },
    {
      name: "Naboo",
      planetImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de4s3td-427b5200-3d1a-4052-9c63-e3480e9416d6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU0czN0ZC00MjdiNTIwMC0zZDFhLTQwNTItOWM2My1lMzQ4MGU5NDE2ZDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bS8Gf-QK2Lxrs995kE7PGPtIfRLviYq_8KQch2FTfys",
    },
    {
      name: "Coruscant",
      planetImage:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de6c8ft-163f01c9-61c9-4790-a531-6e509ada0b53.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU2YzhmdC0xNjNmMDFjOS02MWM5LTQ3OTAtYTUzMS02ZTUwOWFkYTBiNTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsbKumuLzOaLZRTXFQEUlyaZOcd8MsyRsFHo8hlnf_U",
    },
    {
      name: "Kamino",
      planetImage:
        "https://www.nicepng.com/png/full/374-3747261_kamino-australia-in-the-global-economy.png",
    },
  ];

  return (
    <section className="background-SW">
      <NavBar />
      <section className="card-wrapper-SW">
        <h1 className="title-SW">STAR WARS PLANETS</h1>
        <form className="parent-dropdowns-SW">
          <section className="left-panel-SW">
            <div className="label-select-SW">
              <label className="planets-label-SW">CHOOSE A PLANET</label>
              <select
                className="select-SW"
                onChange={(event) => {
                  findSelectedPlanet(event.target.value);
                  findPlanetImage(event.target.value);
                }}
              >
                {planets?.map((planet, i) => {
                  return <option value={planet.name} key={i}>{planet.name}</option>
                })}
              </select>
            </div>
          </section>

          <section className="right-panel-SW">
            <img className="planet-image" src={selectedPlanetImage?.planetImage} alt={selectedPlanetImage?.name}/> 
            <h3 className="header-3-SW">{selectedPlanet.name}</h3>
            <div className="facts-div">        
            <p>
              Population: {Number(selectedPlanet.population).toLocaleString()}
            </p>
            <p>Climate: {selectedPlanet.climate}</p>
            <p>Terrain: {selectedPlanet.terrain}</p></div>

          </section>
        </form>
      </section>
    </section>
  );
}

export default Forms;
